<template>
  <div class="min-h-screen bg-[#09090b] flex">
    <!-- Left: Form -->
    <div class="flex-1 flex items-center justify-center px-6">
      <div class="w-full max-w-md animate-fade-in">
        <div class="mb-8">
          <div class="flex items-center gap-2.5 mb-8">
            <div class="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <span class="text-emerald-400 font-bold text-base">K</span>
            </div>
            <span class="font-semibold text-lg text-white tracking-tight">Kounto AI</span>
          </div>
          <h1 class="text-2xl font-semibold text-white tracking-tight">Welcome back</h1>
          <p class="mt-2 text-[14px] text-[#71717a]">Sign in to your account to continue</p>
        </div>

        <form @submit.prevent="login" class="space-y-5">
          <div>
            <label for="email" class="block text-[13px] font-medium text-[#a1a1a1] mb-1.5">Email</label>
            <input type="email" id="email" v-model="email" required
              class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-[14px] transition-all"
              placeholder="you@company.com" />
          </div>
          <div>
            <label for="password" class="block text-[13px] font-medium text-[#a1a1a1] mb-1.5">Password</label>
            <input type="password" id="password" v-model="password" required
              class="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-[14px] transition-all"
              placeholder="Enter your password" />
          </div>

          <p v-if="errorMessage" class="text-red-400 text-[13px]">{{ errorMessage }}</p>

          <button type="submit" :disabled="isLoading"
            class="w-full py-3 text-[14px] font-medium bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-all duration-150 disabled:opacity-50 glow-green">
            {{ isLoading ? "Signing in..." : "Sign in" }}
          </button>
        </form>

        <p class="mt-6 text-center text-[13px] text-[#71717a]">
          Don't have an account?
          <NuxtLink to="/auth/register" class="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">Create account</NuxtLink>
        </p>
      </div>
    </div>

    <!-- Right: Unsplash Image -->
    <div class="hidden lg:block flex-1 relative overflow-hidden">
      <div class="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl">
        <img
          v-if="bgImage"
          :src="bgImage"
          alt="Accounting"
          class="w-full h-full object-cover transition-opacity duration-700"
          :class="imageLoaded ? opacity-100 : opacity-0"
          @load="imageLoaded = true"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10"></div>
        <div class="absolute bottom-0 left-0 right-0 p-10">
          <h2 class="text-2xl font-semibold text-white mb-2">AI-Powered Accounting</h2>
          <p class="text-white/60 text-[15px] leading-relaxed max-w-md">Upload invoices and receipts. Let AI extract, categorize, and sync everything automatically.</p>
        </div>
        <div v-if="photoCredit" class="absolute top-4 right-4">
          <span class="text-[10px] text-white/40 bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
            Photo by {{ photoCredit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { jwtDecode } from "jwt-decode";

definePageMeta({ layout: "blank" });

const email = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const bgImage = ref("");
const imageLoaded = ref(false);
const photoCredit = ref("");

const queries = ["accounting office", "finance desk", "business workspace", "modern office", "calculator documents", "bookkeeping"];

onMounted(async () => {
  try {
    const q = queries[Math.floor(Math.random() * queries.length)];
    const page = Math.floor(Math.random() * 5) + 1;
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&per_page=10&page=${page}&orientation=portrait`,
      { headers: { Authorization: "Client-ID bfdad6c03851d12a0f05045224693e9c175bb200c00655dfb5127ea99fbb956d" } }
    );
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const photo = data.results[Math.floor(Math.random() * data.results.length)];
      bgImage.value = photo.urls.regular;
      photoCredit.value = photo.user.name;
    }
  } catch (e) {
    console.log("Unsplash fetch failed, using fallback");
  }
});

const login = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  try {
    const { $api } = useNuxtApp();
    const response = await $api.auth.login({ email: email.value, password: password.value });
    if (response.token) {
      localStorage.setItem("token", response.token);
      try {
        const decoded = jwtDecode(response.token);
        if (decoded.companyId) {
          localStorage.setItem("companyID", decoded.companyId);
        }
      } catch (e) {
        console.log("Token decode info:", e);
      }
      navigateTo("/");
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || "Invalid email or password";
  } finally {
    isLoading.value = false;
  }
};
</script>
