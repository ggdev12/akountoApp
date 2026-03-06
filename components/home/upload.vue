<template>
    <div class="bg-[#0a0a0a] rounded-lg p-6">
      <!-- <h3 class="text-md font-semibold text-[#a1a1a1] mb-4">Upload Documents</h3> -->
      <div
        @dragover.prevent="dragOver"
        @dragleave.prevent="dragLeave"
        @drop.prevent="handleDrop"
        :class="[
          'border-2 border-dashed rounded-lg p-8 text-center',
          isDragging ? 'border-emerald-500 bg-emerald-500/5' : 'border-white/[0.08] hover:border-emerald-500',
        ]"
      >
        <div v-if="!file">
          <DocumentArrowUpIcon class="mx-auto h-12 w-12 text-[#525252]" />
          <p class="mt-2 text-sm text-[#a1a1a1]">
            Drag and drop your file here, or
            <button
              @click="openFileDialog"
              class="font-medium text-emerald-400 hover:text-emerald-400"
            >
              browse
            </button>
          </p>
          <p class="mt-1 text-xs text-[#71717a]">
            PDF, PNG, JPG up to 10MB
          </p>
        </div>
        <div v-else>
          <DocumentIcon class="mx-auto h-12 w-12 text-emerald-400" />
          <p class="mt-2 text-sm font-medium text-white">
            {{ file.name }}
          </p>
          <p class="mt-1 text-xs text-[#71717a]">
            {{ formatFileSize(file.size) }}
          </p>
          <button
            @click="removeFile"
            class="mt-4 text-sm font-medium text-red-600 hover:text-red-500"
          >
            Remove
          </button>
        </div>
      </div>
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        @change="handleFileSelect"
        accept=".pdf,.png,.jpg,.jpeg"
      />
      <button
        v-if="file"
        @click="uploadFile"
        class="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded"
      >
        Upload Document
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { DocumentArrowUpIcon, DocumentIcon } from '@heroicons/vue/24/outline';
  
  const isDragging = ref(false);
  const file = ref(null);
  const fileInput = ref(null);
  
  const dragOver = () => {
    isDragging.value = true;
  };
  
  const dragLeave = () => {
    isDragging.value = false;
  };
  
  const handleDrop = (e) => {
    isDragging.value = false;
    const droppedFile = e.dataTransfer.files[0];
    if (isValidFile(droppedFile)) {
      file.value = droppedFile;
    } else {
      alert('Please upload a valid PDF, PNG, or JPG file under 10MB.');
    }
  };
  
  const openFileDialog = () => {
    fileInput.value.click();
  };
  
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (isValidFile(selectedFile)) {
      file.value = selectedFile;
    } else {
      alert('Please upload a valid PDF, PNG, or JPG file under 10MB.');
    }
  };
  
  const removeFile = () => {
    file.value = null;
    if (fileInput.value) {
      fileInput.value.value = '';
    }
  };
  
  const isValidFile = (file) => {
    const validTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    return file && validTypes.includes(file.type) && file.size <= maxSize;
  };
  
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  const uploadFile = () => {
    // Implement your file upload logic here
    console.log('Uploading file:', file.value);
    // You would typically send this file to your server using an API call
    // After successful upload, you might want to reset the file state
    // file.value = null;
  };
  </script>