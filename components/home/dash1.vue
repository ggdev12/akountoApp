<template>
  <div>
    <dl class="mt-0 grid grid-cols-1 gap-5 sm:grid-cols-4">
      <div v-for="item in stats" :key="item.name" class="overflow-hidden rounded-lg bg-[#0a0a0a] px-4 py-5 sm:p-6">
        <dt class="truncate text-sm font-medium text-[#71717a]">{{ item.name }}</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight" :class="item.color">{{ item.stat }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const stats = ref([]);
const { $api } = useNuxtApp();

onMounted(async () => {
  try {
    const data = await $api.dashboard.get();
    
    stats.value = [
      {
        name: 'Documents Scanned',
        stat: data.data.companyStats.totalDocuments || 0,
        color: 'text-emerald-400'
      },
      {
        name: 'Processed',
        stat: data.data.companyStats.completedDocuments || 0,
        color: 'text-green-500'
      },
      {
        name: 'Failed',
        stat: data.data.companyStats.pendingDocuments || 0,
        color: 'text-red-500'
      },
      {
        name: 'Success Rate',
        stat: `${isNaN(data.data.companyStats.successRate) ? 0 : data.data.companyStats.successRate}%`,
        color: 'text-emerald-400'
      }
    ];
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
  }
});
</script>