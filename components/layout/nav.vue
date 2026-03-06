<template>
  <div class="flex flex-grow flex-col overflow-y-auto border-r border-white/[0.06] bg-[#0a0a0a] pb-4 pt-5">
    <div class="flex flex-shrink-0 items-center px-4">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </div>
    <div class="mt-5 flex flex-grow flex-col">
      <nav class="flex-1 space-y-1 bg-[#0a0a0a] px-2" aria-label="Sidebar">
        <template v-for="item in navigation" :key="item.name">
          <div v-if="!item.children">
            <a href="#" :class="[item.current ? 'bg-[#09090b] text-white' : 'bg-[#0a0a0a] text-[#a1a1a1] hover:bg-[#111111] hover:text-white', 'group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium']">
              <component :is="item.icon" :class="[item.current ? 'text-[#71717a]' : 'text-[#525252] group-hover:text-[#71717a]', 'mr-3 h-6 w-6 flex-shrink-0']" aria-hidden="true" />
              {{ item.name }}
            </a>
          </div>
          <Disclosure as="div" v-else class="space-y-1" v-slot="{ open }">
            <DisclosureButton :class="[item.current ? 'bg-[#09090b] text-white' : 'bg-[#0a0a0a] text-[#a1a1a1] hover:bg-[#111111] hover:text-white', 'group flex w-full items-center rounded-md py-2 pl-2 pr-1 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500']">
              <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0 text-[#525252] group-hover:text-[#71717a]" aria-hidden="true" />
              <span class="flex-1">{{ item.name }}</span>
              <svg :class="[open ? 'rotate-90 text-[#525252]' : 'text-[#a1a1a1]', 'ml-3 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-[#525252]']" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
              </svg>
            </DisclosureButton>
            <DisclosurePanel class="space-y-1">
              <DisclosureButton v-for="subItem in item.children" :key="subItem.name" as="a" :href="subItem.href" class="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-[#a1a1a1] hover:bg-[#111111] hover:text-white">{{ subItem.name }}</DisclosureButton>
            </DisclosurePanel>
          </Disclosure>
        </template>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true, href: '#' },
  {
    name: 'Team',
    icon: UsersIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Projects',
    icon: FolderIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Calendar',
    icon: CalendarIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Documents',
    icon: InboxIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
  {
    name: 'Reports',
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: 'Overview', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Calendar', href: '#' },
      { name: 'Settings', href: '#' },
    ],
  },
]
</script>