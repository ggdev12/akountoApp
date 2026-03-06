<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div>
      <h1 class="text-[20px] sm:text-[22px] font-semibold text-white tracking-tight">Manage Invoices</h1>
      <p class="mt-0.5 sm:mt-1 text-[12px] sm:text-[13px] text-[#71717a]">Manage and process your sales invoices.</p>
    </div>
    <div class="flex">
      <button
        @click="triggerFileUpload"
        type="button"
        :disabled="uploading"
        :class="[
          'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-medium shadow-sm transition-all duration-150 w-full sm:w-auto justify-center',
          uploading
            ? 'bg-emerald-500/60 text-white/70 cursor-not-allowed'
            : 'bg-emerald-500 text-white hover:bg-emerald-400'
        ]"
      >
        <svg v-if="uploading" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <DocumentArrowUpIcon v-else class="h-4 w-4" aria-hidden="true" />
        {{ uploading ? 'Uploading...' : 'Upload Documents' }}
      </button>
      <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" id="fileUpload" class="hidden" @change="uploadFile" />
    </div>
  </div>
</template>

<script setup>
import { DocumentArrowUpIcon } from "@heroicons/vue/20/solid";

const triggerFileUpload = () => {
  document.getElementById("fileUpload").click();
};

const props = defineProps({
  uploadFile: Function,
  uploading: { type: Boolean, default: false },
});
const uploadFile = props.uploadFile;
</script>
