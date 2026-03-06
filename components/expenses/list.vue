<template>
  <div class="mt-0 h-full">
    <ExpensesEditdocment :document="selectedDocument" :vendors="vendors" v-if="selectedDocument" />

    <!-- Mobile card view -->
    <div class="sm:hidden space-y-3">
      <div
        v-for="receipt in documents"
        :key="receipt.id"
        class="specular-card p-4"
      >
        <template v-if="!receipt.processed_data">
          <div class="flex items-center justify-between">
            <span class="text-sm text-[#a1a1a1] truncate">{{ receipt.file_path.slice(-15) }}</span>
            <span :class="[statusStyles[receipt.status], 'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium']">{{ getStatus(receipt) }}</span>
          </div>
          <div class="mt-2 animate-pulse">
            <div class="h-2 bg-[#0a0a0a]/[0.06] rounded w-3/4"></div>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-emerald-400 cursor-pointer truncate" @click="selectDocument(receipt)">{{ receipt.file_path.slice(-15) }}</span>
            <span :class="[statusStyles[receipt.status], 'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium']">{{ getStatus(receipt) }}</span>
          </div>
          <div class="flex items-center justify-between text-[13px]">
            <span class="text-[#71717a]">{{ receipt.Purchase?.Vendor?.name || '—' }}</span>
            <span class="text-white font-mono font-medium">{{ receipt?.processed_data?.processed_json?.TotalAmount || '—' }}</span>
          </div>
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
              <th class="px-6 py-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Payee</th>
              <th class="px-6 py-3 text-right text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Amount</th>
              <th class="px-6 py-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.04]">
            <tr v-for="receipt in documents" :key="receipt.id" class="hover:bg-[#0a0a0a]/[0.02] transition-colors">
              <template v-if="!receipt.processed_data">
                <td class="whitespace-nowrap px-6 py-4 text-sm text-[#a1a1a1]">{{ receipt.file_path.slice(-10) }}</td>
                <td colspan="2" class="px-6 py-4">
                  <div class="animate-pulse flex space-x-4">
                    <div class="flex-1 space-y-1 py-1"><div class="h-2 bg-[#0a0a0a]/[0.06] rounded"></div></div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span :class="[statusStyles[receipt.status], 'inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium']">{{ getStatus(receipt) }}</span>
                </td>
              </template>
              <template v-else>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-[#a1a1a1] flex items-center">
                  <DocumentTextIcon class="w-4 h-4 mr-2 text-[#525252]" />
                  <span class="cursor-pointer text-emerald-400 hover:text-emerald-300 transition-colors" @click="selectDocument(receipt)">{{ receipt.file_path.slice(-10) }}</span>
                </td>
                <td class="whitespace-nowrap px-6 py-1 text-sm text-[#a1a1a1]">
                  <input
                    v-if="receipt.Purchase?.Vendor"
                    list="vendors"
                    v-model="receipt.Purchase.Vendor.name"
                    class="bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-md text-white focus:ring-emerald-500 focus:border-emerald-500 text-xs h-7 py-0 px-2"
                    placeholder="Select or type"
                  />
                  <span v-else class="animate-pulse text-[#525252]">Extracting...</span>
                  <datalist id="vendors">
                    <option v-for="vendor in vendors" :value="vendor.name"></option>
                  </datalist>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-right text-sm text-white font-mono">{{ receipt?.processed_data?.processed_json?.TotalAmount || '—' }}</td>
                <td class="whitespace-nowrap px-6 py-4 text-sm">
                  <span :class="[statusStyles[receipt.status], 'inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium']">{{ getStatus(receipt) }}</span>
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
import { ref, watch } from "vue";
import { DocumentTextIcon } from "@heroicons/vue/24/outline";

const props = defineProps({ documents: Array, vendors: Array });
const selectedDocument = ref(null);
const selectDocument = (document) => { selectedDocument.value = document; };

const statusStyles = {
  Uploading: "badge-processing",
  Extraction: "badge-extracting",
  MissingData: "badge-missing",
  Ready: "badge-ready",
  Processing: "badge-processing",
  Processed: "badge-processed",
};

const getStatus = (receipt) => {
  if (receipt.status === "Extraction") return "Extracting Data";
  return receipt.status;
};

watch(() => props.vendors, (newVal) => { console.log("Vendors data changed:", newVal); });
</script>
