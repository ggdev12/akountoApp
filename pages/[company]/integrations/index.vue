<template>
  <div>
    <header class="mb-8">
      <h2 class="text-2xl font-bold">Integrations</h2>
      <p class="text-[#a1a1a1]">
        Connect your Finny account with your favorite accounting systems.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Integration Cards -->
      <div class="bg-[#0a0a0a] rounded-lg p-6">
        <img
          src="https://logo.clearbit.com/quickbooks.com"
          alt="QuickBooks Logo"
          class="h-12 mb-4"
        />
        <h3 class="text-xl font-semibold mb-2">QuickBooks</h3>
        <p class="text-[#a1a1a1] mb-4">
          Connect with QuickBooks for seamless accounting integration.
        </p>
        <button
          @click="handleQuickbooksToggle"
          :disabled="isLoading"
          :class="{
            'border border-emerald-500 text-emerald-400 bg-[#0a0a0a] py-2 px-4 rounded-md hover:opacity-50':
              integratedTo.quickbooks,
            'bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-500':
              !integratedTo.quickbooks,
          }"
        >
          <span v-if="isLoading">{{ loadingMessage }}</span>
          <span v-else>{{
            integratedTo.quickbooks ? "Disconnect" : "Connect"
          }}</span>
        </button>
        <button
          class="bg-[#111111]0 text-white py-2 px-4 rounded-md hover:bg-black/60 ml-4 float-right"
        >
          Settings
        </button>
      </div>
    </div>

    <!-- Loading Overlay -->
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
    >
      <div
        class="bg-[#0a0a0a] p-4 rounded-lg shadow-lg flex items-center space-x-2"
      >
        <div class="loader"></div>
        <p class="text-[#a1a1a1]">{{ loadingMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { jwtDecode } from "jwt-decode";
import { ref, onMounted } from "vue";

const route = useRoute();
const integrations = ref([]);
const integratedTo = ref({
  quickbooks: false,
});
const isLoading = ref(false);
const loadingMessage = ref("");
const error = ref(null);

async function fetchIntegrations() {
  try {
    const response = await useNuxtApp().$api.integrations.list(
      route.params.company,
    );

    const hasQuickBooks = response.data.filter(
      (item) => item.service_type === "Quickbooks",
    );

    integratedTo.value.quickbooks = hasQuickBooks.length > 0;
    integrations.value = response.data;
  } catch (error) {
    console.error("Error fetching integrations:", error);
  }
}

async function handleConnect() {
  isLoading.value = true;
  loadingMessage.value = "Initiating QuickBooks connection...";

  try {
    const companyId = route.params.company;
    if (!companyId) throw new Error("Company ID not found");

    const response = await useNuxtApp().$api.quickbooks.auth(companyId);
    if (response.data) {
      window.location.href = response.data;
    }
  } catch (error) {
    console.error("Connection error:", error);
    error.value = "Failed to connect to QuickBooks. Please try again.";
  } finally {
    isLoading.value = false;
    loadingMessage.value = "";
  }
}

async function handleDisconnect() {
  try {
    isLoading.value = true;
    loadingMessage.value = "Disconnecting from QuickBooks...";

    const companyId = route.params.company;
    if (!companyId) throw new Error("Company ID not found");

    const response = await fetch(
      `https://api.kounto.ai/api/delete-quickbooks-integration/${companyId}`,
      { userId: jwtDecode(localStorage.getItem("token"))?.id },
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to disconnect QuickBooks");
    }

    integratedTo.value.quickbooks = false;
    await fetchIntegrations();
  } catch (error) {
    console.error("Disconnection error:", error);
    error.value = error.message;
  } finally {
    isLoading.value = false;
    loadingMessage.value = "";
  }
}

async function handleQuickbooksToggle() {
  if (integratedTo.value.quickbooks) {
    await handleDisconnect();
  } else {
    await handleConnect();
  }
}

onMounted(() => {
  fetchIntegrations();
});
</script>

<style scoped>
.loader {
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
