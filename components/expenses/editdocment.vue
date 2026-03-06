<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-50" @close="close()">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen w-full">
                <form
                  @submit.prevent="updateReceipt"
                  class="flex h-full flex-col overflow-y-scroll bg-[#0a0a0a] shadow-xl border-l border-white/[0.06]"
                >
                  <div class="flex-1">
                    <!-- Header -->
                    <div class="bg-[#111111] border-b border-white/[0.06] px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between space-x-3">
                        <div class="space-y-1">
                          <DialogTitle
                            class="text-base font-semibold leading-6 text-white"
                            >Edit Document
                          </DialogTitle>
                          <p class="text-sm text-[#71717a]">
                            Edit the document below to update the existing
                            document.
                          </p>
                        </div>
                        <div class="flex h-7 items-center">
                          <button
                            type="button"
                            class="relative text-[#525252] hover:text-[#71717a]"
                            @click="open = false"
                          >
                            <span class="absolute -inset-2.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-wrap -mx-3">
                      <div class="w-1/2 px-3 mb-6">
                        <div class="mb-3 overflow-auto" style="height: 70vh">
                          <div
                            v-if="
                              document.length &&
                              document.processed_image_file_paths.length > 1
                            "
                          >
                            <div
                              class="bg-emerald-500/10 border border-emerald-500 text-emerald-400 px-4 py-3 rounded relative"
                              role="alert"
                            >
                              <span class="block sm:inline mx-auto my-auto"
                                >Multiple images available. Scroll to view
                                all.</span
                              >
                            </div>
                          </div>
                          <div
                            v-for="(
                              imagePath, index
                            ) in document.processed_image_file_paths"
                            :key="index"
                          >
                            <img
                              :src="imagePath"
                              :alt="'Processed Document Image ' + (index + 1)"
                              class="mt-1 block w-full rounded-lg border-white/[0.08] shadow-sm"
                            />
                            <hr
                              class="my-4 border-t border-dashed border-white/[0.08]"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="w-1/2 px-3 mb-6">
                        <div class="container mx-auto p-4 bg-[#111111]">
                          <form
                            v-if="receipt.id"
                            @submit.prevent="updateInvoice"
                          >
                            <fieldset
                              :disabled="loading"
                              class="disabled:opacity-70"
                            >
                              <div
                                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                              >
                                <div class="mb-3">
                                  <label
                                    for="account_ref"
                                    class="block text-sm font-medium text-[#a1a1a1]"
                                    >Account</label
                                  >
                                  <input
                                    type="text"
                                    id="account_ref"
                                    disabled
                                    v-model="receipt.account_ref"
                                    class="mt-1 block w-full rounded-lg bg-[#0a0a0a]/[0.04] border-white/[0.08] text-white placeholder-[#525252] shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                                  />
                                </div>
                                <div class="mb-3">
                                  <label
                                    for="date"
                                    class="block text-sm font-medium text-[#a1a1a1]"
                                    >Date</label
                                  >
                                  <input
                                    type="date"
                                    id="date"
                                    v-model="receipt.txn_date"
                                    class="mt-1 block w-full rounded-lg bg-[#0a0a0a]/[0.04] border-white/[0.08] text-white placeholder-[#525252] shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                                  />
                                </div>
                                <div class="mb-3">
                                  <label
                                    for="amount"
                                    class="block text-sm font-medium text-[#a1a1a1]"
                                    >Amount</label
                                  >
                                  <input
                                    id="amount"
                                    disabled
                                    v-model="receipt.total_amount"
                                    class="mt-1 block w-full rounded-lg bg-[#0a0a0a]/[0.04] border-white/[0.08] text-white placeholder-[#525252] shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                                  />
                                </div>
                                <!-- <div class="mb-3">
                                <label
                                  for="totalAmount"
                                  class="block text-sm font-medium text-[#a1a1a1]"
                                  >Total Amount</label
                                >
                                <input
                                  type="number"
                                  id="totalAmount"
                                  v-model="invoice.total_amount"
                                  class="mt-1 block w-full rounded-lg bg-[#0a0a0a]/[0.04] border-white/[0.08] text-white placeholder-[#525252] shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                                  readonly
                                />
                              </div> -->
                                <div class="mb-3">
                                  <label
                                    for="customerName"
                                    class="block text-sm font-medium text-[#a1a1a1]"
                                    >Payee</label
                                  >

                                  <Listbox v-model="selectedPerson">
                                    <div class="relative mt-1">
                                      <ListboxButton
                                        class="relative w-full cursor-default rounded-lg bg-[#0a0a0a] py-2 pl-3 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                                      >
                                        <span class="block truncate">{{
                                          selectedPerson.name
                                        }}</span>
                                        <span
                                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                        >
                                          <ChevronUpDownIcon
                                            class="h-5 w-5 text-[#525252]"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      </ListboxButton>

                                      <transition
                                        leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0"
                                      >
                                        <ListboxOptions
                                          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-[#18181b] border border-white/[0.08] py-1 text-base shadow-lg ring-1 ring-white/[0.08] focus:outline-none sm:text-sm"
                                        >
                                          <ListboxOption
                                            v-slot="{ active, selected }"
                                            v-for="vendor in vendors"
                                            :key="vendor.name"
                                            :value="vendor"
                                            as="template"
                                          >
                                            <li
                                              :class="[
                                                active
                                                  ? 'bg-emerald-500/10 text-emerald-400'
                                                  : 'text-white',
                                                'relative cursor-default select-none py-2 pl-10 pr-4',
                                              ]"
                                            >
                                              <span
                                                :class="[
                                                  selected
                                                    ? 'font-medium'
                                                    : 'font-normal',
                                                  'block truncate',
                                                ]"
                                                >{{ vendor.name }}</span
                                              >
                                              <span
                                                v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-400"
                                              >
                                                <CheckIcon
                                                  class="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            </li>
                                          </ListboxOption>
                                        </ListboxOptions>
                                      </transition>
                                    </div>
                                  </Listbox>
                                </div>
                                <!-- Billing and Shipping Address in two columns -->
                                <div
                                  class="mb-3 col-span-1 md:col-span-2 lg:col-span-3 overflow-auto"
                                  style="height: 200px"
                                >
                                  <label
                                    class="block text-sm font-medium text-[#a1a1a1]"
                                    >Line Items *</label
                                  >
                                  <table
                                    class="min-w-full divide-y divide-white/[0.06] mt-2"
                                  >
                                    <thead class="bg-[#111111]">
                                      <tr>
                                        <th
                                          scope="col"
                                          class="px-4 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
                                        >
                                          Account
                                        </th>
                                        <th
                                          scope="col"
                                          class="px-4 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
                                        >
                                          Amount
                                        </th>
                                        <th
                                          scope="col"
                                          class="px-4 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
                                        >
                                          Status
                                        </th>
                                        <th
                                          scope="col"
                                          class="px-4 py-2 text-left text-xs font-medium text-[#71717a] uppercase tracking-wider"
                                        >
                                          Tax Code
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody
                                      class="bg-[#0a0a0a] divide-y divide-white/[0.06]"
                                    >
                                      <tr
                                        v-for="item in receipt.PurchaseLineItems"
                                        :key="item.id"
                                      >
                                        <td
                                          class="px-4 py-2 whitespace-nowrap text-sm text-[#71717a]"
                                        >
                                          {{ item.account_ref }}
                                        </td>
                                        <td
                                          class="px-4 py-2 whitespace-nowrap text-sm text-[#71717a]"
                                        >
                                          {{ item.amount }}
                                        </td>
                                        <td
                                          class="px-4 py-2 whitespace-nowrap text-sm text-[#71717a]"
                                        >
                                          {{ item.billable_status }}
                                        </td>
                                        <td
                                          class="px-4 py-2 whitespace-nowrap text-sm text-[#71717a]"
                                        >
                                          {{ item.tax_code_ref }}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>

                    <!-- Divider container -->
                  </div>

                  <!-- Action buttons -->
                  <div
                    class="flex-shrink-0 border-t border-white/[0.06] px-4 py-5 sm:px-6"
                  >
                    <div class="flex justify-end space-x-3">
                      <button
                        type="button"
                        :disabled="loading"
                        class="rounded-lg bg-[#0a0a0a]/[0.04] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/[0.08] hover:bg-[#111111] disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="open = false"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        :disabled="loading"
                        class="inline-flex justify-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {{ loading ? "Updating..." : "Update" }}
                      </button>
                    </div>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import moment from "moment";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from "@heroicons/vue/20/solid";

