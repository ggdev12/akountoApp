<template>
  <div class="flex flex-col items-center justify-center py-16">
    <button
      @click="triggerFileUpload"
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
      type="button"
      :disabled="uploading"
      :class="[
        'relative block w-full max-w-md mx-auto rounded-xl border-2 border-dashed p-12 text-center transition-all duration-200 group',
        isDragging
          ? 'border-emerald-400 bg-emerald-500/10'
          : uploading
            ? 'border-white/[0.06] opacity-60 cursor-not-allowed'
            : 'border-white/[0.08] hover:border-emerald-500/30'
      ]"
    >
      <svg v-if="uploading" class="mx-auto h-12 w-12 text-emerald-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <svg v-else class="mx-auto h-12 w-12 text-[#525252] group-hover:text-emerald-400 transition-colors" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
      </svg>
      <span class="mt-4 block text-sm font-medium transition-colors" :class="isDragging ? 'text-emerald-400' : 'text-[#a1a1a1] group-hover:text-white'">
        {{ uploading ? 'Uploading...' : isDragging ? 'Drop files here' : 'Click or drag to upload invoices' }}
      </span>
      <p class="text-[#525252] text-xs mt-1">PDF, JPG, or PNG files accepted</p>
    </button>
    <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" id="fileUpload" class="hidden" @change="uploadFile" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isDragging = ref(false);

const triggerFileUpload = () => {
  document.getElementById("fileUpload").click();
};

const props = defineProps({
  uploadFile: Function,
  uploading: { type: Boolean, default: false },
});
const uploadFile = props.uploadFile;

const handleDrop = (event) => {
  isDragging.value = false;
  if (props.uploadFile) {
    props.uploadFile(event);
  }
};
</script>
