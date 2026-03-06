<template>
    <div class="bg-[#0a0a0a] rounded-lg  p-6">
      <h3 class="text-lg font-semibold text-[#a1a1a1] mb-4">Top Customers</h3>
      <ul class="space-y-3">
        <li v-for="customer in customers" :key="customer.name" class="flex items-center justify-between">
          <span class="text-sm text-[#a1a1a1]">{{ customer.name }}</span>
          <span class="text-sm font-semibold text-[#a1a1a1]">{{ customer.amount }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const customers = ref([
    { name: 'Acme Corp', amount: '$12,345' },
    { name: 'GlobalTech Inc', amount: '$9,876' },
    { name: 'Smith & Co', amount: '$7,654' },
  ]);
  </script>