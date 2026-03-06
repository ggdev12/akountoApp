<template>
  <div class="mb-6 border-b border-white/[0.06]">
    <div class="-mb-px flex gap-1 overflow-x-auto scrollbar-hide">
      <NuxtLink
        v-for="item in navItems"
        :key="item.name"
        :href="item.href"
        :class="[
          'inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium whitespace-nowrap border-b-2 transition-all duration-150',
          item.current
            ? 'border-emerald-400 text-emerald-400'
            : 'border-transparent text-[#71717a] hover:text-[#a1a1a1] hover:border-white/[0.1]',
        ]"
      >
        <component :is="item.icon" class="w-4 h-4 shrink-0" :class="item.current ? 'text-emerald-400' : 'text-[#525252]'" aria-hidden="true" />
        {{ item.name }}
        <span
          v-if="item.count"
          class="text-[11px] font-mono px-1.5 py-0.5 rounded-md"
          :class="item.current ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/[0.04] text-[#71717a]'"
        >{{ item.count }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { DocumentDuplicateIcon, FolderIcon, UsersIcon, XMarkIcon, DocumentTextIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const status = computed(() => route.query.status || "All");

const props = defineProps({ documentCounts: { type: Object, required: true } });
const getCount = (s) => props.documentCounts[s] || 0;

const navItems = computed(() => [
  { name: "All", href: "/sales", icon: DocumentDuplicateIcon, current: status.value === "All", count: getCount("Ready") + getCount("Extraction") },
  { name: "Extracting", href: "/sales?status=Extraction", icon: DocumentDuplicateIcon, current: ["Inbox", "Extraction"].includes(status.value), count: getCount("Inbox") + getCount("Extraction") },
  { name: "Missing Data", href: "/sales?status=MissingData", icon: XMarkIcon, current: status.value === "MissingData", count: getCount("MissingData") },
  { name: "Ready", href: "/sales?status=Ready", icon: DocumentTextIcon, current: status.value === "Ready", count: getCount("Ready") },
  { name: "Processed", href: "/sales?status=Processed", icon: FolderIcon, current: status.value === "Processed", count: getCount("Processed") },
  { name: "Archived", href: "/sales?status=archived", icon: UsersIcon, current: status.value === "archived", count: getCount("archived") },
]);
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
</style>
