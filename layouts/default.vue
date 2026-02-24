<template>
  <div class="min-h-screen bg-[#fafafa] font-sans">
    <!-- Mobile sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </TransitionChild>
        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-200 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-200 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-[272px] flex-1">
              <div class="flex grow flex-col h-full bg-[#0a0a0a]">
                <div class="flex h-14 items-center px-5 border-b border-white/[0.08]">
                  <div class="flex items-center gap-2.5">
                    <img class="h-7 w-auto brightness-0 invert" src="https://dms.mydukaan.io/original/webp/media/79927748-92f3-4505-9bd0-9dc14b81b700.png" alt="Logo" />
                    <span class="font-semibold text-[15px] text-white tracking-tight">Kounto AI</span>
                  </div>
                </div>
                <nav class="flex-1 px-3 py-4 overflow-y-auto">
                  <ul class="space-y-0.5">
                    <li v-for="item in navigation" :key="item.name">
                      <NuxtLink :href="item.href" @click="sidebarOpen = false" :class="[isActive(item.href) ? 'bg-white/[0.08] text-white' : 'text-[#a1a1a1] hover:text-white hover:bg-white/[0.04]', 'flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-100']">
                        <component :is="item.icon" class="h-4 w-4 shrink-0" aria-hidden="true" />
                        {{ item.name }}
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
                <div class="px-3 py-3 border-t border-white/[0.08]">
                  <NuxtLink href="/account/plan" class="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-[#a1a1a1] hover:text-white hover:bg-white/[0.04] transition-all duration-100">
                    <Cog6ToothIcon class="h-4 w-4 shrink-0" aria-hidden="true" />
                    Settings
                  </NuxtLink>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Desktop sidebar -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[240px] lg:flex-col">
      <div class="flex grow flex-col h-full bg-[#0a0a0a]">
        <div class="flex h-14 items-center px-5 border-b border-white/[0.08]">
          <div class="flex items-center gap-2.5">
            <img class="h-7 w-auto brightness-0 invert" src="https://dms.mydukaan.io/original/webp/media/79927748-92f3-4505-9bd0-9dc14b81b700.png" alt="Logo" />
            <span class="font-semibold text-[15px] text-white tracking-tight">Kounto AI</span>
          </div>
        </div>
        <nav class="flex-1 px-3 py-4 overflow-y-auto">
          <ul class="space-y-0.5">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :href="item.href" :class="[isActive(item.href) ? 'bg-white/[0.08] text-white' : 'text-[#a1a1a1] hover:text-white hover:bg-white/[0.04]', 'flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-100']">
                <component :is="item.icon" class="h-4 w-4 shrink-0" aria-hidden="true" />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="px-3 py-3 border-t border-white/[0.08]">
          <NuxtLink href="/account/plan" class="flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium text-[#a1a1a1] hover:text-white hover:bg-white/[0.04] transition-all duration-100">
            <Cog6ToothIcon class="h-4 w-4 shrink-0" aria-hidden="true" />
            Settings
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="lg:pl-[240px] min-h-screen flex flex-col">
      <!-- Top bar -->
      <header class="sticky top-0 z-40 h-14 flex items-center justify-between border-b border-[#eaeaea] bg-white/80 backdrop-blur-xl px-4 sm:px-6 lg:px-8">
        <button type="button" class="-m-2 p-2 text-gray-500 lg:hidden" @click="sidebarOpen = true">
          <Bars3Icon class="h-5 w-5" aria-hidden="true" />
        </button>
        <div class="hidden lg:block"></div>
        <div class="flex items-center gap-3">
          <button type="button" class="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <BellIcon class="h-[18px] w-[18px]" aria-hidden="true" />
          </button>
          <div class="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <span class="text-[11px] font-semibold text-white">K</span>
          </div>
        </div>
      </header>

      <main class="flex-1">
        <div class="px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { Bars3Icon, BellIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { HomeIcon, CurrencyDollarIcon, BanknotesIcon, BuildingStorefrontIcon, TruckIcon } from '@heroicons/vue/24/outline';

const route = useRoute();

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Sales', href: '/sales', icon: CurrencyDollarIcon },
  { name: 'Costs', href: '/costs', icon: BanknotesIcon },
  { name: 'Customers', href: '/sales/customers', icon: BuildingStorefrontIcon },
  { name: 'Vendors', href: '/costs/vendors', icon: TruckIcon },
];

const sidebarOpen = ref(false);

const isActive = (href) => {
  if (href === '/') return route.path === '/';
  return route.path.startsWith(href);
};
</script>
