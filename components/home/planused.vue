<template>
  <div class="bg-[#0a0a0a] rounded-lg p-6">
    <h3 class="text-lg font-semibold text-[#a1a1a1] mb-2">Your Current Plan</h3>
    <!-- <p class="text-sm text-[#71717a] mb-4">Here's how much you've used of your current plan:</p> -->
    <div class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="text-sm text-[#71717a]">Documents Processed</span>
        <span class="text-sm font-semibold text-[#a1a1a1]"
          >{{ usage.current }} / {{ usage.limit }}</span
        >
      </div>
      <div class="w-full bg-white/[0.06] rounded-full h-2.5">
        <div
          class="bg-emerald-500 h-2.5 rounded-full"
          :style="{ width: `${usagePercentage}%` }"
        ></div>
      </div>
    </div>
    <p class="text-sm text-[#71717a] mb-4">
      Need more? upgrade to a higher plan!
    </p>
    <button
      @click="upgradePlan"
      class="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded"
    >
      Upgrade
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useNuxtApp } from "#app";

const usage = ref({ current: 0, limit: 100 });
const usagePercentage = computed(
  () => (usage.value.current / usage.value.limit) * 100,
);
const { $api } = useNuxtApp();

onMounted(async () => {
  try {
    const data = await $api.dashboard.get();
    usage.value.current = data.data.companyStats.completedDocuments;
  } catch (error) {
    console.error("Failed to fetch dashboard data:", error);
  }
});

const upgradePlan = () => {
  location.href = "/account/plan";
};
</script>
