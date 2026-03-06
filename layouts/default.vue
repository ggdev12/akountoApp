<template>
  <div class="min-h-screen bg-[#09090b] font-sans noise">

    <!-- Onboarding Overlay: No Company -->
    <div v-if="showOnboarding" class="fixed inset-0 z-[100] bg-[#09090b] flex items-center justify-center">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent"></div>
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px]"></div>

      <div class="relative w-full max-w-lg mx-4 animate-fade-in">
        <div class="specular-card p-8">
          <div class="flex items-center gap-2.5 mb-6">
            <div class="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <span class="text-emerald-400 font-bold text-base">K</span>
            </div>
            <span class="font-semibold text-lg text-white tracking-tight">Kounto AI</span>
          </div>

          <div class="flex items-center gap-3 mb-8">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span class="text-[13px] text-emerald-400 font-medium">Account Created</span>
            </div>
            <div class="flex-1 h-px bg-white/[0.08]"></div>
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center animate-pulse_glow">
                <span class="text-[10px] font-bold text-emerald-400">2</span>
              </div>
              <span class="text-[13px] text-white font-medium">Setup Company</span>
            </div>
          </div>

          <h2 class="text-xl font-semibold text-white mb-2">Create your company</h2>
          <p class="text-[14px] text-[#71717a] mb-6">Set up your company to start uploading and processing documents with AI.</p>

          <form @submit.prevent="createCompany" class="space-y-4">
            <div>
              <label class="block text-[13px] font-medium text-[#a1a1a1] mb-1.5">Company Name</label>
              <input v-model="companyName" type="text" required
                class="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-[14px] transition-all"
                placeholder="e.g. Acme Corp" />
            </div>
            <button type="submit" :disabled="creatingCompany"
              class="w-full py-3 text-[14px] font-medium bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-all duration-150 disabled:opacity-50 glow-green">
              {{ creatingCompany ? "Creating..." : "Create Company & Continue" }}
            </button>
          </form>
          <p v-if="createError" class="mt-3 text-red-400 text-[13px]">{{ createError }}</p>
          <div class="mt-6 pt-4 border-t border-white/[0.06]">
            <button @click="logout" class="text-[13px] text-[#525252] hover:text-[#a1a1a1] transition-colors">Sign out and use a different account</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-200" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </TransitionChild>
        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-200 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-200 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-[272px] flex-1">
              <div class="flex grow flex-col h-full bg-[#0a0a0a] border-r border-white/[0.06]">
                <div class="flex h-14 items-center px-5 border-b border-white/[0.06]">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <span class="text-emerald-400 font-bold text-sm">K</span>
                    </div>
                    <span class="font-semibold text-[15px] text-white tracking-tight">Kounto AI</span>
                  </div>
                </div>
                <nav class="flex-1 px-3 py-4 overflow-y-auto">
                  <p class="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#525252]">Menu</p>
                  <ul class="space-y-0.5">
                    <li v-for="item in navigation" :key="item.name">
                      <NuxtLink :href="item.href" @click="sidebarOpen = false" :class="[isActive(item.href) ? 'bg-white/[0.06] text-white' : 'text-[#a1a1a1] hover:text-white hover:bg-white/[0.04]', 'flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150']">
                        <component :is="item.icon" class="h-[18px] w-[18px] shrink-0" :class="isActive(item.href) ? 'text-emerald-400' : ''" aria-hidden="true" />
                        {{ item.name }}
                        <div v-if="isActive(item.href)" class="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
                <div class="px-3 py-3 border-t border-white/[0.06]">
                  <NuxtLink href="/account/plan" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#a1a1a1] hover:text-white hover:bg-white/[0.04] transition-all duration-150">
                    <Cog6ToothIcon class="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    Settings
                  </NuxtLink>
                  <button @click="logout" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#71717a] hover:text-red-400 hover:bg-red-500/[0.04] transition-all duration-150 w-full mt-1">
                    <ArrowRightOnRectangleIcon class="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    Sign Out
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Desktop sidebar -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[240px] lg:flex-col">
      <div class="flex grow flex-col h-full bg-[#0a0a0a] border-r border-white/[0.06]">
        <div class="flex h-14 items-center px-5 border-b border-white/[0.06]">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <span class="text-emerald-400 font-bold text-sm">K</span>
            </div>
            <span class="font-semibold text-[15px] text-white tracking-tight">Kounto AI</span>
          </div>
        </div>
        <nav class="flex-1 px-3 py-4 overflow-y-auto">
          <p class="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-[#525252]">Menu</p>
          <ul class="space-y-0.5">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :href="item.href" :class="[isActive(item.href) ? 'bg-white/[0.06] text-white' : 'text-[#a1a1a1] hover:text-white hover:bg-white/[0.04]', 'flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150']">
                <component :is="item.icon" class="h-[18px] w-[18px] shrink-0" :class="isActive(item.href) ? 'text-emerald-400' : ''" aria-hidden="true" />
                {{ item.name }}
                <div v-if="isActive(item.href)" class="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="px-3 py-3 border-t border-white/[0.06]">
          <NuxtLink href="/account/plan" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#a1a1a1] hover:text-white hover:bg-white/[0.04] transition-all duration-150">
            <Cog6ToothIcon class="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
            Settings
          </NuxtLink>
          <button @click="logout" class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium text-[#71717a] hover:text-red-400 hover:bg-red-500/[0.04] transition-all duration-150 w-full mt-1">
            <ArrowRightOnRectangleIcon class="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
            Sign Out
          </button>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="lg:pl-[240px] min-h-screen flex flex-col">
      <!-- Top bar -->
      <header class="sticky top-0 z-40 h-14 flex items-center justify-between border-b border-white/[0.06] glass px-4 sm:px-6 lg:px-8">
        <button type="button" class="-m-2 p-2 text-[#71717a] hover:text-white transition-colors lg:hidden" @click="sidebarOpen = true">
          <Bars3Icon class="h-5 w-5" aria-hidden="true" />
        </button>
        <div class="hidden lg:block"></div>
        <div class="flex items-center gap-3">
          <!-- Notification Bell -->
          <div class="relative" ref="notifRef">
            <button @click="notifOpen = !notifOpen" type="button" class="relative p-2 text-[#71717a] hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              <BellIcon class="h-[18px] w-[18px]" aria-hidden="true" />
              <span v-if="unreadCount > 0" class="absolute top-1 right-1 w-2 h-2 bg-emerald-400 rounded-full"></span>
            </button>

            <!-- Notification Dropdown -->
            <Transition
              enter-active-class="transition ease-out duration-150"
              enter-from-class="opacity-0 translate-y-1 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-1 scale-95"
            >
              <div v-if="notifOpen" class="absolute right-0 mt-2 w-80 sm:w-96 bg-[#0a0a0a] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden z-50">
                <div class="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                  <h3 class="text-[13px] font-semibold text-white">Notifications</h3>
                  <button v-if="unreadCount > 0" @click="markAllAsRead" class="text-[11px] text-emerald-400 hover:text-emerald-300 font-medium">Mark all read</button>
                </div>
                <div class="max-h-80 overflow-y-auto">
                  <div v-if="notifications.length === 0" class="py-10 text-center">
                    <BellIcon class="h-8 w-8 text-[#525252] mx-auto mb-2" />
                    <p class="text-[13px] text-[#71717a]">No notifications yet</p>
                  </div>
                  <div v-for="n in notifications" :key="n.id"
                    @click="markAsRead(n.id)"
                    :class="[
                      'px-4 py-3 border-b border-white/[0.04] hover:bg-white/[0.02] cursor-pointer transition-colors',
                      !n.read ? 'bg-emerald-500/[0.03]' : ''
                    ]">
                    <div class="flex gap-3">
                      <div class="shrink-0 mt-0.5">
                        <div :class="[
                          'w-7 h-7 rounded-full flex items-center justify-center',
                          n.type === 'success' ? 'bg-emerald-500/10' : n.type === 'error' ? 'bg-red-500/10' : 'bg-white/[0.06]'
                        ]">
                          <svg v-if="n.type === 'success'" class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                          <svg v-else-if="n.type === 'error'" class="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                          <svg v-else class="w-3.5 h-3.5 text-[#71717a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        </div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-[13px] text-white leading-snug">{{ n.title }}</p>
                        <p v-if="n.message" class="text-[12px] text-[#71717a] mt-0.5 truncate">{{ n.message }}</p>
                        <p class="text-[11px] text-[#525252] mt-1">{{ timeAgo(n.timestamp) }}</p>
                      </div>
                      <div v-if="!n.read" class="shrink-0 mt-2">
                        <div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="notifications.length > 0" class="px-4 py-2 border-t border-white/[0.06]">
                  <button @click="clearAll(); notifOpen = false" class="text-[11px] text-[#71717a] hover:text-[#a1a1a1] font-medium w-full text-center py-1">Clear all</button>
                </div>
              </div>
            </Transition>
          </div>
          <div class="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center ring-2 ring-emerald-500/20">
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { Bars3Icon, BellIcon, Cog6ToothIcon, XMarkIcon, ArrowRightOnRectangleIcon } from "@heroicons/vue/24/outline";
import { HomeIcon, CurrencyDollarIcon, BanknotesIcon, BuildingStorefrontIcon, TruckIcon } from "@heroicons/vue/24/outline";
import { useNotifications } from "~/composables/useNotifications";

const route = useRoute();
const { notifications, unreadCount, addNotification, markAsRead, markAllAsRead, clearAll, timeAgo } = useNotifications();

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Sales", href: "/sales", icon: CurrencyDollarIcon },
  { name: "Costs", href: "/costs", icon: BanknotesIcon },
  { name: "Customers", href: "/sales/customers", icon: BuildingStorefrontIcon },
  { name: "Vendors", href: "/costs/vendors", icon: TruckIcon },
];

