<template>
  <div class="flex min-h-screen w-full font-sans">
    <!-- Left - Form -->
    <div class="flex flex-col justify-center items-center w-full lg:w-1/2 px-6 bg-white">
      <div class="w-full max-w-[360px]">
        <div class="mb-8">
          <div class="flex items-center gap-2 mb-8">
            <img class="h-7 w-auto" src="https://dms.mydukaan.io/original/webp/media/79927748-92f3-4505-9bd0-9dc14b81b700.png" alt="Logo" />
            <span class="font-semibold text-[15px] text-[#171717] tracking-tight">Kounto AI</span>
          </div>
          <h1 class="text-[22px] font-semibold text-[#171717] tracking-tight">Welcome back</h1>
          <p class="mt-1 text-[14px] text-[#666]">Sign in to your account to continue.</p>
        </div>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label class="block text-[13px] font-medium text-[#444] mb-1.5">Email</label>
            <input v-model="email" type="email" placeholder="you@company.com"
              class="w-full h-10 px-3 text-[14px] text-[#171717] bg-white border border-[#ddd] rounded-lg placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:border-transparent transition-shadow" />
          </div>
          <div>
            <label class="block text-[13px] font-medium text-[#444] mb-1.5">Password</label>
            <input v-model="password" type="password" placeholder="Enter password"
              class="w-full h-10 px-3 text-[14px] text-[#171717] bg-white border border-[#ddd] rounded-lg placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#171717] focus:border-transparent transition-shadow" />
          </div>
          <button :disabled="isRegistering" type="submit"
            class="w-full h-10 text-[14px] font-medium text-white bg-[#171717] rounded-lg hover:bg-[#333] focus:ring-2 focus:ring-offset-2 focus:ring-[#171717] disabled:opacity-50 transition-colors">
            <span v-if="isRegistering">Signing in...</span>
            <span v-else>Sign In</span>
          </button>
        </form>
        <Snackbar v-model="showError" :message="error" />
        <p class="mt-6 text-center text-[13px] text-[#666]">
          Don't have an account?
          <NuxtLink to="/auth/register" class="font-medium text-[#171717] hover:underline">Sign up</NuxtLink>
        </p>
      </div>
    </div>
    <!-- Right - Visual -->
    <div class="hidden lg:flex lg:w-1/2 bg-[#0a0a0a] items-center justify-center p-12">
      <div class="max-w-md text-center">
        <div class="mb-8">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full mb-6">
            <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
            <span class="text-[12px] font-medium text-[#999]">Trusted by 500+ businesses</span>
          </div>
          <h2 class="text-[28px] font-semibold text-white tracking-tight leading-tight">Automate your document processing with AI</h2>
          <p class="mt-3 text-[15px] text-[#666] leading-relaxed">Extract data from invoices, receipts, and bills automatically. Save hours of manual data entry.</p>
        </div>
        <div class="grid grid-cols-3 gap-4 mt-10">
          <div class="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <p class="text-[24px] font-semibold text-white">99%</p>
            <p class="text-[12px] text-[#666] mt-1">Accuracy</p>
          </div>
          <div class="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <p class="text-[24px] font-semibold text-white">10x</p>
            <p class="text-[12px] text-[#666] mt-1">Faster</p>
          </div>
          <div class="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
            <p class="text-[24px] font-semibold text-white">500+</p>
            <p class="text-[12px] text-[#666] mt-1">Companies</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { onMounted } from 'vue';
import Snackbar from '~/components/shared/snackbar.vue';

const email = ref('');
const password = ref('');
const router = useRouter();
const { $api } = useNuxtApp();
const isRegistering = ref(false);
const showError = ref(false);
const error = ref('');

const token = process.client ? localStorage.getItem('token') || '' : '';

onMounted(() => { if (token) navigateTo('/'); });

watch(error, (v) => { if (v) { showError.value = true; setTimeout(() => { showError.value = false; }, 3000); } });

const login = async () => {
  isRegistering.value = true;
  error.value = '';
  try {
    let user = await $api.auth.login({ email: email.value, password: password.value });
    await new Promise((r) => setTimeout(r, 1000));
    isRegistering.value = false;
    if (user.token) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('companyID', user.companyId);
      router.push('/');
    } else {
      error.value = user.message || 'Login failed';
    }
  } catch (err) {
    isRegistering.value = false;
    error.value = err.response?.data?.message || 'Login failed. Please try again.';
  }
};

definePageMeta({ layout: 'blank' });
</script>
