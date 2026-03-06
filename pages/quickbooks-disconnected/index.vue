<template>
  <div class="min-h-screen bg-[#0a0a0a]">
    <!-- Navbar -->
    <nav class="bg-[#0a0a0a] shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-16 flex items-center">
          <a href="/" class="flex-shrink-0">
            <div class="flex items-center justify-end gap-2 element-highlight">
              <img
                class="h-8 w-auto transition-opacity duration-300 opacity-100"
                src="https://dms.mydukaan.io/original/webp/media/79927748-92f3-4505-9bd0-9dc14b81b700.png"
                alt="Logo"
                loading="lazy"
              />
              <span
                class="font-bold text-xl md:text-2xl lg:text-3xl element-highlight"
                style="
                  display: inline-flex;
                  align-items: baseline;
                  line-height: 2;
                  background: linear-gradient(45deg, #5b53fd, #9f7aea);
                  -webkit-background-clip: text;
                  background-clip: text;
                  -webkit-text-fill-color: transparent;
                "
                >Kounto AI</span
              >
            </div>
          </a>
        </div>
      </div>
    </nav>
    <div class="max-w-4xl mx-auto px-4 py-16">
      <!-- Disconnected Message Section -->
      <div class="text-center mb-24">
        <h1 class="text-4xl font-bold mb-8 text-white">
          QuickBooks Disconnected
        </h1>
        <p class="text-lg mb-4 text-[#a1a1a1]">
          Your QuickBooks integration has been disconnected. You will no longer
          to be able to send invoices directly to your QuickBooks account from
          Akounto.
        </p>
        <p class="text-lg text-[#a1a1a1]">
          If you'd like to re-connect Akounto and your QuickBooks account,
          <NuxtLink
            @click="handleLogout"
            class="text-emerald-400 hover:text-emerald-400 hover:underline cursor-pointer"
            :class="{ 'opacity-50 pointer-events-none': isLoading }"
          >
            {{ isLoading ? "Redirecting..." : "click here" }}
          </NuxtLink>
          to login and connect again
        </p>
      </div>

      <!-- Help Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl text-emerald-400 mb-12">We're here to help</h2>

        <!-- Support Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Help Centre -->
          <div class="bg-white/[0.06] p-6 rounded-lg shadow-sm">
            <h3 class="text-xl text-emerald-400 font-semibold mb-4">
              Help Centre
            </h3>
            <p class="text-[#a1a1a1]">
              Read help articles, setup guides, tips & resources to help you
              make the most of Tradify.
            </p>
          </div>

          <!-- Getting Setup -->
          <div class="bg-white/[0.06] p-6 rounded-lg shadow-sm">
            <h3 class="text-xl text-emerald-400 font-semibold mb-4">
              Getting Setup
            </h3>
            <p class="text-[#a1a1a1]">
              See how easy it is to get setup & booking jobs in 6 steps.
            </p>
          </div>

          <!-- Free Training -->
          <div class="bg-white/[0.06] p-6 rounded-lg shadow-sm">
            <h3 class="text-xl text-emerald-400 font-semibold mb-4">
              Free Live Training
            </h3>
            <p class="text-[#a1a1a1]">
              Our trade mad setup specialists will get you up and running right
              away.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "blank",
});

const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("companyID");

  router.push("/auth/login");
};
</script>
