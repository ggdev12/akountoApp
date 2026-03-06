<template>
  <div class="border-b border-white/[0.06] -mx-8 pb-4">
    <div class="flex flex-wrap items-center justify-between sm:flex-nowrap">
      <div class="mb-2 -mt-4">
        <div class="flex items-center">
          <div class="ml-4">
            <h3 class="text-base font-semibold leading-6 text-white">Step 2: Setup accounting integration</h3>
            <p class="text-sm text-[#71717a]">Setup your accounting integration to get your financial data into Kounto.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 border-b border-white/[0.06] pb-10">
    <div v-for="integration in integrations" :key="integration.id"
      class="group relative specular-card p-4 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500/30 transition-all">
      <div v-if="selectedIntegration.id === integration.id" class="w-full flex items-center justify-center bg-opacity-10 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="277" height="146" fill="none" viewBox="0 0 277 146">
          <path fill="#2CA01C" d="M30.767 99.535c16.993 0 30.768-13.775 30.768-30.768C61.535 51.775 47.76 38 30.767 38 13.775 38 0 51.775 0 68.767 0 85.76 13.775 99.535 30.767 99.535Z"/>
          <path fill="#fff" d="M20.508 56.8c-6.612 0-11.965 5.361-11.965 11.966 0 6.604 5.353 11.964 11.965 11.964h1.709v-4.444h-1.71a7.525 7.525 0 0 1-7.52-7.52c0-4.15 3.37-7.522 7.52-7.522h4.11v23.247a4.444 4.444 0 0 0 4.443 4.443V56.801h-8.553Zm20.525 23.93c6.611 0 11.965-5.36 11.965-11.965 0-6.604-5.353-11.964-11.965-11.964h-1.709v4.444h1.71c4.15 0 7.52 3.371 7.52 7.521s-3.37 7.522-7.52 7.522h-4.11V53.04a4.444 4.444 0 0 0-4.444-4.443v32.134h8.554v-.002Z"/>
          <path fill="#fff" d="M90.755 107h-4.76V94.946h-.08c-1.231 1.9-3.652 3.09-6.305 3.09-5.791 0-9.36-4.601-9.36-10.153 0-5.553 3.808-9.996 9.237-9.996 3.487 0 5.634 1.702 6.584 3.213h.116v-2.66h4.56v28.559h.008V107Z"/>
        </svg>
      </div>
    </div>
  </div>

  <div v-if="selectedIntegration.id === 1" class="py-5 flex items-center gap-3">
    <button @click="authQuickbooks" class="bg-[#2CA01C] text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-[#248a17] transition-colors">
      Connect to QuickBooks
    </button>
    <button @click="emit('skip')"
      class="text-[#a1a1a1] hover:text-white px-6 py-3 rounded-lg border border-white/[0.08] hover:border-white/[0.16] font-medium text-sm transition-colors">
      Skip
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';

const emit = defineEmits(['skip']);
const integrations = ref([{ id: 1, name: 'QuickBooks', logo: 'quickbooks.com' }]);
const selectedIntegration = ref({ id: 1, name: 'QuickBooks', logo: 'quickBooks.com' });

const authQuickbooks = async () => {
  const { $api } = useNuxtApp();
  try {
    const companyId = process.client ? localStorage.getItem('companyID') || '' : '';
    const auth = await $api.quickbooks.auth(companyId);
    if (auth.data) navigateTo(auth.data, { external: true });
  } catch (error) {
    console.error('Error while authenticating QuickBooks:', error);
  }
};
</script>
