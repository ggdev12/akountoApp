<template>
  <div>
    <div class="border-b border-white/[0.06] -mx-8 pb-4">
      <div class="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div class="mb-2 -mt-4">
          <div class="flex items-center">
            <div class="ml-4">
              <h3 class="text-base font-semibold leading-6 text-white">Step 1: Create your 1st company</h3>
              <p class="text-sm text-[#71717a]">Create a company. You can create more companies later.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-4 mt-4">
      <label class="block text-[#a1a1a1] font-medium mb-2 text-sm" for="companyName">Company Name</label>
      <input v-model="companyName"
        class="w-full px-4 py-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-sm"
        type="text" id="companyName" placeholder="Enter company name" />
    </div>
    <div class="flex items-center gap-3">
      <button @click="createCompany"
        class="bg-emerald-500 text-white px-4 py-2.5 rounded-lg hover:bg-emerald-400 transition duration-150 flex items-center text-sm font-medium"
        :disabled="creatingCompany">
        <span v-if="!creatingCompany">Create Company</span>
        <span v-else>Creating Company...</span>
      </button>
      <button @click="emit('skip')"
        class="text-[#a1a1a1] hover:text-white px-4 py-2.5 rounded-lg border border-white/[0.08] hover:border-white/[0.16] transition duration-150 text-sm font-medium">
        Skip
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';

const companyName = ref('');
const creatingCompany = ref(false);
const companyID = ref('');
const emit = defineEmits(['company-created', 'skip']);

const createCompany = async () => {
  if (!companyName.value.trim()) { alert('Please enter a company name'); return; }
  creatingCompany.value = true;
  const { $api } = useNuxtApp();
  try {
    const response = await $api.company.create({ companyName: companyName.value });
    companyID.value = response.data.id;
    localStorage.setItem('companyID', response.data.id);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    emit('company-created', { success: true, message: 'Company created successfully!', companyID: companyID.value });
    companyName.value = '';
  } catch (error) {
    console.error('Error creating company:', error);
    emit('company-created', { success: false, message: 'Failed to create company. Please try again.' });
  } finally {
    creatingCompany.value = false;
  }
};
</script>
