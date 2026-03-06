<template>
  <div class="mt-0 h-full">
    <SalesEditdocument :document="selectedDocument" :customers="customers" v-if="selectedDocument" />

    <!-- Mobile card view -->
    <div class="sm:hidden space-y-3">
      <div
        v-for="invoice in sortedDocs"
        :key="invoice.id"
        class="specular-card p-4"
      >
        <template v-if="!invoice.processed_data">
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#a1a1a1] truncate">{{ invoice.file_path.slice(-15) }}</span>
            <span :class="[statusStyles[invoice.status], 'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium']">{{ getStatus(invoice) }}</span>
          </div>
          <div class="mt-2 animate-pulse">
            <div class="h-2 bg-[#0a0a0a]/[0.06] rounded w-3/4"></div>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-emerald-400 cursor-pointer truncate" @click="selectDocument(invoice)">{{ invoice.file_path.slice(-15) }}</span>
            <span :class="[statusStyles[invoice.status], 'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium']">{{ getStatus(invoice) }}</span>
          </div>
          <div class="flex items-center justify-between text-[13px]">
            <span class="text-[#71717a]">{{ invoice?.processed_data?.processed_json?.InvoiceNumber?.slice(0, 10) || '—' }}</span>
            <span class="text-white font-mono font-medium">{{ invoice?.processed_data?.processed_json?.TotalAmount || '—' }}</span>
          </div>
          <div v-if="invoice.Invoice?.Customer?.name" class="mt-1 text-xs text-[#525252]">{{ invoice.Invoice.Customer.name }}</div>
        </template>
      </div>
    </div>

    <!-- Desktop table view -->
    <div class="hidden sm:block">
      <div class="specular-card overflow-hidden">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-white/[0.06]">
              <th class="px-6 py-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">FileName</th>
              <th class="px-6 py-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Invoice#</th>
              <th class="px-6 py-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Customer</th>
              <th class="px-6 py-3 text-right text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Amount</th>
              <th class="px-6 py-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.04]">
            <tr v-for="invoice in sortedDocs" :key="invoice.id" class="hover:bg-[#0a0a0a]/[0.02] transition-colors">
              <template v-if="!invoice.processed_data">
                <td class="whitespace-nowrap px-6 py-4 text-sm text-[#a1a1a1]">{{ invoice.file_path.slice(-10) }}</td>
                <td colspan="3" class="px-6 py-4">
                  <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-1 py-1">
                      <div class="h-2 bg-[#0a0a0a]/[0.06] rounded"></div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span :class="[statusStyles[invoice.status], 'inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium']">{{ getStatus(invoice) }}</span>
                </td>
              </template>
              <template v-else>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-[#a1a1a1] flex items-center">
                  <DocumentTextIcon class="w-4 h-4 mr-2 text-[#525252]" />
                  <span class="cursor-pointer text-emerald-400 hover:text-emerald-300 transition-colors" @click="selectDocument(invoice)">{{ invoice.file_path.slice(-10) }}</span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-[#a1a1a1] font-mono">{{ invoice?.processed_data?.processed_json?.InvoiceNumber?.slice(0, 10) || '—' }}</td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-[#a1a1a1]">
                  <span>{{ invoice.Invoice?.Customer?.name || '—' }}</span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-right text-sm text-white font-mono">{{ invoice?.processed_data?.processed_json?.TotalAmount || '—' }}</td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span :class="[statusStyles[invoice.status], 'inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium']">{{ getStatus(invoice) }}</span>
                </td>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { DocumentTextIcon } from "@heroicons/vue/24/outline";

const props = defineProps({ documents: Array, customers: Array });
const selectedDocument = ref(null);
const selectDocument = (document) => { selectedDocument.value = document; };

const sortedDocs = computed(() =>
  [...(props.documents || [])].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
);

const statusStyles = {
  Uploading: "badge-processing",
  Extraction: "badge-extracting",
  MissingData: "badge-missing",
  Ready: "badge-ready",
  Processing: "badge-processing",
  Processed: "badge-processed",
};

const getStatus = (invoice) => {
  if (invoice.status === "Extraction") return "Extracting Data";
  return invoice.status;
};

watch(() => props.customers, (newVal) => { console.log("Customers data changed:", newVal); });
</script>
