<template>
    <div class=" mx-auto p-4 bg-[#0a0a0a]  rounded-lg">
      <h2 class="text-2xl font-semibold text-white mb-6 pb-6 border-b border-white/[0.08]">Profile Settings</h2>
      
      <form @submit.prevent="saveProfile">
        <div class="mb-4">
          <label for="fullName" class="block text-sm font-medium text-[#a1a1a1]">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            v-model="form.name" 
            :disabled="!isEditing"
            class="mt-1 block w-full rounded-lg bg-[#0a0a0a]/[0.04] border-white/[0.08] text-white placeholder-[#525252] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
        </div>
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-[#a1a1a1]">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email" 
            :disabled="!isEditing"
            class="mt-1 block w-full rounded-lg bg-[#0a0a0a]/[0.04] border-white/[0.08] text-white placeholder-[#525252] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
        </div>
        <div class="flex justify-end space-x-3">
          <button 
            v-if="!isEditing" 
            @click="startEditing" 
            type="button"
            class="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Edit
          </button>
          <button 
            v-else 
            type="submit"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Save
          </button>
          <button 
            v-if="isEditing" 
            @click="cancelEditing" 
            type="button"
            class="px-4 py-2 bg-white/[0.06] text-white rounded-md hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isEditing: false,
        originalForm: {
          name: "",
          email: ""
        },
        form: {
          name: "",
          email: ""
        }
      };
    },
    async mounted() {
      await this.fetchProfile();
    },
    methods: {
      async fetchProfile() {
        try {
          const response = await this.$api.account.get();
          if (response.data.success) {
            this.originalForm = { ...response.data.user };
            this.form = { ...response.data.user };
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
          // You might want to show an error message here
        }
      },
      startEditing() {
        this.isEditing = true;
      },
      cancelEditing() {
        this.isEditing = false;
        this.form = { ...this.originalForm };
      },
      async saveProfile() {
        try {
          const response = await this.$api.account.update(this.form);
          if (response.data.success) {
            this.originalForm = { ...response.data.user };
            this.isEditing = false;
            // You might want to show a success message here
          }
        } catch (error) {
          console.error("Error updating profile:", error);
          // You might want to show an error message here
        }
      }
    }
  };
  </script>