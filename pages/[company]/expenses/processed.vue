<template>
  <div class="relative border-b border-white/[0.06] pb-5 sm:pb-0 hidden">
    <div class="md:flex md:items-center md:justify-between">
      <h3 class="text-base font-semibold leading-6 text-white">Expenses</h3>
      <div class="mt-3 flex md:absolute md:right-0 md:top-3 md:mt-0">
        <button
          type="button"
          class="inline-flex items-center rounded-md bg-[#0a0a0a] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111]"
        >
          Share
        </button>
        <button
          type="button"
          class="ml-3 inline-flex items-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          Create
        </button>
      </div>
    </div>
    <div class="mt-4">
      <div class="sm:hidden">
        <label for="current-tab" class="sr-only">Select a tab</label>
        <select
          id="current-tab"
          name="current-tab"
          class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-white/[0.08] focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="-mb-px flex space-x-8">
          <a
            v-for="tab in tabs"
            :key="tab.name"
            :href="tab.href"
            :class="[
              tab.current
                ? 'border-indigo-500 text-emerald-400'
                : 'border-transparent text-[#71717a] hover:border-white/[0.08] hover:text-[#a1a1a1]',
              'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
            {{ tab.name }}

            <span
              v-if="tab.count"
              :class="[
                tab.current
                  ? 'bg-indigo-100 text-emerald-400'
                  : 'bg-[#09090b] text-white',
                'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block',
              ]"
              >{{ tab.count }}</span
            >
          </a>
        </nav>
      </div>
    </div>
  </div>

  <div class="bg-[#0a0a0a] rounded-lg overflow-hidden my-4">
    <div class="bg-[#0a0a0a] py-6">
      <div
        class="flex flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8"
      >
        <h1 class="text-base font-semibold leading-7 text-white">
          Expenses
        </h1>
        <div
          class="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-white/[0.06] sm:pl-6 sm:leading-7"
        >
          <a href="#" class="text-emerald-400"
            >Inbox
            <span
              class="bg-indigo-100 text-emerald-400 ml-2 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
              >12</span
            >
          </a>
          <a href="#" class="text-[#a1a1a1]"
            >Processing
            <span
              class="bg-[#09090b] text-white ml-2 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
              >12</span
            >
          </a>
          <a href="#" class="text-[#a1a1a1]"
            >Processed
            <span
              class="bg-[#09090b] text-white ml-2 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
              >92</span
            >
          </a>
          <a href="#" class="text-[#a1a1a1]"
            >Failed
            <span
              class="bg-[#09090b] text-white ml-2 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
              >100</span
            >
          </a>
          <a href="#" class="text-[#a1a1a1]"
            >Archived
            <span
              class="bg-[#09090b] text-white ml-2 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
              >1020</span
            >
          </a>
        </div>
        <a
          href="#"
          class="ml-auto flex items-center gap-x-1 rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          <svg
            class="-ml-1.5 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            />
          </svg>
          Upload Expenses
        </a>
      </div>
    </div>
    <ExpensesList />
  </div>
</template>

<script setup>
const tabs = [
  { name: "Inbox", href: "#", current: true, count: 10 },
  { name: "Processing", href: "#", current: false, count: 2 },
  { name: "Processed", href: "#", current: false, count: 5 },
  { name: "Failed", href: "#", current: false, count: 9 },
  { name: "Archived", href: "#", current: false, count: 120 },
];
</script>
