<template>
  <div class="min-h-screen bg-[#09090b]">
    <div class="flex">
      <div class="w-1/5 bg-[#0a0a0a] min-h-screen border-r border-white/[0.06]">
        <LayoutSteps :steps="steps" class="w-full flex items-center justify-center pt-20 mt-20 px-4" />
      </div>
      <div class="w-1/12"></div>
      <div class="w-3/4">
        <div class="flex mt-10">
          <div class="specular-card p-8 w-full max-w-4xl items-center content-center mt-20 pt-10 ml-10">
            <WelcomeTrial @trial-activated="handleTrialActivation" @skip="skipTrial" v-if="step === 0" />
            <WelcomeCreateCompany v-if="step === 2" @company-created="handleCompanyCreated" @skip="skipCreateCompany" />
            <WelcomeConnectQuickbooks v-if="step === 3" @connected="handleQuickbooksConnected" @skip="skipConnectQuickbooks" />
            <WelcomeSyncQuickbooks v-if="step === 4" @synced="handleQuickbooksSynced" @skip="skipSyncQuickbooks" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      steps: [
        { name: 'Create Account', description: 'Start by creating an account', href: '#', status: 'complete' },
        { name: 'Activate 14 day free plan', description: 'Choose your plan and activate it', href: '#', status: 'current' },
        { name: 'Create your company', description: 'Create your first company', href: '#', status: 'upcoming' },
        { name: 'Connect to QuickBooks', description: 'to automatically sync your data', href: '#', status: 'upcoming' },
        { name: 'Sync Data from QuickBooks', description: 'QuickBooks data', href: '#', status: 'upcoming' },
      ],
    };
  },
  methods: {
    checkQueryParamStep() {
      const router = useRoute();
      const stepQueryParam = router.query.step;
      if (stepQueryParam == 3) {
        this.step = 3;
        this.steps[2].status = 'complete';
        this.steps[3].status = 'current';
      }
    },
    goToDashboard() { this.$router.push('/sales/invoices'); },
    handleTrialActivation(data) {
      if (data.success) {
        this.steps[1].status = 'complete';
        this.steps[2].status = 'current';
        this.step = 2;
      }
    },

    skipTrial() {
      this.steps[1].status = 'complete';
      this.steps[2].status = 'current';
      this.step = 2;
    },
    skipCreateCompany() {
      this.steps[2].status = 'complete';
      this.steps[3].status = 'current';
      this.step = 3;
    },
    skipConnectQuickbooks() {
      this.steps[3].status = 'complete';
      this.steps[4].status = 'current';
      this.step = 4;
    },
    skipSyncQuickbooks() {
      this.$router.push('/');
    },
    handleCompanyCreated(data) {
      this.steps[2].status = 'complete';
      this.steps[3].status = 'current';
      this.step = 3;
    },
  },
  mounted() { this.checkQueryParamStep(); },
};
</script>

<script setup>
definePageMeta({ layout: 'blank' });
</script>
