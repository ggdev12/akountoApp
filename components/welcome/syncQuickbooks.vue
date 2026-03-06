<template>
    <div v-if="step === 3">


        <div class="mb-4 pt-7">
            <h4 class="sr-only">Status</h4>
            <p class="text-sm font-medium text-white">
                Connecting and Syncing with QuickBooks...
            </p>
            <div class="mt-6" aria-hidden="true">
                <div class="overflow-hidden rounded-full bg-white/[0.06]">
                    <div class="h-2 rounded-full bg-green-500" style="width: 50%"></div>
                </div>
                <div class="mt-6 hidden grid-cols-3 text-sm font-medium text-[#a1a1a1] sm:grid">
                    <div class="text-green-500">Connecting to QuickBooks</div>
                    <div class="text-center text-emerald-400">
                        Syncing Customers
                    </div>
                    <div class="text-right">Syncing Vendors</div>
                </div>
            </div>
        </div>

        <div class="mt-10 flex items-center gap-3">
          <button @click="goToDashboard"
              class="bg-emerald-500 text-white px-4 py-2 rounded-md transition duration-300 flex items-center">
              Go to Dashboard
          </button>
          <button @click="emit('skip')"
              class="text-[#a1a1a1] hover:text-white px-4 py-2 rounded-md border border-white/[0.08] hover:border-white/[0.16] transition duration-300">
              Skip
          </button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["skip"]);
</script>