const props = defineProps({
  document: Object,
  vendors: Array,
});

const open = ref(false);
const document = ref({});
const document_status = ref();
const loading = ref(false);

const receipt = ref({});
const selectedPerson = ref({});

const close = () => {
  open.value = false;
  document.value = {};
  receipt.value = {};
};

const fetchDocument = async () => {
  const route = useRoute();
  const companyId = process.client
    ? localStorage.getItem("companyID") || ""
    : "";
  const id = document.value.id;

  const response = await useNuxtApp().$api.documents.get(companyId, id);

  let data = response.data?.receipt;

  if (data.txn_date) {
    data.txn_date = moment(data.txn_date).format("YYYY-MM-DD");
  }

  if (data.due_date) {
    data.date = moment(data.due_date).format("YYYY-MM-DD");
  }

  receipt.value = data;
  selectedPerson.value = receipt.value.Vendor;

  document_status.value = response.data.status;
};

onUnmounted(() => {
  receipt.value = {};
});

watch(
  () => props.document,
  (newVal) => {
    document.value = newVal;
    open.value = true;
    fetchDocument();
  },
  { immediate: true },
);

watch(
  () => props.vendors,
  (newVal, oldVal) => {
    console.log("Customers data changed:", newVal);
  },
);

async function updateReceipt(e) {
  const route = useRoute();
  const companyId = process.client
    ? localStorage.getItem("companyID") || ""
    : "";
  const formData = new FormData(e.target);
  const { account_ref, txn_date, total_amount, payment_type } = receipt.value;

  loading.value = true;

  const data = {
    account_ref,
    txn_date,
    total_amount,
    payment_type,
    VendorId: selectedPerson.value.id,
    items: receipt.value.PurchaseLineItems,
  };

  try {
    if (document_status.value === "Ready") {
      await useNuxtApp().$api.expenses.update(
        companyId,
        receipt.value.id,
        data,
      );
    } else if (document_status.value === "MissingData") {
      await useNuxtApp().$api.expenses.updateMissingItems(companyId, id, data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
