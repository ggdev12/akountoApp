<template>
  <div class="specular-card p-6">
    <div class="flex items-center justify-between mb-5">
      <h2 class="text-[14px] font-semibold text-white">Recent Activity</h2>
      <span v-if="activities.length" class="text-[12px] text-[#525252]">{{ activities.length }} events</span>
    </div>
    <div v-if="activities.length === 0" class="flex flex-col items-center justify-center py-10">
      <div class="w-10 h-10 rounded-full bg-[#0a0a0a]/[0.04] border border-white/[0.06] flex items-center justify-center mb-3">
        <svg class="w-4 h-4 text-[#525252]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <p class="text-[13px] text-[#525252]">No recent activity</p>
    </div>
    <div v-else class="space-y-0">
      <div v-for="(activity, i) in activities" :key="activity.id"
        :class="['flex items-center gap-3 py-3', i !== activities.length - 1 ? 'border-b border-white/[0.04]' : '']">
        <div class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
        <p class="flex-1 text-[13px] text-[#a1a1a1] truncate">{{ activity.description }}</p>
        <span class="text-[12px] text-[#525252] tabular-nums whitespace-nowrap font-mono">{{ activity.timeAgo }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const activities = ref([]);
const { $api } = useNuxtApp();

onMounted(async () => {
  try {
    const data = await $api.dashboard.get();
    activities.value = data.data.recentActivities.map((activity) => ({
      ...activity,
      description: formatDescription(activity.description),
      timeAgo: formatTimeAgo(activity.timestamp),
    }));
  } catch (error) {
    console.error('Failed to fetch dashboard data:', error);
  }
});

function formatTimeAgo(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  if (diffInSeconds < 60) return diffInSeconds + 's ago';
  if (diffInSeconds < 3600) return Math.floor(diffInSeconds / 60) + 'm ago';
  if (diffInSeconds < 86400) return Math.floor(diffInSeconds / 3600) + 'h ago';
  return Math.floor(diffInSeconds / 86400) + 'd ago';
}

function formatDescription(description) {
  return description.replace(/#([a-f0-9-]{36})/, (match, p1) => '#' + p1.slice(0, 5));
}
</script>
