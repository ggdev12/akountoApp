<template>
  <div class="max-w-[1400px] mx-auto animate-fade-in">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-[22px] font-semibold text-white tracking-tight">Dashboard</h1>
      <p class="mt-1 text-[13px] text-[#71717a]">Track your document processing, usage, and activity.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="(stat, i) in statsCards" :key="stat.label"
        class="specular-card p-5 transition-all duration-200 hover:border-white/[0.12] group"
        :style="{ animationDelay: i * 80 + 'ms' }">
        <div class="flex items-center justify-between mb-3">
          <span class="text-[11px] font-semibold text-[#71717a] uppercase tracking-wider">{{ stat.label }}</span>
          <div :class="[stat.dotColor, 'w-2 h-2 rounded-full']" style="box-shadow: 0 0 8px currentColor;"></div>
        </div>
        <p class="text-[28px] font-semibold text-white tracking-tight leading-none font-mono">{{ stat.value }}</p>
      </div>
    </div>

    <!-- Two Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left -->
      <div class="lg:col-span-8 space-y-6">
        <!-- Quick Actions -->
        <div class="specular-card p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="text-[14px] font-semibold text-white">Quick Actions</h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button v-for="action in actions" :key="action.label" @click="action.handler"
              class="group/btn relative flex flex-col items-center gap-3 p-5 rounded-xl border border-white/[0.06] bg-[#0a0a0a]/[0.02] hover:bg-emerald-500/[0.06] hover:border-emerald-500/20 transition-all duration-200 cursor-pointer">
              <div class="w-9 h-9 rounded-lg bg-[#0a0a0a]/[0.04] border border-white/[0.08] group-hover/btn:border-emerald-500/30 group-hover/btn:bg-emerald-500/10 flex items-center justify-center transition-all duration-200">
                <component :is="action.icon" class="w-4 h-4 text-[#71717a] group-hover/btn:text-emerald-400 transition-colors" />
              </div>
              <span class="text-[12px] font-medium text-[#a1a1a1] group-hover/btn:text-white transition-colors text-center">{{ action.label }}</span>
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
        <div class="specular-card p-6">
          <h2 class="text-[14px] font-semibold text-white mb-1">Usage</h2>
          <p class="text-[12px] text-[#525252] mb-6">Current billing period</p>

          <div class="space-y-5">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] text-[#a1a1a1]">Documents</span>
                <span class="text-[13px] font-mono font-medium text-white">{{ companyStats.totalDocuments || 0 }}<span class="text-[#525252]">/100</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#0a0a0a]/[0.04] rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full transition-all duration-700" :style="{ width: Math.min((companyStats.totalDocuments || 0), 100) + '%' }"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] text-[#a1a1a1]">Team Members</span>
                <span class="text-[13px] font-mono font-medium text-white">{{ companyStats.totalUsers || 0 }}<span class="text-[#525252]">/10</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#0a0a0a]/[0.04] rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full transition-all duration-700" :style="{ width: Math.min(((companyStats.totalUsers || 0) / 10) * 100, 100) + '%' }"></div>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[13px] text-[#a1a1a1]">Storage</span>
                <span class="text-[13px] font-mono font-medium text-white">2.0<span class="text-[#525252]"> / 8 GB</span></span>
              </div>
              <div class="w-full h-1.5 bg-[#0a0a0a]/[0.04] rounded-full overflow-hidden">
                <div class="h-full bg-emerald-500 rounded-full transition-all duration-700" style="width: 25%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Plan -->
        <div class="relative overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] to-transparent p-6">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div class="flex items-center justify-between mb-4 relative">
            <div>
              <h2 class="text-[14px] font-semibold text-white">Free Plan</h2>
              <p class="text-[12px] text-[#71717a] mt-0.5">100 documents / month</p>
            </div>
            <span class="text-[11px] font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 rounded-full px-2.5 py-0.5">Current</span>
          </div>
          <div class="mb-5 relative">
            <div class="flex items-baseline gap-1">
              <span class="text-[32px] font-semibold tracking-tight text-white font-mono">{{ planUsage.current || 0 }}</span>
              <span class="text-[14px] text-[#525252]">/{{ planUsage.limit || 100 }} docs used</span>
            </div>
            <div class="w-full h-1 bg-[#0a0a0a]/[0.06] rounded-full overflow-hidden mt-3">
              <div class="h-full bg-emerald-500 rounded-full transition-all duration-700" :style="{ width: Math.min(((planUsage.current || 0) / (planUsage.limit || 100)) * 100, 100) + '%' }"></div>
            </div>
          </div>
          <button @click="navigateTo('/account/plan')" class="w-full py-2.5 text-[13px] font-medium bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors duration-150 glow-green">
            Upgrade to Pro
          </button>
        </div>

        <!-- Breakdown -->
        <div class="specular-card p-6">
          <h2 class="text-[14px] font-semibold text-white mb-4">Document Breakdown</h2>
          <div class="space-y-3">
            <div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
              <div class="flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                <span class="text-[13px] text-[#a1a1a1]">Invoices</span>
              </div>
              <span class="text-[13px] font-mono font-medium text-white">{{ companyStats.totalDocuments || 0 }}</span>
            </div>
            <div class="flex items-center justify-between py-2 border-b border-white/[0.04]">
              <div class="flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span class="text-[13px] text-[#a1a1a1]">Receipts</span>
              </div>
              <span class="text-[13px] font-mono font-medium text-white">{{ companyStats.completedDocuments || 0 }}</span>
            </div>
            <div class="flex items-center justify-between py-2">
              <div class="flex items-center gap-2.5">
                <div class="w-2 h-2 rounded-full bg-amber-400"></div>
                <span class="text-[13px] text-[#a1a1a1]">Pending Review</span>
              </div>
              <span class="text-[13px] font-mono font-medium text-white">{{ companyStats.pendingDocuments || 0 }}</span>
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
  { label: 'Scanned', value: '0', dotColor: 'text-blue-400' },
  { label: 'Processed', value: '0', dotColor: 'text-emerald-400' },
  { label: 'Failed', value: '0', dotColor: 'text-red-400' },
  { label: 'Success Rate', value: '0%', dotColor: 'text-amber-400' },
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
        { label: 'Scanned', value: String(response.data.companyStats.totalDocuments || 0), dotColor: 'text-blue-400' },
        { label: 'Processed', value: String(response.data.companyStats.completedDocuments || 0), dotColor: 'text-emerald-400' },
        { label: 'Failed', value: String(response.data.companyStats.pendingDocuments || 0), dotColor: 'text-red-400' },
        { label: 'Success Rate', value: (isNaN(response.data.companyStats.successRate) ? 0 : response.data.companyStats.successRate) + '%', dotColor: 'text-amber-400' },
      ];
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  }
});
</script>
