<template>
  <div class="specular-card p-8 animate-fade-in">
    <h3 class="text-xl font-semibold mb-6 text-white">Profile Settings</h3>
    <form>
      <div class="mb-6">
        <label for="name" class="block text-[#a1a1a1] font-medium mb-2 text-sm">Name</label>
        <input type="text" id="name"
          class="w-full px-4 py-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-sm"
          value="John Doe" />
      </div>
      <div class="mb-6">
        <label for="email" class="block text-[#a1a1a1] font-medium mb-2 text-sm">Email</label>
        <input type="email" id="email"
          class="w-full px-4 py-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-sm"
          value="johndoe@example.com" />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-[#a1a1a1] font-medium mb-2 text-sm">Password</label>
        <input type="password" id="password"
          class="w-full px-4 py-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-sm"
          placeholder="Enter your password" />
      </div>
      <div class="mb-6">
        <label for="confirmPassword" class="block text-[#a1a1a1] font-medium mb-2 text-sm">Confirm Password</label>
        <input type="password" id="confirmPassword"
          class="w-full px-4 py-3 bg-[#0a0a0a]/[0.04] border border-white/[0.08] rounded-lg text-white placeholder-[#525252] focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40 text-sm"
          placeholder="Confirm your password" />
      </div>
      <button type="submit" class="bg-emerald-500 text-white py-2.5 px-4 rounded-lg hover:bg-emerald-400 transition-colors text-sm font-medium">
        Save Changes
      </button>
    </form>
  </div>
</template>
