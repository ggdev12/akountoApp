<template>
  <div class="max-w-[1400px] mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-[22px] font-semibold text-[#171717] tracking-tight">Dashboard</h1>
      <p class="mt-1 text-[13px] text-[#666]">Track your document processing, usage, and activity.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="stat in statsCards" :key="stat.label"
        class="bg-white rounded-xl border border-[#eaeaea] p-5 transition-all duration-200 hover:border-[#d4d4d4] hover:shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <span class="text-[12px] font-medium text-[#666] uppercase tracking-wider">{{ stat.label }}</span>
          <div :class="[stat.dotColor, 'w-2 h-2 rounded-full']"></div>
        </div>
        <p class="text-[28px] font-semibold text-[#171717] tracking-tight leading-none">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left -->
      <div class="lg:col-span-8 space-y-6">
        <!-- Quick Actions -->
        <div class="bg-white rounded-xl border border-[#eaeaea] p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-[14px] font-semibold text-[#171717]">Quick Actions</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button v-for="action in actions" :key="action.label" @click="action.handler"
              class="group relative flex flex-col items-center gap-3 p-5 rounded-xl border border-[#eaeaea] bg-[#fafafa] hover:bg-white hover:border-[#171717] hover:shadow-sm transition-all duration-200 cursor-pointer">
              <div class="w-9 h-9 rounded-lg bg-white border border-[#eaeaea] group-hover:border-[#d4d4d4] flex items-center justify-center transition-all duration-200 shadow-sm">
                <component :is="action.icon" class="w-4 h-4 text-[#666] group-hover:text-[#171717] transition-colors" />
              </div>
              <span class="text-[12px] font-medium text-[#666] group-hover:text-[#171717] transition-colors text-center">{{ action.label }}</span>
            </button>
          </div>
        </div>

        <!-- Chart -->
        <HomeTrend />

        <!-- Recent Activity -->
        <HomeRecent />
      </div>

      <!-- Right -->
      <div class="lg:col-span-4 space-y-6">
        <!-- Usage -->
        <div class="bg-white rounded-xl border border-[#eaeaea] p-6">
          <h2 class="text-[14px] font-semibold text-[#171717] mb-1">Usage</h2>
          <p class="text-[12px] text-[#999] mb-6">Current billing period</p>

          <div class="space-y-5">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] text-[#666]">Documents</span>
                <span class="text-[13px] font-mono font-medium text-[#171717]">{{ companyStats.totalDocuments || 0 }}<span class="text-[#999]">/100</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
                <div class="h-full bg-[#171717] rounded-full transition-all duration-700" :style="{ width: Math.min((companyStats.totalDocuments || 0), 100) + '%' }"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] text-[#666]">Team Members</span>
                <span class="text-[13px] font-mono font-medium text-[#171717]">{{ companyStats.totalUsers || 0 }}<span class="text-[#999]">/10</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
                <div class="h-full bg-[#171717] rounded-full transition-all duration-700" :style="{ width: Math.min(((companyStats.totalUsers || 0) / 10) * 100, 100) + '%' }"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] text-[#666]">Storage</span>
                <span class="text-[13px] font-mono font-medium text-[#171717]">2.0<span class="text-[#999]"> / 8 GB</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#f5f5f5] rounded-full overflow-hidden">
                <div class="h-full bg-[#171717] rounded-full transition-all duration-700" style="width: 25%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Plan -->
        <div class="bg-[#171717] rounded-xl p-6 text-white">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-[14px] font-semibold">Free Plan</h2>
              <p class="text-[12px] text-[#999] mt-0.5">100 documents / month</p>
            </div>
            <span class="text-[11px] font-medium text-[#999] border border-[#333] rounded-full px-2.5 py-0.5">Current</span>
          </div>
          <div class="mb-5">
            <div class="flex items-baseline gap-1">
              <span class="text-[32px] font-semibold tracking-tight">{{ planUsage.current || 0 }}</span>
              <span class="text-[14px] text-[#666]">/{{ planUsage.limit || 100 }} docs used</span>
            </div>
            <div class="w-full h-1 bg-[#333] rounded-full overflow-hidden mt-3">
              <div class="h-full bg-white rounded-full transition-all duration-700" :style="{ width: Math.min(((planUsage.current || 0) / (planUsage.limit || 100)) * 100, 100) + '%' }"></div>
            </div>
          </div>
          <button @click="navigateTo('/account/plan')" class="w-full py-2.5 text-[13px] font-medium bg-white text-[#171717] rounded-lg hover:bg-[#f5f5f5] transition-colors duration-150">
            Upgrade to Pro
          </button>
        </div>

        <!-- Breakdown -->
        <div class="bg-white rounded-xl border border-[#eaeaea] p-6">
          <h2 class="text-[14px] font-semibold text-[#171717] mb-4">Document Breakdown</h2>
          <div class="space-y-3">
            <div class="flex items-center justify-between py-2 border-b border-[#f5f5f5]">
              <div class="flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-[#0070f3]"></div>
                <span class="text-[13px] text-[#666]">Invoices</span>
              </div>
              <span class="text-[13px] font-mono font-medium text-[#171717]">{{ companyStats.totalDocuments || 0 }}</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-[#f5f5f5]">
              <div class="flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-[#00c853]"></div>
                <span class="text-[13px] text-[#666]">Receipts</span>
              </div>
              <span class="text-[13px] font-mono font-medium text-[#171717]">{{ companyStats.completedDocuments || 0 }}</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <div class="flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-[#ff6b00]"></div>
                <span class="text-[13px] text-[#666]">Pending Review</span>
              </div>
              <span class="text-[13px] font-mono font-medium text-[#171717]">{{ companyStats.pendingDocuments || 0 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import { DocumentArrowUpIcon, ChartBarIcon, ClipboardDocumentCheckIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';

const userStats = ref({});
const companyStats = ref({});
const planUsage = ref({});

const token = process.client ? localStorage.getItem('token') || '' : '';

const statsCards = ref([
  { label: 'Scanned', value: '0', dotColor: 'bg-blue-500' },
  { label: 'Processed', value: '0', dotColor: 'bg-emerald-500' },
  { label: 'Failed', value: '0', dotColor: 'bg-red-500' },
  { label: 'Success Rate', value: '0%', dotColor: 'bg-amber-500' },
]);

const actions = [
  { label: 'Upload Invoice', icon: DocumentArrowUpIcon, handler: () => { location.href = '/sales'; } },
  { label: 'Upload Receipts', icon: DocumentTextIcon, handler: () => { location.href = '/costs'; } },
  { label: 'View Reports', icon: ChartBarIcon, handler: () => { location.href = '/reports'; } },
  { label: 'Review Pending', icon: ClipboardDocumentCheckIcon, handler: () => { location.href = '/sales?status=MissingData'; } },
];

onMounted(async () => {
  if (!token) {
    navigateTo('/auth/register');
  } else {
    try {
      const { $api } = useNuxtApp();
      const response = await $api.dashboard.get();
      userStats.value = response.data.userStats;
      companyStats.value = response.data.companyStats;
      planUsage.value = response.data.planUsage;

      statsCards.value = [
        { label: 'Scanned', value: String(response.data.companyStats.totalDocuments || 0), dotColor: 'bg-blue-500' },
        { label: 'Processed', value: String(response.data.companyStats.completedDocuments || 0), dotColor: 'bg-emerald-500' },
        { label: 'Failed', value: String(response.data.companyStats.pendingDocuments || 0), dotColor: 'bg-red-500' },
        { label: 'Success Rate', value: (isNaN(response.data.companyStats.successRate) ? 0 : response.data.companyStats.successRate) + '%', dotColor: 'bg-amber-500' },
      ];
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  }
});
</script>