const sidebarOpen = ref(false);
const showOnboarding = ref(false);
const companyName = ref("");
const creatingCompany = ref(false);
const createError = ref("");
const notifOpen = ref(false);
const notifRef = ref(null);

const isActive = (href) => {
  if (href === "/") return route.path === "/";
  return route.path.startsWith(href);
};

const handleClickOutside = (e) => {
  if (notifRef.value && !notifRef.value.contains(e.target)) {
    notifOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);

  const token = localStorage.getItem("token");
  const companyId = localStorage.getItem("companyID");

  if (!token) {
    navigateTo("/auth/login");
    return;
  }

  if (!companyId) {
    showOnboarding.value = true;
    return;
  }

  pollDocumentStatus();
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  if (pollInterval) clearInterval(pollInterval);
});

let pollInterval = null;
let previousCounts = null;

const pollDocumentStatus = () => {
  const companyId = localStorage.getItem("companyID");
  if (!companyId) return;

  const checkStats = async (type) => {
    try {
      const { $api } = useNuxtApp();
      const response = await $api.documents.stats(companyId, type);
      const counts = response.data.reduce((acc, s) => { acc[s.status] = s.count; return acc; }, {});
      const key = type;

      if (previousCounts && previousCounts[key]) {
        const prev = previousCounts[key];
        const label = type === "Invoice" ? "invoice" : "receipt";

        if (counts.Ready && (!prev.Ready || counts.Ready > prev.Ready)) {
          const diff = (counts.Ready || 0) - (prev.Ready || 0);
          if (diff > 0) {
            addNotification({
              type: "success",
              title: `${diff} ${label}${diff > 1 ? "s" : ""} ready for review`,
              message: "AI extraction complete. Review and approve to process.",
            });
          }
        }

        if (counts.MissingData && (!prev.MissingData || counts.MissingData > prev.MissingData)) {
          const diff = (counts.MissingData || 0) - (prev.MissingData || 0);
          if (diff > 0) {
            addNotification({
              type: "info",
              title: `${diff} ${label}${diff > 1 ? "s" : ""} need attention`,
              message: "Some fields could not be extracted automatically.",
            });
          }
        }

        if (counts.Processed && (!prev.Processed || counts.Processed > prev.Processed)) {
          const diff = (counts.Processed || 0) - (prev.Processed || 0);
          if (diff > 0) {
            addNotification({
              type: "success",
              title: `${diff} ${label}${diff > 1 ? "s" : ""} processed`,
              message: "Successfully synced to your accounting system.",
            });
          }
        }
      }

      if (!previousCounts) previousCounts = {};
      previousCounts[key] = counts;
    } catch (e) {
      // silently ignore
    }
  };

  Promise.all([checkStats("Invoice"), checkStats("Receipt")]);

  pollInterval = setInterval(() => {
    checkStats("Invoice");
    checkStats("Receipt");
  }, 15000);
};

const createCompany = async () => {
  if (!companyName.value.trim()) return;
  creatingCompany.value = true;
  createError.value = "";
  try {
    const { $api } = useNuxtApp();
    const response = await $api.company.create({ companyName: companyName.value });
    localStorage.setItem("companyID", response.data.id);
    showOnboarding.value = false;
    window.location.reload();
  } catch (error) {
    createError.value = error.response?.data?.message || "Failed to create company. Please try again.";
  } finally {
    creatingCompany.value = false;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("companyID");
  navigateTo("/auth/login");
};
</script>
