<template>
  <div class="mx-auto p-6 bg-[#0a0a0a] rounded-lg shadow-sm">
    <!-- Header -->
    <div class="mb-8">
      <h2
        class="text-2xl font-semibold text-white pb-4 border-b border-white/[0.06]"
      >
        QuickBooks Integration
      </h2>
      <p class="mt-2 text-sm text-[#a1a1a1]">
        Connect your account with QuickBooks to sync your financial data.
      </p>
    </div>

    <!-- Integration Status Card -->
    <div class="bg-[#111111] rounded-lg p-6 mb-6">
      <!-- QuickBooks Info -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center flex-col space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="377"
            height="146"
            fill="none"
            viewBox="0 0 477 146"
          >
            <path
              fill="#2CA01C"
              d="M30.767 99.535c16.993 0 30.768-13.775 30.768-30.768C61.535 51.775 47.76 38 30.767 38 13.775 38 0 51.775 0 68.767 0 85.76 13.775 99.535 30.767 99.535Z"
            />
            <path
              fill="#fff"
              d="M20.508 56.8c-6.612 0-11.965 5.361-11.965 11.966 0 6.604 5.353 11.964 11.965 11.964h1.709v-4.444h-1.71a7.525 7.525 0 0 1-7.52-7.52c0-4.15 3.37-7.522 7.52-7.522h4.11v23.247a4.444 4.444 0 0 0 4.443 4.443V56.801h-8.553Zm20.525 23.93c6.611 0 11.965-5.36 11.965-11.965 0-6.604-5.353-11.964-11.965-11.964h-1.709v4.444h1.71c4.15 0 7.52 3.371 7.52 7.521s-3.37 7.522-7.52 7.522h-4.11V53.04a4.444 4.444 0 0 0-4.444-4.443v32.134h8.554v-.002Z"
            />
            <path
              fill="#000"
              d="M90.755 107h-4.76V94.946h-.08c-1.231 1.9-3.652 3.09-6.305 3.09-5.791 0-9.36-4.601-9.36-10.153 0-5.553 3.808-9.996 9.237-9.996 3.487 0 5.634 1.702 6.584 3.213h.116v-2.66h4.56v28.559h.008V107ZM80.567 94.07c3.487 0 5.592-3.13 5.592-6.105 0-2.974-2.099-6.187-5.592-6.187-3.685 0-5.47 3.132-5.47 6.106-.007 2.974 1.778 6.188 5.47 6.188v-.001Zm31.554 3.412h-4.52v-3.056h-.082c-.833 1.9-3.09 3.61-5.907 3.61-4.957 0-7.022-3.81-7.022-7.692V78.447h4.759v10.55c0 2.264.513 5.073 3.568 5.073 3.056 0 4.444-2.618 4.444-5.155V78.447h4.758v19.035h.002Zm4.781-19.451h4.759v19.035h-4.759V78.031Zm22.55 5.689c-.752-1.074-2.38-1.867-3.925-1.867-3.487 0-5.237 3.131-5.237 6.105 0 2.974 1.785 6.106 5.394 6.106 1.47 0 3.09-.595 4.007-1.702l2.974 3.015c-1.587 1.702-4.206 2.66-7.022 2.66-5.634 0-10.311-3.726-10.311-10.07 0-6.345 4.602-10.073 10.195-10.073 2.776 0 5.668 1.108 7.178 2.974l-3.253 2.851Zm5.603-16.216h4.758v18.952h.117l7.219-8.013h6.106l-8.246 8.608 8.766 10.427h-6.304l-7.535-9.757h-.116v9.757h-4.758V67.504h-.007Zm25.648 0V80.87h.116c.992-1.23 2.893-2.974 6.386-2.974 5.435 0 9.237 4.362 9.237 9.996s-3.569 10.154-9.36 10.154c-2.66 0-5.238-1.23-6.543-3.412h-.082v2.858h-4.519V67.504h4.765Zm5.435 14.276c-3.487 0-5.592 3.213-5.592 6.187s2.098 6.106 5.592 6.106c3.686 0 5.469-3.214 5.469-6.189s-1.783-6.105-5.469-6.105v.001Zm22.721-3.886c5.75 0 10.352 4.007 10.352 9.996 0 5.99-4.602 10.154-10.352 10.154s-10.351-4.164-10.351-10.154c0-5.989 4.601-9.996 10.351-9.996Zm0 16.178c3.767 0 5.511-3.213 5.511-6.189 0-2.975-1.744-6.105-5.511-6.105-3.767 0-5.511 3.132-5.511 6.105 0 2.974 1.744 6.189 5.511 6.189Zm22.777-16.178c5.75 0 10.352 4.007 10.352 9.996 0 5.99-4.602 10.154-10.352 10.154s-10.351-4.164-10.351-10.154c0-5.989 4.601-9.996 10.351-9.996Zm0 16.178c3.768 0 5.511-3.213 5.511-6.189 0-2.975-1.743-6.105-5.511-6.105-3.767 0-5.51 3.132-5.51 6.105-.007 2.974 1.743 6.189 5.51 6.189Zm13.231-26.568h4.759v18.952h.116l7.221-8.013h6.105l-8.245 8.608 8.765 10.427h-6.304l-7.535-9.757h-.116v9.757h-4.759V67.504h-.007Zm31.705 16.016c-.835-1.107-2.421-2.064-4.164-2.064-1.504 0-3.057.555-3.057 2.065 0 1.51 1.471 1.866 4.123 2.495 2.818.677 6.147 1.942 6.147 5.668 0 4.643-3.768 6.345-7.931 6.345-2.933 0-5.989-1.107-7.815-3.131l3.131-2.934c1.033 1.347 2.818 2.38 4.875 2.38 1.388 0 3.057-.555 3.057-2.264 0-1.586-1.471-2.064-4.362-2.735-2.817-.677-5.634-1.825-5.634-5.394 0-4.246 3.808-6.064 7.575-6.064 2.735 0 5.593.95 7.138 2.892l-3.083 2.742ZM122.383 52.46c0 4.826 3.863 8.354 8.772 8.354 4.91 0 8.779-3.52 8.779-8.354V41.377h-4.758v10.516c0 2.604-1.744 4.348-4.034 4.348-2.291 0-4.035-1.744-4.035-4.348V41.377h-4.752l.028 11.083Zm30.265-6.632h5.676V60.43h4.752V45.828h5.667v-4.451h-16.095v4.45Zm-3.076-4.451h-4.752v19.056h4.752V41.377Zm-46.384 4.451h5.675V60.43h4.752V45.828h5.668v-4.451h-16.094v4.45h-.001Zm-24.944-4.451h-4.752v19.056h4.752V41.377Zm22.439 7.973c0-4.826-3.87-8.354-8.779-8.354-4.91 0-8.779 3.521-8.779 8.355v11.083h4.752V49.918c0-2.605 1.743-4.348 4.034-4.348 2.29 0 4.034 1.743 4.034 4.348v10.516h4.752l-.014-11.083Z"
            />
          </svg>
        </div>

        <!-- Connection Status Badge -->
        <div
          :class="[
            'px-3 py-1 rounded-full text-sm font-medium',
            isConnected
              ? 'bg-green-100 text-green-800'
              : 'bg-[#09090b] text-white',
          ]"
        >
          {{ isConnected ? "Connected" : "Not Connected" }}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end space-x-4">
        <button v-if="!isConnected" @click="handleConnect">
          <svg
            width="223"
            height="36"
            viewBox="0 0 223 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="223" height="36" rx="4" fill="#2CA01C" />
            <path
              d="M35.3116 14.112C34.4156 12.928 32.6716 12.384 31.1996 12.384C27.7116 12.384 25.0556 14.672 25.0556 18.304C25.0556 21.84 27.5676 24.288 31.1036 24.288C33.0236 24.288 34.4956 23.552 35.4876 22.304L33.8716 21.168C33.2956 21.952 32.3356 22.48 31.1196 22.48C28.7836 22.48 27.2796 20.768 27.2796 18.304C27.2796 15.968 28.8636 14.16 31.1996 14.16C32.1116 14.16 33.1836 14.512 33.7756 15.328L35.3116 14.112ZM36.0087 20.128C36.0087 22.544 37.8647 24.224 40.1847 24.224C42.5047 24.224 44.3607 22.544 44.3607 20.128C44.3607 17.712 42.5047 16.096 40.1847 16.096C37.8647 16.096 36.0087 17.712 36.0087 20.128ZM37.9607 20.128C37.9607 18.928 38.6647 17.664 40.1847 17.664C41.7047 17.664 42.4087 18.928 42.4087 20.128C42.4087 21.328 41.7047 22.624 40.1847 22.624C38.6647 22.624 37.9607 21.328 37.9607 20.128ZM46.2223 24H48.1423V19.776C48.1423 18.752 48.7183 17.696 49.9343 17.696C51.1663 17.696 51.3743 18.832 51.3743 19.744V24H53.2943V19.2C53.2943 17.632 52.4623 16.096 50.4623 16.096C49.3263 16.096 48.4143 16.784 48.0783 17.552H48.0463V16.32H46.2223V24ZM55.5348 24H57.4548V19.776C57.4548 18.752 58.0308 17.696 59.2468 17.696C60.4788 17.696 60.6868 18.832 60.6868 19.744V24H62.6068V19.2C62.6068 17.632 61.7748 16.096 59.7748 16.096C58.6388 16.096 57.7268 16.784 57.3908 17.552H57.3588V16.32H55.5348V24ZM66.3193 19.392C66.3993 18.32 67.3113 17.536 68.4473 17.536C69.6953 17.536 70.2553 18.4 70.2553 19.392H66.3193ZM72.1753 20.256C72.1753 17.488 70.6073 16.096 68.4633 16.096C66.1433 16.096 64.3993 17.728 64.3993 20.208C64.3993 22.704 66.1593 24.224 68.5273 24.224C69.9833 24.224 71.0713 23.712 71.8233 22.688L70.5433 21.664C70.1113 22.272 69.4713 22.656 68.5113 22.656C67.3913 22.656 66.3993 21.856 66.3193 20.768H72.1593C72.1753 20.592 72.1753 20.432 72.1753 20.256ZM80.5948 17.296C79.9868 16.544 78.8188 16.096 77.6988 16.096C75.4428 16.096 73.5868 17.664 73.5868 20.16C73.5868 22.72 75.4748 24.224 77.7468 24.224C78.8828 24.224 79.9388 23.84 80.5788 23.152L79.3788 21.936C79.0108 22.384 78.3548 22.624 77.7628 22.624C76.3068 22.624 75.5868 21.36 75.5868 20.16C75.5868 18.96 76.2908 17.696 77.6988 17.696C78.3228 17.696 78.9788 18.016 79.2828 18.448L80.5948 17.296ZM82.0873 17.856V21.44C82.0873 22.912 82.5513 24.16 84.5833 24.16C85.0153 24.16 85.5273 24.08 85.8633 23.952L85.7993 22.448C85.5753 22.56 85.2393 22.608 84.9833 22.608C84.1353 22.608 83.9753 22.112 83.9753 21.424V17.856H85.8953V16.32H83.9753V14.096H82.0873V16.32H80.7433V17.856H82.0873ZM91.5248 17.856V21.44C91.5248 22.912 91.9888 24.16 94.0208 24.16C94.4528 24.16 94.9648 24.08 95.3008 23.952L95.2368 22.448C95.0128 22.56 94.6768 22.608 94.4208 22.608C93.5728 22.608 93.4128 22.112 93.4128 21.424V17.856H95.3328V16.32H93.4128V14.096H91.5248V16.32H90.1808V17.856H91.5248ZM96.2743 20.128C96.2743 22.544 98.1303 24.224 100.45 24.224C102.77 24.224 104.626 22.544 104.626 20.128C104.626 17.712 102.77 16.096 100.45 16.096C98.1303 16.096 96.2743 17.712 96.2743 20.128ZM98.2263 20.128C98.2263 18.928 98.9303 17.664 100.45 17.664C101.97 17.664 102.674 18.928 102.674 20.128C102.674 21.328 101.97 22.624 100.45 22.624C98.9303 22.624 98.2263 21.328 98.2263 20.128ZM122.792 22.368H119.992V22.336C121 21.616 122.008 20.224 122.008 18.192C122.008 14.752 119.464 12.384 115.992 12.384C112.52 12.384 109.928 14.752 109.928 18.192C109.928 21.872 112.344 24 115.96 24H122.792V22.368ZM115.992 14.192C118.28 14.192 119.816 15.888 119.816 18.192C119.816 20.608 118.2 22.24 115.96 22.24C113.688 22.24 112.136 20.608 112.136 18.192C112.136 15.888 113.8 14.192 115.992 14.192ZM131.121 16.32H129.201V20.544C129.201 21.568 128.625 22.624 127.409 22.624C126.177 22.624 125.969 21.488 125.969 20.576V16.32H124.049V21.12C124.049 22.688 124.881 24.224 126.881 24.224C128.017 24.224 128.929 23.536 129.265 22.768H129.297V24H131.121V16.32ZM133.457 24H135.377V16.32H133.457V24ZM133.185 13.712C133.185 14.32 133.697 14.864 134.401 14.864C135.105 14.864 135.649 14.368 135.649 13.712C135.649 13.056 135.105 12.56 134.401 12.56C133.697 12.56 133.185 13.104 133.185 13.712ZM144.267 17.296C143.659 16.544 142.491 16.096 141.371 16.096C139.115 16.096 137.259 17.664 137.259 20.16C137.259 22.72 139.147 24.224 141.419 24.224C142.555 24.224 143.611 23.84 144.251 23.152L143.051 21.936C142.683 22.384 142.027 22.624 141.435 22.624C139.979 22.624 139.259 21.36 139.259 20.16C139.259 18.96 139.963 17.696 141.371 17.696C141.995 17.696 142.651 18.016 142.955 18.448L144.267 17.296ZM145.551 24H147.471V20.064H147.519L150.559 24H153.103L149.567 19.792L152.895 16.32H150.431L147.519 19.552H147.471V11.904H145.551V24ZM154.303 24H158.383C160.527 24 162.671 23.168 162.671 20.704C162.671 19.184 161.647 18.224 160.223 18.032V18C161.391 17.648 162.191 16.8 162.191 15.52C162.191 13.456 160.431 12.672 158.719 12.672H154.303V24ZM156.319 14.336H157.935C159.455 14.336 160.175 14.736 160.175 15.744C160.175 16.72 159.455 17.28 158.111 17.28H156.319V14.336ZM156.319 19.008H158.207C159.839 19.008 160.655 19.424 160.655 20.608C160.655 22.096 159.167 22.304 158.127 22.304H156.319V19.008ZM164.118 20.128C164.118 22.544 165.974 24.224 168.294 24.224C170.614 24.224 172.47 22.544 172.47 20.128C172.47 17.712 170.614 16.096 168.294 16.096C165.974 16.096 164.118 17.712 164.118 20.128ZM166.07 20.128C166.07 18.928 166.774 17.664 168.294 17.664C169.814 17.664 170.518 18.928 170.518 20.128C170.518 21.328 169.814 22.624 168.294 22.624C166.774 22.624 166.07 21.328 166.07 20.128ZM173.884 20.128C173.884 22.544 175.74 24.224 178.06 24.224C180.38 24.224 182.236 22.544 182.236 20.128C182.236 17.712 180.38 16.096 178.06 16.096C175.74 16.096 173.884 17.712 173.884 20.128ZM175.836 20.128C175.836 18.928 176.54 17.664 178.06 17.664C179.58 17.664 180.284 18.928 180.284 20.128C180.284 21.328 179.58 22.624 178.06 22.624C176.54 22.624 175.836 21.328 175.836 20.128ZM184.129 24H186.049V20.064H186.097L189.137 24H191.681L188.145 19.792L191.473 16.32H189.009L186.097 19.552H186.049V11.904H184.129V24ZM198.147 17.264C197.523 16.48 196.371 16.096 195.267 16.096C193.747 16.096 192.211 16.832 192.211 18.544C192.211 19.984 193.347 20.448 194.483 20.72C195.651 20.992 196.243 21.184 196.243 21.824C196.243 22.512 195.571 22.736 195.011 22.736C194.179 22.736 193.459 22.32 193.043 21.776L191.779 22.96C192.515 23.776 193.747 24.224 194.931 24.224C196.611 24.224 198.131 23.536 198.131 21.664C198.131 20.16 196.787 19.648 195.651 19.376C194.579 19.12 193.987 18.96 193.987 18.368C193.987 17.76 194.611 17.536 195.219 17.536C195.923 17.536 196.563 17.92 196.899 18.368L198.147 17.264Z"
              fill="white"
            />
          </svg>
          <!-- <span v-if="isLoading">Connecting...</span>
          <span v-else>Connect to QuickBooks</span> -->
        </button>

        <button
          v-else
          @click="handleDisconnect"
          class="px-4 py-2 border border-red-200 text-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
          :disabled="isLoading"
        >
          <span v-if="isLoading">Disconnecting...</span>
          <span v-else>Disconnect</span>
        </button>
      </div>
    </div>

    <!-- Connection Details -->
    <div v-if="isConnected" class="bg-[#0a0a0a] rounded-lg">
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#a1a1a1]">Connection Status</span>
          <span class="text-sm font-medium text-green-600">Active</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm text-[#a1a1a1]">Last Synced</span>
          <span class="text-sm text-white">
            {{ formatDate(lastSyncedAt) }}
          </span>
        </div>
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

<script>
export default {
  name: "QuickBooksIntegration",

  data() {
    return {
      isConnected: false,
      isLoading: false,
      loadingMessage: "",
      integrationId: null,
      companyId: "",
      lastSyncedAt: null,
      error: null,
    };
  },

  methods: {
    formatDate(date) {
      if (!date) return "Never";
      return new Date(date).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },

    async handleConnect() {
      this.isLoading = true;
      this.loadingMessage = "Initiating QuickBooks connection...";

      try {
        const companyId = localStorage.getItem("companyID");
        if (!companyId) throw new Error("Company ID not found");

        const response = await this.$api.quickbooks.auth(companyId);
        if (response.data) {
          window.location.href = response.data;
        }
      } catch (error) {
        console.error("Connection error:", error);
        this.error = "Failed to connect to QuickBooks. Please try again.";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchIntegrationStatus() {
      this.isLoading = true;
      this.loadingMessage = "Checking integration status...";

      try {
        const companyId = localStorage.getItem("companyID");
        if (!companyId) throw new Error("Company ID not found");

        const response = await this.$api.integrations.list(companyId);
        console.log("Integration status response:", response); // Debug log

        // Update integration details based on response
        if (response.data && response.data.integrationStatus === "Connected") {
          // Find QuickBooks integration if multiple integrations exist
          // const qbIntegration =
          //   response.data.find((int) => int.type === "quickbooks") ||
          //   response.data[0];

          this.isConnected = true;
          this.integrationId = qbIntegration.id || qbIntegration.integrationId;
          this.lastSyncedAt = qbIntegration.lastSyncedAt;

          console.log("Integration ID set to:", this.integrationId); // Debug log
        } else {
          this.isConnected = false;
          this.integrationId = null;
          this.lastSyncedAt = null;
        }
      } catch (error) {
        console.error("Status check error:", error);
        this.error = "Failed to check integration status.";
      } finally {
        this.isLoading = false;
      }
    },

    async handleDisconnect() {
      try {
        this.isLoading = true;
        this.loadingMessage = "Disconnecting from QuickBooks...";

        const companyId = localStorage.getItem("companyID");
        if (!companyId) throw new Error("Company ID not found");

        // First get the integration details to get the refresh token
        const integrationResponse = await fetch(
          `https://api.kounto.ai/api/companies/${companyId}/integrations`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
          },
        );

        const integrationData = await integrationResponse.json();

        // Now make the disconnect request
        const response = await fetch(
          `https://api.kounto.ai/api/delete-quickbooks-integration/${companyId}`,
          {
            method: "POST",
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refreshToken: integrationData.refreshToken, // Pass the refresh token
            }),
          },
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to disconnect QuickBooks");
        }

        this.isConnected = false;
        this.integrationId = null;
        this.lastSyncedAt = null;
        console.log("Disconnected successfully");
        await this.fetchIntegrationStatus();
      } catch (error) {
        console.error("Disconnection error:", error);
        this.error = error.message;

        // Update local state even if redirect fails
        this.isConnected = false;
        this.integrationId = null;
        this.lastSyncedAt = null;

        // Refetch integration status
        await this.fetchIntegrationStatus();
      } finally {
        this.isLoading = false;
        this.loadingMessage = "";
      }
    },
  },

  async mounted() {
    await this.refreshTokens(); // Call the refresh tokens API on mount
    await this.fetchIntegrationStatus();
  },

  watch: {
    $route: {
      handler() {
        this.fetchIntegrationStatus();
      },
      immediate: true,
    },
  },
};
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
