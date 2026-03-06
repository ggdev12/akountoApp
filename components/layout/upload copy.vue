<template>
  <div class="mt-0 h-full">
    <!-- Activity table (small breakpoint and up) -->
    <div class="hidden sm:block">
      <div class="">
        <div class="mt-2 flex flex-col">
          <div
            class="min-w-full overflow-hidden overflow-x-auto align-middle sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-white/[0.06]">
              <thead>
                <tr>
                  <th
                    class="bg-[#111111] px-6 py-3 text-left text-sm font-semibold text-white"
                    scope="col"
                  >
                    Customer
                  </th>
                  <th
                    class="bg-[#111111] px-6 py-3 text-right text-sm font-semibold text-white"
                    scope="col"
                  >
                    Order
                  </th>
                  <th
                    class="bg-[#111111] px-6 py-3 text-right text-sm font-semibold text-white hidden"
                    scope="col"
                  >
                    Date & Time
                  </th>

                  <th
                    class="bg-[#111111] px-6 py-3 text-right text-sm font-semibold text-white"
                    scope="col"
                  >
                    Amount
                  </th>

                  <th
                    class="hidden bg-[#111111] px-6 py-3 text-left text-sm font-semibold text-white md:block"
                    scope="col"
                  >
                    Status
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-white/[0.06] bg-[#0a0a0a]">
                <tr
                  v-for="transaction in txns"
                  :key="transaction.id"
                  class="bg-[#0a0a0a]"
                >
                  <td
                    class="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-white"
                  >
                    <div class="flex">
                      <a
                        :href="transaction.href"
                        class="group inline-flex space-x-2 truncate text-sm"
                      >
                        <BanknotesIcon
                          class="h-5 w-5 flex-shrink-0 text-[#525252] group-hover:text-[#71717a]"
                          aria-hidden="true"
                        />
                        <div>
                          <p
                            class="truncate text-[#71717a] group-hover:text-white"
                          >
                            {{ transaction.customer_name }} <br />
                            {{ transaction.customer_phone }}
                          </p>
                        </div>
                      </a>
                    </div>
                  </td>

                  <td
                    class="whitespace-nowrap px-6 py-4 text-right text-sm text-[#71717a]"
                  >
                    <span class="truncate text-[#71717a]">{{
                      transaction?.system_order_id?.slice(-6)
                    }}</span>
                  </td>

                  <td
                    class="whitespace-nowrap px-6 py-4 text-right text-sm text-[#71717a] hidden"
                  >
                    <span class="truncate text-[#71717a]">{{
                      new Date(transaction.createdAt)
                        .toLocaleString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(",", "")
                    }}</span>
                    {{
                      new Date(transaction.createdAt)
                        .toLocaleString("en-IN", {
                          timeZone: "Asia/Kolkata",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                        .replace(",", "")
                    }}
                  </td>

                  <td
                    class="whitespace-nowrap px-6 py-4 text-right text-sm text-[#71717a]"
                  >
                    <span class="text-[#71717a]"
                      >₹{{ transaction.order_amount }}</span
                    >
                    {{ transaction.currency }}
                  </td>

                  <td
                    class="hidden whitespace-nowrap px-6 py-4 text-sm text-[#71717a] md:block"
                  >
                    <span
                      :class="[
                        statusStyles[transaction.payment_status],
                        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize',
                      ]"
                      >{{ transaction.payment_status }}</span
                    >
                  </td>

                  <!-- <td class="whitespace-nowrap px-6 py-4 text-right text-sm text-[#71717a]">
                            <time :datetime="transaction.datetime">{{ transaction.createdAt }}</time>
                          </td> -->
                </tr>
              </tbody>
            </table>
            <!-- Pagination -->
            <nav
              class="flex items-center justify-between border-t border-white/[0.06] bg-[#0a0a0a] px-4 py-3 sm:px-6"
              aria-label="Pagination"
            >
              <div class="hidden sm:block">
                <p class="text-sm text-[#a1a1a1]">
                  Showing
                  {{ " " }}
                  <span class="font-medium">{{
                    (currentPage - 1) * 10 + 1
                  }}</span>
                  {{ " " }}
                  to
                  {{ " " }}
                  <span class="font-medium">{{
                    Math.min(currentPage * 10, count)
                  }}</span>
                  {{ " " }}
                  of
                  {{ " " }}
                  <span class="font-medium">{{ count }}</span>
                  {{ " " }}
                  results
                </p>
              </div>
              <div class="flex flex-1 justify-between gap-x-3 sm:justify-end">
                <button
                  v-if="currentPage > 1"
                  @click="fetchTransactions(currentPage - 1)"
                  :disabled="currentPage === 1"
                  class="relative inline-flex items-center rounded-lg bg-[#0a0a0a]/[0.04] px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:ring-gray-400"
                >
                  Previous
                </button>
                <button
                  @click="fetchTransactions(currentPage + 1)"
                  :disabled="currentPage * 10 >= count"
                  class="relative inline-flex items-center rounded-lg bg-[#0a0a0a]/[0.04] px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:ring-gray-400"
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3CenterLeftIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import {
  BanknotesIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/20/solid";

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-green-100 text-green-800",
  failed: "bg-[#09090b] text-white",
  created: "bg-green-100 text-green-800",
  FAILED: "bg-red-100 text-red-800",
  SUCCESS: "bg-green-100 text-green-800",
  PROCESSING: "bg-green-100 text-green-800",
  CREATED: "bg-green-100 text-green-800",
};

const txns = ref([]);
const count = ref(0);
const pages = ref(0);
const currentPage = ref(1);

const fetchTransactions = async (pageNo) => {
  try {
    const response = await axios.get(
      `https://api.wavepay.money/api/payment/transactions/?page=${pageNo}&limit=6`,
      {
        headers: {
          "x-api-key": localStorage.apitoken,
          "Content-Type": "application/json",
        },
      },
    );
    txns.value = response.data.transactions;
    count.value = response.data.count;
    pages.value = response.data.pages;

    if (pageNo) {
      currentPage.value = pageNo;
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};

const timeout = ref();

const getData = async () => {
  fetchTransactions();
  timeout.value = setInterval(async () => {
    await fetchTransactions(1);
  }, 3000);
};

onUnmounted(() => {
  clearInterval(timeout.value);
});

onMounted(getData);
</script>
