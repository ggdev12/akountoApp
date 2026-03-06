<template>
  <div class="bg-[#111111] overflow-hidden rounded-lg border border-white/[0.06]">
    <table class="min-w-full divide-y divide-white/[0.06]">
      <thead class="bg-[#111111]">
        <tr>
          <th
            scope="col"
            class="px-4 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            <input
              type="checkbox"
              class="form-checkbox h-3 w-3 text-emerald-400 transition duration-150 ease-in-out"
            />
          </th>
          <th
            scope="col"
            class="px-2 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Preview
          </th>

          <th
            scope="col"
            class="px-2 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Items
          </th>
          <th
            scope="col"
            class="px-2 py-2 text-center text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Vendor
          </th>
          <th
            scope="col"
            class="px-2 py-2 text-center text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Category
          </th>

          <th
            scope="col"
            class="px-2 py-2 text-center text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Amount
          </th>

          <th
            scope="col"
            class="px-2 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Date
          </th>

          <th
            scope="col"
            class="px-2 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Status
          </th>

          <th
            scope="col"
            class="px-2 py-2 text-center text-xs font-medium text-[#71717a] uppercase tracking-wider"
          >
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-[#0a0a0a] divide-y divide-white/[0.06]">
        <tr v-for="(expense, index) in expenses" :key="index">
          <td class="px-4 py-2 whitespace-nowrap w-auto">
            <input
              type="checkbox"
              class="form-checkbox h-3 w-3 text-emerald-400 transition duration-150 ease-in-out"
            />
          </td>
          <td class="px-2 py-2 whitespace-nowrap w-auto">
            <a href="https://placehold.co/600x400" target="_blank">
              <img
                src="https://placehold.co/600x400"
                alt="Placeholder"
                class="w-8 h-6"
              />
            </a>
          </td>

          <td
            class="px-2 py-2 whitespace-nowrap text-sm text-left text-[#71717a] w-auto"
          >
            <a
              href="#"
              class="text-emerald-400 text-sm"
              @click="showItems(expense)"
              >{{ expense.Line.length }} items</a
            >
          </td>

          <td class="px-2 py-2 whitespace-nowrap text-sm text-[#71717a] w-1/6">
            <FormsCombo />
          </td>

          <td class="px-2 py-2 whitespace-nowrap text-sm text-[#71717a] w-1/6">
            <FormsCombo />
          </td>
          <td
            class="px-2 py-2 whitespace-nowrap text-center text-[#71717a] text-sm"
          >
            {{ expense.TotalAmt }}
          </td>
          <td class="px-2 py-2 whitespace-nowrap text-sm text-[#71717a] w-auto">
            {{ expense.TxnDate }}
          </td>
          <td class="px-2 py-2 whitespace-nowrap w-auto text-sm">
            <div class="flex items-lef">
              <div class="" v-if="expense.status === 'Ready'">
                <span
                  class="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-xl ml-2 bg-green-700 text-white"
                >
                  Ready
                </span>
              </div>

              <div class="" v-if="expense.status === 'To Review'">
                <span
                  class="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-xl ml-2 bg-green-600 text-white"
                >
                  Missing Data
                </span>
              </div>

              <div class="" v-if="expense.status === 'Processing'">
                <span
                  class="px-2 py-1 inline-flex text-xs leading-4 font-semibold rounded-xl ml-2 bg-emerald-500 text-white"
                >
                  Processing
                </span>
              </div>
            </div>
          </td>
          <td class="px-2 py-2 whitespace-nowrap text-center w-auto">
            <button
              type="button"
              v-if="expense.status === 'Ready'"
              class="rounded bg-green-600 px-1 py-0.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Publish
            </button>

            <div class="" v-else>
              <Nuxt-link to="/sales/edit" class="text-emerald-400 text-sm">
                Edit
              </Nuxt-link>
              <button
                type="button"
                disabled
                class="hidden rounded bg-green-600 px-1 py-0.5 text-sm font-semibold text-white shadow-sm opacity-50 cursor-not-allowed"
              >
                Publish
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="hidden flex items-center justify-between border-t border-white/[0.06] bg-[#0a0a0a] px-4 py-3 sm:px-6 fixed bottom-0 left-0 right-0"
    >
      <div class="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          class="relative inline-flex items-center rounded-md border border-white/[0.08] bg-[#0a0a0a] px-4 py-2 text-sm font-medium text-[#a1a1a1] hover:bg-[#111111]"
          >Previous</a
        >
        <a
          href="#"
          class="relative ml-3 inline-flex items-center rounded-md border border-white/[0.08] bg-[#0a0a0a] px-4 py-2 text-sm font-medium text-[#a1a1a1] hover:bg-[#111111]"
          >Next</a
        >
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-[#a1a1a1]">
            Showing
            <!-- space -->
            <span class="font-medium">1</span>
            <!-- space -->
            to
            <!-- space -->
            <span class="font-medium">10</span>
            <!-- space -->
            of
            <!-- space -->
            <span class="font-medium">97</span>
            <!-- space -->
            results
          </p>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-[#525252] ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <!-- Current: "z-10 bg-emerald-500 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500", Default: "text-white ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:outline-offset-0" -->
            <a
              href="#"
              aria-current="page"
              class="relative z-10 inline-flex items-center bg-emerald-500 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >1</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0"
              >2</a
            >
            <a
              href="#"
              class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0 md:inline-flex"
              >3</a
            >
            <span
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-[#a1a1a1] ring-1 ring-inset ring-white/[0.08] focus:outline-offset-0"
              >...</span
            >
            <a
              href="#"
              class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0 md:inline-flex"
              >8</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0"
              >9</a
            >
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0"
              >10</a
            >
            <a
              href="#"
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-[#525252] ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] focus:z-20 focus:outline-offset-0"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const suppliers = ["Squeaky Kleen Car Wash", "Bob's Burger Joint"];

const categories = ["Automobile", "Meals and Entertainment"];

const expenses = [
  {
    AccountRef: {
      value: "41",
      name: "Mastercard",
    },
    PaymentType: "CreditCard",
    EntityRef: {
      value: "57",
      name: "Squeaky Kleen Car Wash",
      type: "Vendor",
    },
    Credit: false,
    TotalAmt: 19.99,
    PurchaseEx: {
      TxnType: "1",
    },
    domain: "QBO",
    sparse: false,
    Id: "142",
    SyncToken: "0",
    MetaData: {
      CreateTime: "2024-02-28T14:37:54-08:00",
      LastUpdatedTime: "2024-02-28T14:37:54-08:00",
    },
    TxnDate: "2024-02-26",
    CurrencyRef: {
      value: "USD",
      name: "United States Dollar",
    },
    Line: [
      {
        Id: "1",
        Amount: 19.99,
        DetailType: "AccountBasedExpenseLineDetail",
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: "55",
            name: "Automobile",
          },
          BillableStatus: "NotBillable",
          TaxCodeRef: {
            value: "NON",
          },
        },
      },
    ],
    status: "To Review",
  },
  {
    AccountRef: {
      value: "42",
      name: "Visa",
    },
    PaymentType: "CreditCard",
    EntityRef: {
      value: "58",
      name: "Bob's Burger Joint",
      type: "Vendor",
    },
    Credit: false,
    TotalAmt: 45.5,
    PurchaseEx: {
      TxnType: "1",
    },
    domain: "QBO",
    sparse: false,
    Id: "143",
    SyncToken: "0",
    MetaData: {
      CreateTime: "2024-02-27T12:15:22-08:00",
      LastUpdatedTime: "2024-02-27T12:15:22-08:00",
    },
    TxnDate: "2024-02-25",
    CurrencyRef: {
      value: "USD",
      name: "United States Dollar",
    },
    Line: [
      {
        Id: "1",
        Amount: 45.5,
        DetailType: "AccountBasedExpenseLineDetail",
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: "56",
            name: "Meals and Entertainment",
          },
          BillableStatus: "NotBillable",
          TaxCodeRef: {
            value: "NON",
          },
        },
      },
    ],
    status: "Processing",
  },
  {
    AccountRef: {
      value: "42",
      name: "Visa",
    },
    PaymentType: "CreditCard",
    EntityRef: {
      value: "58",
      name: "Bob's Burger Joint",
      type: "Vendor",
    },
    Credit: false,
    TotalAmt: 45.5,
    PurchaseEx: {
      TxnType: "1",
    },
    domain: "QBO",
    sparse: false,
    Id: "143",
    SyncToken: "0",
    MetaData: {
      CreateTime: "2024-02-27T12:15:22-08:00",
      LastUpdatedTime: "2024-02-27T12:15:22-08:00",
    },
    TxnDate: "2024-02-25",
    CurrencyRef: {
      value: "USD",
      name: "United States Dollar",
    },
    Line: [
      {
        Id: "1",
        Amount: 45.5,
        DetailType: "AccountBasedExpenseLineDetail",
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: "56",
            name: "Meals and Entertainment",
          },
          BillableStatus: "NotBillable",
          TaxCodeRef: {
            value: "NON",
          },
        },
      },
    ],
    status: "Ready",
  },
  {
    AccountRef: {
      value: "42",
      name: "Visa",
    },
    PaymentType: "CreditCard",
    EntityRef: {
      value: "58",
      name: "Bob's Burger Joint",
      type: "Vendor",
    },
    Credit: false,
    TotalAmt: 45.5,
    PurchaseEx: {
      TxnType: "1",
    },
    domain: "QBO",
    sparse: false,
    Id: "143",
    SyncToken: "0",
    MetaData: {
      CreateTime: "2024-02-27T12:15:22-08:00",
      LastUpdatedTime: "2024-02-27T12:15:22-08:00",
    },
    TxnDate: "2024-02-25",
    CurrencyRef: {
      value: "USD",
      name: "United States Dollar",
    },
    Line: [
      {
        Id: "1",
        Amount: 45.5,
        DetailType: "AccountBasedExpenseLineDetail",
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: "56",
            name: "Meals and Entertainment",
          },
          BillableStatus: "NotBillable",
          TaxCodeRef: {
            value: "NON",
          },
        },
      },
    ],
    status: "Ready",
  },
  {
    AccountRef: {
      value: "42",
      name: "Visa",
    },
    PaymentType: "CreditCard",
    EntityRef: {
      value: "58",
      name: "Bob's Burger Joint",
      type: "Vendor",
    },
    Credit: false,
    TotalAmt: 45.5,
    PurchaseEx: {
      TxnType: "1",
    },
    domain: "QBO",
    sparse: false,
    Id: "143",
    SyncToken: "0",
    MetaData: {
      CreateTime: "2024-02-27T12:15:22-08:00",
      LastUpdatedTime: "2024-02-27T12:15:22-08:00",
    },
    TxnDate: "2024-02-25",
    CurrencyRef: {
      value: "USD",
      name: "United States Dollar",
    },
    Line: [
      {
        Id: "1",
        Amount: 45.5,
        DetailType: "AccountBasedExpenseLineDetail",
        AccountBasedExpenseLineDetail: {
          AccountRef: {
            value: "56",
            name: "Meals and Entertainment",
          },
          BillableStatus: "NotBillable",
          TaxCodeRef: {
            value: "NON",
          },
        },
      },
    ],
    status: "Ready",
  },
];
</script>
