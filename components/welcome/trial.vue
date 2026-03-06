<template>
  <div>
    <div class="border-b border-white/[0.06] -mx-8 pb-4">
      <div class="flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div class="mb-2 -mt-6">
          <div class="flex items-center">
            <div class="ml-4">
              <h3 class="text-base font-semibold leading-6 text-white">Activate Your 14-Day Free Trial</h3>
              <p class="text-sm text-[#71717a]">Enter your credit card details to start your free trial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-6">
      <p class="text-[#a1a1a1] mb-4 text-sm">Enter your credit card details to start your 14-day free trial. You won't be charged until the trial ends.</p>
      <form @submit.prevent="activateTrial" class="space-y-4">
        <div>
          <label for="cardElement" class="block text-sm font-medium text-[#a1a1a1]">Credit or debit card</label>
          <div id="cardElement" class="mt-1 p-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg"></div>
          <div id="cardErrors" role="alert" class="text-red-400 text-sm mt-2"></div>
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-[#a1a1a1]">Name on Card</label>
          <input type="text" id="name" v-model="name" required
            class="mt-1 w-full px-4 py-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 text-sm"
            placeholder="John Doe">
        </div>
        <div class="flex items-center">
          <input type="checkbox" id="terms" v-model="agreeToTerms" required
            class="h-4 w-4 text-emerald-500 focus:ring-emerald-500 border-white/[0.12] bg-[#0a0a0a]/[0.04] rounded">
          <label for="terms" class="ml-2 block text-sm text-[#a1a1a1]">
            I agree to the <a href="#" class="text-emerald-400 hover:underline">Terms and Conditions</a>
          </label>
        </div>
        <div>
          <button type="submit"
            class="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-400 focus:outline-none transition-all glow-green"
            :disabled="!agreeToTerms || isProcessing">
            {{ isProcessing ? 'Processing...' : 'Start My Free Trial' }}
          </button>
        </div>
        <div class="mt-3">
          <button type="button" @click="('skip')"
            class="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-[#a1a1a1] hover:text-white border border-white/[0.08] hover:border-white/[0.16] transition-all">
            Skip this step
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { stripe: null, card: null, name: '', agreeToTerms: false, isProcessing: false };
  },
  mounted() { this.initializeStripe(); },
  methods: {
    initializeStripe() {
      this.stripe = Stripe('pk_test_51PXqaQIpsv0mU6RHn2vmubfPtvHUBVTsPbxonqxQHh6rAbA6t3KbraP9xWucXENQFuZvQsM6C0OzFFVSJXrmoDtF00X3kUu83V');
      const elements = this.stripe.elements();
      this.card = elements.create('card', {
        style: {
          base: { color: '#ffffff', fontFamily: 'Inter, sans-serif', fontSize: '14px', '::placeholder': { color: '#525252' } },
          invalid: { color: '#f87171' },
        },
      });
      this.card.mount('#cardElement');
      this.card.addEventListener('change', (event) => {
        const displayError = document.getElementById('cardErrors');
        displayError.textContent = event.error ? event.error.message : '';
      });
    },
    async activateTrial() {
      if (!this.agreeToTerms) return;
      this.isProcessing = true;
      const { token, error } = await this.stripe.createToken(this.card, { name: this.name });
      if (error) {
        document.getElementById('cardErrors').textContent = error.message;
        this.isProcessing = false;
      } else {
        this.sendTokenToServer(token);
      }
    },
    async sendTokenToServer(token) {
      this.isProcessing = true;
      try {
        const { $api } = useNuxtApp();
        const response = await $api.subscription.startTrial(token.id);
        if (response.data.success) {
          this.$emit('trial-activated', { success: true, message: 'Trial activated successfully!', token: token.id });
        } else {
          throw new Error(response.data.message || 'Failed to activate trial');
        }
      } catch (error) {
        console.error('Error activating trial:', error);
        alert('Failed to activate trial. Please try again.');
      } finally {
        this.isProcessing = false;
      }
    },
  },
};
</script>
