<template>
  <div class="animate-fade-in">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-[22px] font-semibold text-white tracking-tight">Manage Customers</h1>
        <p class="mt-1 text-[13px] text-[#71717a]">Manage and oversee your customer interactions effectively.</p>
      </div>
      <button type="button" @click="isAddCustomerModalOpen = true"
        class="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-[13px] font-medium text-white shadow-sm hover:bg-emerald-400 transition-all duration-150 shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Add Customer
      </button>
    </div>

    <div v-if="isAddCustomerModalOpen" class="fixed inset-0 bg-black/60 backdrop-blur-sm overflow-y-auto h-full w-full z-50">
      <CustomersAdd :isAddCustomerModalOpen="isAddCustomerModalOpen" @close-dialog="closeAddCustomerModal" />
    </div>

    <!-- Empty State -->
    <div v-if="!loading && customers.results && customers.results.length === 0" class="specular-card flex flex-col items-center justify-center py-20 px-6 text-center">
      <div class="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5">
        <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-white mb-2">No customers yet</h3>
      <p class="text-[13px] text-[#71717a] max-w-sm mb-6">Add your first customer to start tracking invoices and managing your sales relationships.</p>
      <button @click="isAddCustomerModalOpen = true"
        class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-[13px] font-medium text-white shadow-sm hover:bg-emerald-400 transition-all duration-150">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Add your first customer
      </button>
    </div>

    <!-- Loading State -->
    <div v-else-if="loading" class="space-y-3">
      <div v-for="i in 3" :key="i" class="specular-card p-4">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-white/[0.06] h-10 w-10"></div>
          <div class="flex-1 space-y-2 py-1">
            <div class="h-2 bg-white/[0.06] rounded w-1/3"></div>
            <div class="h-2 bg-white/[0.04] rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Customer Table -->
    <div v-else-if="customers.results && customers.results.length > 0" class="specular-card overflow-hidden">
      <!-- Desktop Table -->
      <div class="hidden sm:block overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="border-b border-white/[0.06]">
              <th class="py-3.5 pl-6 pr-3 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Name</th>
              <th class="px-3 py-3.5 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Email</th>
              <th class="px-3 py-3.5 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Phone</th>
              <th class="px-3 py-3.5 text-left text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">Billing Address</th>
              <th class="relative py-3.5 pl-3 pr-6"><span class="sr-only">Edit</span></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/[0.04]">
            <tr v-for="customer in customers.results" :key="customer.id" class="hover:bg-white/[0.02] transition-colors">
              <td class="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-white">{{ customer.name }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-[#a1a1a1]">{{ customer.email || "—" }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-[#a1a1a1]">{{ customer.phone || "—" }}</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-[#a1a1a1]">
                {{ formatAddress(customer.billing_address) }}
              </td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm">
                <CustomersEdit :customer="customer" :isEditModelOpen="isEditModelOpen" @close-dialog="closeEditCustomerModal" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Cards -->
      <div class="sm:hidden divide-y divide-white/[0.04]">
        <div v-for="customer in customers.results" :key="customer.id" class="p-4 hover:bg-white/[0.02] transition-colors">
          <div class="flex items-start justify-between">
            <div class="min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ customer.name }}</p>
              <p v-if="customer.email" class="text-xs text-[#a1a1a1] mt-1">{{ customer.email }}</p>
              <p v-if="customer.phone" class="text-xs text-[#71717a] mt-0.5">{{ customer.phone }}</p>
            </div>
            <CustomersEdit :customer="customer" :isEditModelOpen="isEditModelOpen" @close-dialog="closeEditCustomerModal" />
          </div>
        </div>
      </div>

      <nav class="flex items-center justify-between border-t border-white/[0.06] px-6 py-3">
        <div class="hidden sm:block">
          <p class="text-sm text-[#71717a]">
            Showing <span class="font-medium text-[#a1a1a1]">{{ (pagination.currentPage - 1) * 10 + 1 }}</span>
            to <span class="font-medium text-[#a1a1a1]">{{ Math.min(pagination.currentPage * 10, pagination.totalCount) }}</span>
            of <span class="font-medium text-[#a1a1a1]">{{ pagination.totalCount }}</span> results
          </p>
        </div>
        <div class="flex flex-1 justify-between sm:justify-end gap-2">
          <button @click="fetchCustomers(pagination.currentPage - 1)" v-if="pagination.currentPage > 1"
            class="px-3 py-2 text-sm font-medium text-[#a1a1a1] border border-white/[0.08] rounded-lg hover:bg-white/[0.04] transition-colors">Previous</button>
          <button @click="fetchCustomers(pagination.currentPage + 1)" v-if="pagination.currentPage < pagination.totalPages"
            class="px-3 py-2 text-sm font-medium text-[#a1a1a1] border border-white/[0.08] rounded-lg hover:bg-white/[0.04] transition-colors">Next</button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const customers = ref({ stats: {}, results: [] });
const pagination = ref({ currentPage: 1, totalPages: 0, totalCount: 0 });
const isAddCustomerModalOpen = ref(false);
const isEditModelOpen = ref(false);
const loading = ref(true);

const token = process.client ? localStorage.getItem("token") || "" : "";
onMounted(() => { if (!token) navigateTo("/auth/register"); });

const closeAddCustomerModal = () => { isAddCustomerModalOpen.value = false; fetchCustomers(); };
const closeEditCustomerModal = () => { isEditModelOpen.value = false; fetchCustomers(); };

const companyId = process.client ? localStorage.getItem("companyID") || "" : "";

const formatAddress = (addr) => {
  if (!addr) return "—";
  const parts = [addr.Line1, addr.City, addr.State, addr.ZipCode].filter(Boolean);
  return parts.length > 0 ? parts.join(", ") : "—";
};

async function fetchCustomers(page = 1) {
  try {
    loading.value = true;
    const response = await useNuxtApp().$api.customers.list(companyId, page);
    customers.value = response.data;
    pagination.value.currentPage = response.data.stats.currentPage;
    pagination.value.totalPages = response.data.stats.totalPages;
    pagination.value.totalCount = response.data.stats.totalCount;
  } catch (error) {
    console.error("Failed to fetch customers:", error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => { fetchCustomers(); });
</script>
