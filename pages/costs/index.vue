<template>
  <div class="animate-fade-in">
    <ExpensesHeading :uploadFile="uploadFile" :uploading="uploading" />
    
    <!-- Upload Progress Banner -->
    <div v-if="uploadQueue.length > 0" class="mt-4 specular-card p-4">
      <div class="flex items-center gap-3 mb-2">
        <svg class="animate-spin h-4 w-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span class="text-sm text-white font-medium">Uploading {{ uploadQueue.length }} file{{ uploadQueue.length > 1 ? "s" : "" }}...</span>
      </div>
      <div v-for="(item, idx) in uploadQueue" :key="idx" class="flex items-center gap-3 py-1.5">
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs text-[#a1a1a1] truncate">{{ item.name }}</span>
            <span class="text-xs text-[#71717a]">{{ item.progress }}%</span>
          </div>
          <div class="w-full bg-[#0a0a0a]/[0.06] rounded-full h-1.5">
            <div class="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" :style="{ width: item.progress + '%' }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notifications -->
    <Teleport to="body">
      <div class="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <TransitionGroup name="toast">
          <div
            v-for="toast in toasts"
            :key="toast.id"
            class="pointer-events-auto px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2 min-w-[280px]"
            :class="toast.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'"
          >
            <svg v-if="toast.type === 'success'" class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <svg v-else class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            {{ toast.message }}
          </div>
        </TransitionGroup>
      </div>
    </Teleport>

    <div class="mt-6">
      <ExpensesNav :active="status" :documentCounts="documentCounts" />
      <div>
        <div v-if="loading" class="space-y-3">
          <div v-for="i in 3" :key="i" class="specular-card p-4">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-2 py-1">
                <div class="h-2 bg-[#0a0a0a]/[0.06] rounded"></div>
                <div class="h-2 bg-[#0a0a0a]/[0.04] rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <ExpensesList
            v-if="documents.length > 0"
            :documents="documents"
            :vendors="vendors"
            :companyId="companyId"
            :status="status"
          />
          <ExpensesEmpty v-else :uploadFile="uploadFile" :uploading="uploading" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";

const documents = ref([]);
const documentCounts = ref({});
const vendors = ref([]);
const loading = ref(false);
const uploading = ref(false);
const uploadQueue = ref([]);
const toasts = ref([]);

let toastId = 0;

const showToast = (message, type = "success") => {
  const id = ++toastId;
  toasts.value.push({ id, message, type });
  setTimeout(() => {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }, 4000);
};

const route = useRoute();
const companyId = process.client ? localStorage.getItem("companyID") || "" : "";
const status = computed(() => route.query.status || "All");

let intervalId;

const token = process.client ? localStorage.getItem("token") || "" : "";

onMounted(() => {
  if (!token) {
    navigateTo("/auth/register");
  }
});

onMounted(async () => {
  await fetchVendors();
  await fetchDocuments();
  await fetchDocumentStats();
  intervalId = setInterval(async () => {
    await fetchDocuments();
    await fetchDocumentStats();
  }, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

watch(status, async () => {
  loading.value = true;
  documents.value = [];
  await fetchDocuments();
  loading.value = false;
});

const fetchDocuments = async () => {
  try {
    let query = { type: "Receipt", status: status.value };
    if (status.value === "All") delete query.status;
    const response = await useNuxtApp().$api.documents.list(companyId, query);
    documents.value = response.data.documents;
  } catch (error) {
    console.error("Failed to fetch receipts:", error);
  }
};

const fetchDocumentStats = async () => {
  try {
    const response = await useNuxtApp().$api.documents.stats(companyId, "Receipt");
    documentCounts.value = response.data.reduce((counts, stat) => {
      counts[stat.status] = stat.count;
      return counts;
    }, {});
  } catch (error) {
    console.error("Failed to fetch document stats:", error);
  }
};

const fetchVendors = async () => {
  const response = await useNuxtApp().$api.vendors.list(companyId, 1, -1);
  vendors.value = response.data.results;
};

const uploadFile = (event) => {
  const files = event.target.files || event.dataTransfer?.files;
  if (!files || files.length === 0) return;

  const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
  const validFiles = Array.from(files).filter((f) => validTypes.includes(f.type));
  const invalidCount = files.length - validFiles.length;

  if (invalidCount > 0) {
    showToast(invalidCount + " file(s) skipped — only PDF, JPG, PNG allowed", "error");
  }

  if (validFiles.length === 0) return;

  uploading.value = true;
  const uploadUrl = `${useNuxtApp().$api.baseURL}/companies/${companyId}/documents/upload`;

  const queueItems = validFiles.map((file) => ({
    name: file.name,
    progress: 0,
    file,
  }));
  uploadQueue.value = [...uploadQueue.value, ...queueItems];

  let completed = 0;
  let failed = 0;

  validFiles.forEach((file, index) => {
    const queueItem = queueItems[index];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", "Receipt");

    const xhr = new XMLHttpRequest();
    xhr.open("POST", uploadUrl);
    xhr.setRequestHeader("Authorization", localStorage.getItem("token") || "");

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        queueItem.progress = Math.round((e.loaded / e.total) * 100);
      }
    };

    xhr.onload = () => {
      completed++;
      if (xhr.status >= 200 && xhr.status < 300) {
        queueItem.progress = 100;
      } else {
        failed++;
        queueItem.progress = 100;
      }
      checkDone();
    };

    xhr.onerror = () => {
      completed++;
      failed++;
      queueItem.progress = 100;
      checkDone();
    };

    xhr.send(formData);
  });

  function checkDone() {
    if (completed === validFiles.length) {
      setTimeout(() => {
        uploadQueue.value = uploadQueue.value.filter((q) => !queueItems.includes(q));
        uploading.value = uploadQueue.value.length > 0;

        const succeeded = validFiles.length - failed;
        if (succeeded > 0) {
          showToast(succeeded + " receipt" + (succeeded > 1 ? "s" : "") + " uploaded successfully", "success");
        }
        if (failed > 0) {
          showToast(failed + " file" + (failed > 1 ? "s" : "") + " failed to upload", "error");
        }

        fetchDocuments();
        fetchDocumentStats();

        const fileInput = document.getElementById("fileUpload");
        if (fileInput) fileInput.value = "";
      }, 500);
    }
  }
};
</script>

<style>
.toast-enter-active { transition: all 0.3s ease-out; }
.toast-leave-active { transition: all 0.2s ease-in; }
.toast-enter-from { opacity: 0; transform: translateX(40px); }
.toast-leave-to { opacity: 0; transform: translateX(40px); }
</style>
