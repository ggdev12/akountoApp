<!-- Start of Selection -->
<template>
  <div class="page-wrapper">
    <!-- Navbar -->
    <nav id="navbar" class="bg-neutral-900 text-white fixed w-full z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <img
              class="h-8 w-auto"
              src="https://dms.mydukaan.io/original/webp/media/dd3b40b1-db23-400d-ae38-bb702bad6fc4.svg"
              alt="Logo"
            />
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-8">
              <a
                href="#features"
                class="text-white hover:text-purple-400 px-3 py-2 text-sm font-medium"
                >Features</a
              >
              <a
                href="#solutions"
                class="text-white hover:text-purple-400 px-3 py-2 text-sm font-medium"
                >Solutions</a
              >
              <a
                href="#pricing"
                class="text-white hover:text-purple-400 px-3 py-2 text-sm font-medium"
                >Pricing</a
              >
              <a
                href="#resources"
                class="text-white hover:text-purple-400 px-3 py-2 text-sm font-medium"
                >Resources</a
              >
              <a
                href="/get-started"
                class="bg-[#5B53FD] hover:bg-[#4A43E8] px-4 py-2 rounded-lg text-sm font-medium"
                >Get Started</a
              >
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-800"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden bg-neutral-900">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            class="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800"
            >Features</a
          >
          <a
            href="#solutions"
            class="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800"
            >Solutions</a
          >
          <a
            href="#pricing"
            class="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800"
            >Pricing</a
          >
          <a
            href="#resources"
            class="block px-3 py-2 text-base font-medium text-white hover:bg-neutral-800"
            >Resources</a
          >
          <button
            class="w-full text-left bg-[#5B53FD] hover:bg-[#4A43E8] px-3 py-2 rounded-lg text-base font-medium text-white"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <!-- Hero Section -->
    <section
      id="hero"
      class="bg-neutral-900 text-white pt-24 pb-16 min-h-[70vh]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Content -->
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span class="text-purple-500" style="color: #5b53fd"
                >Connect Akounto</span
              >
              with QuickBooks
            </h1>
            <p class="text-lg md:text-xl text-[#a1a1a1] mb-8">
              Unlock effortless accounting by integrating Akounto with
              QuickBooks. Enjoy streamlined workflows, automated document
              processing, real-time tracking, and intelligent financial
              insights.
            </p>

            <div class="mt-8 flex items-center gap-4">
              <div class="flex -space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-[#a1a1a1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                  ></path>
                </svg>
              </div>
              <p class="text-[#a1a1a1]">
                Trusted by 10,000+ businesses worldwide
              </p>
            </div>
          </div>

          <!-- Right Column: Image -->
          <div class="relative">
            <div class="relative z-10">
              <img
                src="https://www.tradifyhq.com/hs-fs/hubfs/Global%20Hero%20Frame%20extended.webp"
                alt="Dashboard Preview"
                class="w-full rounded-xl shadow-2xl"
              />
            </div>
            <div
              class="absolute inset-0 bg-purple-500/20 blur-3xl -z-10 rounded-full"
            ></div>
          </div>
        </div>

        <!-- Stats Bar -->
        <div
          class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-700 pt-8"
        >
          <div class="text-center">
            <h4 class="text-3xl font-bold text-[#5B53FD]">98%</h4>
            <p class="text-[#525252]">Processing Accuracy</p>
          </div>
          <div class="text-center">
            <h4 class="text-3xl font-bold text-[#5B53FD]">2M+</h4>
            <p class="text-[#525252]">Documents Processed</p>
          </div>
          <div class="text-center">
            <h4 class="text-3xl font-bold text-[#5B53FD]">50k+</h4>
            <p class="text-[#525252]">Active Users</p>
          </div>
          <div class="text-center">
            <h4 class="text-3xl font-bold text-[#5B53FD]">4.9/5</h4>
            <p class="text-[#525252]">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <!-- Paste features section here -->
    </section>

    <!-- Statistics Section -->
    <section id="statistics" class="py-20 bg-neutral-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Performance Metrics
          </h2>
          <p class="text-lg text-[#525252] max-w-2xl mx-auto">
            Track your business performance with detailed analytics and insights
          </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Document Processing -->
          <div
            class="bg-neutral-800 p-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center justify-between mb-4">
              <div
                class="w-12 h-12 bg-[#5B53FD]/20 rounded-lg flex items-center justify-center"
              >
                <img
                  src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/estimates.svg"
                  alt="Documents"
                  class="w-6 h-6 [filter:invert(1)]"
                />
              </div>
              <span class="text-[#5B53FD] text-sm">Last 24h</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Document Processing</h4>
            <div class="flex items-end gap-2 mb-2">
              <span class="text-3xl font-bold">62.50%</span>
              <span class="text-green-400 text-sm mb-1">↑ 5.25%</span>
            </div>
            <p class="text-[#525252] text-sm">8 scanned, 5 auto-processed</p>
            <div class="w-full bg-neutral-700 rounded-full h-2 mt-4">
              <div
                class="bg-[#5B53FD] h-2 rounded-full"
                style="width: 62.5%"
              ></div>
            </div>
          </div>

          <!-- User Management -->
          <div
            class="bg-neutral-800 p-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center justify-between mb-4">
              <div
                class="w-12 h-12 bg-[#5B53FD]/20 rounded-lg flex items-center justify-center"
              >
                <img
                  src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/user-helmet-safety-sharp-solid.svg"
                  alt="Users"
                  class="w-6 h-6 [filter:invert(1)]"
                />
              </div>
              <span class="text-[#5B53FD] text-sm">Active Now</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">User Utilization</h4>
            <div class="flex items-end gap-2 mb-2">
              <span class="text-3xl font-bold">1/10</span>
              <span class="text-yellow-400 text-sm mb-1">Active Users</span>
            </div>
            <p class="text-[#525252] text-sm">10% utilization rate</p>
            <div class="w-full bg-neutral-700 rounded-full h-2 mt-4">
              <div
                class="bg-[#5B53FD] h-2 rounded-full"
                style="width: 10%"
              ></div>
            </div>
          </div>

          <!-- Storage Usage -->
          <div
            class="bg-neutral-800 p-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center justify-between mb-4">
              <div
                class="w-12 h-12 bg-[#5B53FD]/20 rounded-lg flex items-center justify-center"
              >
                <img
                  src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/magnifying-glass_search.svg"
                  alt="Storage"
                  class="w-6 h-6 [filter:invert(1)]"
                />
              </div>
              <span class="text-[#5B53FD] text-sm">Storage</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Storage Usage</h4>
            <div class="flex items-end gap-2 mb-2">
              <span class="text-3xl font-bold">2/8</span>
              <span class="text-green-400 text-sm mb-1">GB Used</span>
            </div>
            <p class="text-[#525252] text-sm">25% storage utilized</p>
            <div class="w-full bg-neutral-700 rounded-full h-2 mt-4">
              <div
                class="bg-[#5B53FD] h-2 rounded-full"
                style="width: 25%"
              ></div>
            </div>
          </div>

          <!-- Document Quota -->
          <div
            class="bg-neutral-800 p-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <div class="flex items-center justify-between mb-4">
              <div
                class="w-12 h-12 bg-[#5B53FD]/20 rounded-lg flex items-center justify-center"
              >
                <img
                  src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/enquiries.svg"
                  alt="Quota"
                  class="w-6 h-6 [filter:invert(1)]"
                />
              </div>
              <span class="text-[#5B53FD] text-sm">Quota</span>
            </div>
            <h4 class="text-xl font-semibold mb-2">Document Quota</h4>
            <div class="flex items-end gap-2 mb-2">
              <span class="text-3xl font-bold">8/100</span>
              <span class="text-[#5B53FD] text-sm mb-1">Scanned</span>
            </div>
            <p class="text-[#525252] text-sm">8% quota utilized</p>
            <div class="w-full bg-neutral-700 rounded-full h-2 mt-4">
              <div
                class="bg-[#5B53FD] h-2 rounded-full"
                style="width: 8%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Preview Section -->
    <section id="dashboard-preview" class="py-20 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Powerful Dashboard Insights
          </h2>
          <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get a complete overview of your business with real-time analytics
            and activity tracking
          </p>
        </div>

        <!-- Dashboard Preview -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left: Dashboard Image -->
          <div class="relative">
            <div class="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://dms.mydukaan.io/original/webp/media/cc2910dc-d4bc-46e4-9eae-93bf0c905fe6.png"
                alt="Dashboard Preview"
                class="w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="absolute -z-10 inset-0 bg-purple-500/20 blur-3xl"></div>
            <!-- Interactive Overlay Indicators -->
            <div
              class="absolute top-4 right-4 bg-[#0a0a0a]/90 backdrop-blur-sm p-3 rounded-lg shadow-lg"
            >
              <div class="flex items-center gap-2">
                <div
                  class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                ></div>
                <span class="text-sm font-medium text-neutral-900"
                  >Live Updates</span
                >
              </div>
            </div>
          </div>

          <!-- Right: Activity Feed -->
          <div class="space-y-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-bold text-neutral-900">
                Recent Activities
              </h3>
              <button
                class="text-sm text-[#5B53FD] hover:text-[#4A43E8] font-medium"
              >
                View All
              </button>
            </div>

            <!-- Activity Items -->
            <div class="space-y-4">
              <!-- New Invoice Activity -->
              <div
                class="bg-[#0a0a0a] p-4 rounded-lg border border-neutral-200 hover:shadow-md transition-all group"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 text-[#5B53FD]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start">
                      <div>
                        <p class="font-medium text-neutral-900">
                          New invoice uploaded
                        </p>
                        <p class="text-sm text-neutral-500">
                          Invoice #2024-001 processed automatically
                        </p>
                      </div>
                      <span class="text-sm text-neutral-500">2m ago</span>
                    </div>
                    <div class="mt-2 flex items-center gap-2">
                      <span class="text-sm font-medium text-[#5B53FD]"
                        >$1,499.99</span
                      >
                      <span
                        class="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full"
                        >Processed</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Payment Received Activity -->
              <div
                class="bg-[#0a0a0a] p-4 rounded-lg border border-neutral-200 hover:shadow-md transition-all group"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start">
                      <div>
                        <p class="font-medium text-neutral-900">
                          Payment received
                        </p>
                        <p class="text-sm text-neutral-500">
                          From Client Solutions Inc.
                        </p>
                      </div>
                      <span class="text-sm text-neutral-500">1h ago</span>
                    </div>
                    <div class="mt-2">
                      <span class="text-sm font-medium text-green-600"
                        >+$2,850.00</span
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Document Sync Activity -->
              <div
                class="bg-[#0a0a0a] p-4 rounded-lg border border-neutral-200 hover:shadow-md transition-all group"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="flex justify-between items-start">
                      <div>
                        <p class="font-medium text-neutral-900">
                          QuickBooks sync completed
                        </p>
                        <p class="text-sm text-neutral-500">
                          15 documents synchronized
                        </p>
                      </div>
                      <span class="text-sm text-neutral-500">3h ago</span>
                    </div>
                    <div class="mt-2">
                      <span
                        class="text-xs px-2 py-1 bg-emerald-500/10 text-blue-800 rounded-full"
                        >Automated</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Stats -->
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div
                class="bg-neutral-50 p-4 rounded-lg border border-neutral-200"
              >
                <h4 class="text-sm text-neutral-500 mb-2">Processing Speed</h4>
                <p class="text-2xl font-bold text-[#5B53FD]">2.5s</p>
                <p class="text-sm text-neutral-600 mt-1">
                  Average response time
                </p>
              </div>
              <div
                class="bg-neutral-50 p-4 rounded-lg border border-neutral-200"
              >
                <h4 class="text-sm text-neutral-500 mb-2">Success Rate</h4>
                <p class="text-2xl font-bold text-[#5B53FD]">99.9%</p>
                <p class="text-sm text-neutral-600 mt-1">Last 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-20 bg-neutral-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span
            class="text-[#5B53FD] text-sm font-semibold tracking-wider uppercase mb-2 block"
            >Benefits</span
          >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Akounto?
          </h2>
          <p class="text-lg text-[#525252] max-w-2xl mx-auto">
            Transform your financial management with our powerful and flexible
            accounting tools designed for modern businesses
          </p>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="space-y-8">
            <!-- Benefit Card 1 -->
            <div
              class="flex gap-6 p-8 bg-neutral-800 rounded-xl hover:bg-[#5B53FD]/10 transition-all duration-300 group"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-14 h-14 bg-[#5B53FD]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5B53FD]/30 transition-colors"
                >
                  <img
                    src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/timesheet_job%20tracking.svg"
                    alt="Real-time"
                    class="w-8 h-8 [filter:brightness(0)_invert(1)] group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-xl font-bold mb-3 group-hover:text-[#5B53FD] transition-colors"
                >
                  Real-Time Activity Tracking
                </h3>
                <p class="text-[#525252] leading-relaxed">
                  Monitor document processing, user activities, and system
                  performance in real-time with detailed insights for better
                  decision making.
                </p>
                <div
                  class="mt-4 flex items-center text-[#5B53FD] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span class="text-sm font-medium">Learn more</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Benefit Card 2 -->
            <div
              class="flex gap-6 p-8 bg-neutral-800 rounded-xl hover:bg-[#5B53FD]/10 transition-all duration-300 group"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-14 h-14 bg-[#5B53FD]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5B53FD]/30 transition-colors"
                >
                  <img
                    src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/user-helmet-safety-sharp-solid.svg"
                    alt="Management"
                    class="w-8 h-8 [filter:brightness(0)_invert(1)] group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-xl font-bold mb-3 group-hover:text-[#5B53FD] transition-colors"
                >
                  Customer & Vendor Management
                </h3>
                <p class="text-[#525252] leading-relaxed">
                  Centralized platform to efficiently manage all your business
                  relationships, communications, and transactions in one place.
                </p>
                <div
                  class="mt-4 flex items-center text-[#5B53FD] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span class="text-sm font-medium">Learn more</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-8">
            <!-- Benefit Card 3 -->
            <div
              class="flex gap-6 p-8 bg-neutral-800 rounded-xl hover:bg-[#5B53FD]/10 transition-all duration-300 group"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-14 h-14 bg-[#5B53FD]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5B53FD]/30 transition-colors"
                >
                  <img
                    src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/estimates.svg"
                    alt="Analytics"
                    class="w-8 h-8 [filter:brightness(0)_invert(1)] group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-xl font-bold mb-3 group-hover:text-[#5B53FD] transition-colors"
                >
                  Advanced Analytics
                </h3>
                <p class="text-[#525252] leading-relaxed">
                  Gain powerful insights into your business performance with
                  comprehensive analytics, custom reports, and predictive
                  forecasting.
                </p>
                <div
                  class="mt-4 flex items-center text-[#5B53FD] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span class="text-sm font-medium">Learn more</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Benefit Card 4 -->
            <div
              class="flex gap-6 p-8 bg-neutral-800 rounded-xl hover:bg-[#5B53FD]/10 transition-all duration-300 group"
            >
              <div class="flex-shrink-0">
                <div
                  class="w-14 h-14 bg-[#5B53FD]/20 rounded-xl flex items-center justify-center group-hover:bg-[#5B53FD]/30 transition-colors"
                >
                  <img
                    src="https://www.tradifyhq.com/hubfs/Website%202024/icons/Icons%202024%20-%20Tradify%20SVG/Scheduling.svg"
                    alt="Automation"
                    class="w-8 h-8 [filter:brightness(0)_invert(1)] group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div>
                <h3
                  class="text-xl font-bold mb-3 group-hover:text-[#5B53FD] transition-colors"
                >
                  Intelligent Automation
                </h3>
                <p class="text-[#525252] leading-relaxed">
                  Streamline workflows with AI-powered automation for document
                  processing, data entry, and financial reconciliation.
                </p>
                <div
                  class="mt-4 flex items-center text-[#5B53FD] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span class="text-sm font-medium">Learn more</span>
                  <svg
                    class="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-[#0a0a0a]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span
            class="text-[#5B53FD] text-sm font-semibold tracking-wider uppercase mb-2 block"
            >Testimonials</span
          >
          <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
            See what our customers are saying about their experience with
            Akounto
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-[#0a0a0a] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 group"
          >
            <div class="flex items-center mb-6">
              <div class="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Mike Renwick"
                  class="w-14 h-14 rounded-full object-cover ring-4 ring-purple-50 group-hover:ring-purple-100 transition-all"
                />
                <div
                  class="absolute -bottom-1 -right-1 bg-[#5B53FD] text-white p-1 rounded-full"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.5 4.609q.468.234.937.503t.937.503l.626.313Q24 6.397 24 7.272v9.47q0 .874-1 1.343l-.626.313q-.468.235-.937.504t-.937.503q-.5.266-1 .516t-1 .516q-.5.265-1 .515t-1 .516Q15 22 14.5 22t-1-.532q-.5-.25-1-.515t-1-.516q-.5-.265-1-.515t-1-.516q-.5-.266-1-.516t-1-.516q-.469-.234-.938-.503t-.937-.504L5 17.554q-1-.469-1-1.343V7.27q0-.874 1-1.344l.625-.312Q6.094 5.38 6.562 5.112T7.5 4.61q.5-.266 1-.516t1-.515q.5-.266 1-.516t1-.516Q13 2 13.5 2t1 .547q.5.25 1 .516t1 .515q.5.266 1 .516t1 .516z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4
                  class="font-bold text-neutral-900 text-lg group-hover:text-[#5B53FD] transition-colors"
                >
                  Mike Renwick
                </h4>
                <p class="text-neutral-600">CEO, Scoreboard Enterprises</p>
              </div>
            </div>
            <div class="relative">
              <svg
                class="absolute -top-4 -left-2 w-8 h-8 text-[#5B53FD]/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.417 6.241c-.049-2.187-1.512-4.344-3.365-5.005-2.24-.802-5.036-.619-7.243.56-2.759 1.47-5.049 3.72-6.803 6.3C3.597 11.424 3.332 15.461 3.139 19.25c-.137 2.671 2.478 4.434 4.95 3.781 2.773-.736 5.498-1.505 7.889-3.239C18.426 17.986 20.252 15.383 21 12.304c.539-2.208.538-4.363.417-6.063zM9.86 18.544c-.048.062-.095.124-.145.185-1.171 1.424-2.342 2.847-3.513 4.272-.19.231-.494.055-.436-.222.222-1.06.445-2.121.668-3.181.038-.182-.167-.332-.315-.199C4.799 20.358 3.53 20.971 2.08 21.087c-.187.015-.249-.243-.107-.338C4.891 18.827 7.91 16.907 9.86 14.01c1.575-2.329 1.161-5.965 2.109-8.592.126-.348.494-.056.397.187-.628 1.573-.814 3.245-.923 4.883-.103 1.537.052 3.084.831 4.466.948 1.682 3.002 3.088 4.859 3.898.239.105.103.525-.159.466-1.713-.387-3.425-.775-5.138-1.162-.244-.055-.205.284.032.293 1.312.047 2.683.074 3.916-.467.207-.091.406.169.234.324-1.77 1.591-4.066 2.374-6.158.238z"
                ></path>
              </svg>
              <p class="text-neutral-700 mb-6 leading-relaxed">
                "We found it to be the most robust piece of software that was
                super easy to install and train our employees. We got up and
                running on the first day! The automation features have saved us
                countless hours."
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex text-[#5B53FD]">★★★★★</div>
              <span class="text-sm text-neutral-500">Verified Customer</span>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-[#0a0a0a] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 group"
          >
            <div class="flex items-center mb-6">
              <div class="relative">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Sarah Chen"
                  class="w-14 h-14 rounded-full object-cover ring-4 ring-purple-50 group-hover:ring-purple-100 transition-all"
                />
                <div
                  class="absolute -bottom-1 -right-1 bg-[#5B53FD] text-white p-1 rounded-full"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.5 4.609q.468.234.937.503t.937.503l.626.313Q24 6.397 24 7.272v9.47q0 .874-1 1.343l-.626.313q-.468.235-.937.504t-.937.503q-.5.266-1 .516t-1 .516q-.5.265-1 .515t-1 .516Q15 22 14.5 22t-1-.532q-.5-.25-1-.515t-1-.516q-.5-.265-1-.515t-1-.516q-.5-.266-1-.516t-1-.516q-.469-.234-.938-.503t-.937-.504L5 17.554q-1-.469-1-1.343V7.27q0-.874 1-1.344l.625-.312Q6.094 5.38 6.562 5.112T7.5 4.61q.5-.266 1-.516t1-.515q.5-.266 1-.516t1-.516Q13 2 13.5 2t1 .547q.5.25 1 .516t1 .515q.5.266 1 .516t1 .516z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4
                  class="font-bold text-neutral-900 text-lg group-hover:text-[#5B53FD] transition-colors"
                >
                  Sarah Chen
                </h4>
                <p class="text-neutral-600">CFO, TechFlow Solutions</p>
              </div>
            </div>
            <div class="relative">
              <svg
                class="absolute -top-4 -left-2 w-8 h-8 text-[#5B53FD]/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.417 6.241c-.049-2.187-1.512-4.344-3.365-5.005-2.24-.802-5.036-.619-7.243.56-2.759 1.47-5.049 3.72-6.803 6.3C3.597 11.424 3.332 15.461 3.139 19.25c-.137 2.671 2.478 4.434 4.95 3.781 2.773-.736 5.498-1.505 7.889-3.239C18.426 17.986 20.252 15.383 21 12.304c.539-2.208.538-4.363.417-6.063zM9.86 18.544c-.048.062-.095.124-.145.185-1.171 1.424-2.342 2.847-3.513 4.272-.19.231-.494.055-.436-.222.222-1.06.445-2.121.668-3.181.038-.182-.167-.332-.315-.199C4.799 20.358 3.53 20.971 2.08 21.087c-.187.015-.249-.243-.107-.338C4.891 18.827 7.91 16.907 9.86 14.01c1.575-2.329 1.161-5.965 2.109-8.592.126-.348.494-.056.397.187-.628 1.573-.814 3.245-.923 4.883-.103 1.537.052 3.084.831 4.466.948 1.682 3.002 3.088 4.859 3.898.239.105.103.525-.159.466-1.713-.387-3.425-.775-5.138-1.162-.244-.055-.205.284.032.293 1.312.047 2.683.074 3.916-.467.207-.091.406.169.234.324-1.77 1.591-4.066 2.374-6.158.238z"
                ></path>
              </svg>
              <p class="text-neutral-700 mb-6 leading-relaxed">
                "The integration with QuickBooks is seamless, and the automated
                reconciliation has reduced our month-end closing time by 60%.
                The customer support team is incredibly responsive and helpful."
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex text-[#5B53FD]">★★★★★</div>
              <span class="text-sm text-neutral-500">Verified Customer</span>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="bg-[#0a0a0a] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 group"
          >
            <div class="flex items-center mb-6">
              <div class="relative">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="David Martinez"
                  class="w-14 h-14 rounded-full object-cover ring-4 ring-purple-50 group-hover:ring-purple-100 transition-all"
                />
                <div
                  class="absolute -bottom-1 -right-1 bg-[#5B53FD] text-white p-1 rounded-full"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.5 4.609q.468.234.937.503t.937.503l.626.313Q24 6.397 24 7.272v9.47q0 .874-1 1.343l-.626.313q-.468.235-.937.504t-.937.503q-.5.266-1 .516t-1 .516q-.5.265-1 .515t-1 .516Q15 22 14.5 22t-1-.532q-.5-.25-1-.515t-1-.516q-.5-.265-1-.515t-1-.516q-.5-.266-1-.516t-1-.516q-.469-.234-.938-.503t-.937-.504L5 17.554q-1-.469-1-1.343V7.27q0-.874 1-1.344l.625-.312Q6.094 5.38 6.562 5.112T7.5 4.61q.5-.266 1-.516t1-.515q.5-.266 1-.516t1-.516Q13 2 13.5 2t1 .547q.5.25 1 .516t1 .515q.5.266 1 .516t1 .516z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4
                  class="font-bold text-neutral-900 text-lg group-hover:text-[#5B53FD] transition-colors"
                >
                  David Martinez
                </h4>
                <p class="text-neutral-600">Owner, Global Trade Co.</p>
              </div>
            </div>
            <div class="relative">
              <svg
                class="absolute -top-4 -left-2 w-8 h-8 text-[#5B53FD]/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.417 6.241c-.049-2.187-1.512-4.344-3.365-5.005-2.24-.802-5.036-.619-7.243.56-2.759 1.47-5.049 3.72-6.803 6.3C3.597 11.424 3.332 15.461 3.139 19.25c-.137 2.671 2.478 4.434 4.95 3.781 2.773-.736 5.498-1.505 7.889-3.239C18.426 17.986 20.252 15.383 21 12.304c.539-2.208.538-4.363.417-6.063zM9.86 18.544c-.048.062-.095.124-.145.185-1.171 1.424-2.342 2.847-3.513 4.272-.19.231-.494.055-.436-.222.222-1.06.445-2.121.668-3.181.038-.182-.167-.332-.315-.199C4.799 20.358 3.53 20.971 2.08 21.087c-.187.015-.249-.243-.107-.338C4.891 18.827 7.91 16.907 9.86 14.01c1.575-2.329 1.161-5.965 2.109-8.592.126-.348.494-.056.397.187-.628 1.573-.814 3.245-.923 4.883-.103 1.537.052 3.084.831 4.466.948 1.682 3.002 3.088 4.859 3.898.239.105.103.525-.159.466-1.713-.387-3.425-.775-5.138-1.162-.244-.055-.205.284.032.293 1.312.047 2.683.074 3.916-.467.207-.091.406.169.234.324-1.77 1.591-4.066 2.374-6.158.238z"
                ></path>
              </svg>
              <p class="text-neutral-700 mb-6 leading-relaxed">
                "The real-time insights and financial forecasting capabilities
                have transformed how we make business decisions. The platform
                has grown with us as our business expanded internationally."
              </p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex text-[#5B53FD]">★★★★★</div>
              <span class="text-sm text-neutral-500">Verified Customer</span>
            </div>
          </div>
        </div>

        <!-- Additional Trust Indicators -->
        <div class="mt-16 text-center">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="p-4">
              <div class="text-3xl font-bold text-[#5B53FD] mb-2">98%</div>
              <p class="text-neutral-600">Customer Satisfaction</p>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-[#5B53FD] mb-2">24/7</div>
              <p class="text-neutral-600">Support Available</p>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-[#5B53FD] mb-2">15k+</div>
              <p class="text-neutral-600">Active Users</p>
            </div>
            <div class="p-4">
              <div class="text-3xl font-bold text-[#5B53FD] mb-2">4.9/5</div>
              <p class="text-neutral-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-neutral-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span
            class="text-[#5B53FD] text-sm font-semibold tracking-wider uppercase mb-2 block"
            >Pricing Plans</span
          >
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p class="text-lg text-[#525252] max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <!-- Pricing Toggle -->
        <div class="flex justify-center items-center mb-12">
          <span class="text-[#525252]">Monthly</span>
          <label class="mx-4 relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" v-model="isAnnual" />
            <div
              class="w-14 h-7 bg-[#5B53FD] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-[#0a0a0a] after:border-white/[0.08] after:border after:rounded-full after:h-6 after:w-6 after:transition-all"
            ></div>
          </label>
          <span class="text-[#525252]"
            >Annual <span class="text-[#5B53FD]">(Save 20%)</span></span
          >
        </div>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Starter Plan -->
          <div
            class="bg-neutral-800 rounded-xl p-8 hover:scale-105 transition-all duration-300 relative group"
          >
            <div class="absolute -top-3 left-4">
              <span
                v-if="true"
                class="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full"
                >Current Plan</span
              >
            </div>
            <div class="text-center mb-8">
              <h3 class="text-xl font-bold mb-4">Starter</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold">$29.99</span>
                <span class="text-[#525252]">/month</span>
              </div>
              <p class="text-[#525252]">
                Perfect for small businesses just getting started
              </p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>5 team members</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Up to 100 documents</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>QuickBooks sync</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Invoice & receipt extraction</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Auto matching</span>
              </li>
            </ul>
            <button
              class="w-full py-3 px-6 rounded-lg border border-[#5B53FD] text-[#5B53FD] hover:bg-[#5B53FD] hover:text-white transition-all duration-300 group-hover:shadow-lg"
            >
              Start Free Trial
            </button>
          </div>

          <!-- Basic Plan -->
          <div
            class="bg-[#5B53FD] rounded-xl p-8 hover:scale-105 transition-all duration-300 relative"
          >
            <div class="absolute -top-3 right-4">
              <span
                class="bg-[#0a0a0a] text-[#5B53FD] text-xs font-semibold px-3 py-1 rounded-full"
                >Popular</span
              >
            </div>
            <div class="text-center mb-8">
              <h3 class="text-xl font-bold mb-4">Basic</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold">$59.99</span>
                <span class="text-[#d4d4d8]">/month</span>
              </div>
              <p class="text-[#d4d4d8]">
                Ideal for growing businesses with moderate needs
              </p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>10 team members</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Up to 200 documents</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>QuickBooks sync</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Invoice & receipt extraction</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Advanced auto matching</span>
              </li>
            </ul>
            <button
              class="w-full py-3 px-6 rounded-lg bg-[#0a0a0a] text-[#5B53FD] hover:bg-neutral-100 transition-all duration-300"
            >
              Start Free Trial
            </button>
          </div>

          <!-- Pro Plan -->
          <div
            class="bg-neutral-800 rounded-xl p-8 hover:scale-105 transition-all duration-300 group"
          >
            <div class="text-center mb-8">
              <h3 class="text-xl font-bold mb-4">Pro</h3>
              <div class="mb-4">
                <span class="text-4xl font-bold">$99.99</span>
                <span class="text-[#525252]">/month</span>
              </div>
              <p class="text-[#525252]">
                For established businesses requiring advanced features
              </p>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>15 team members</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Up to 500 documents</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Priority QuickBooks sync</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Advanced document processing</span>
              </li>
              <li class="flex items-center gap-3">
                <svg
                  class="w-5 h-5 text-[#5B53FD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Custom automations</span>
              </li>
            </ul>
            <button
              class="w-full py-3 px-6 rounded-lg border border-[#5B53FD] text-[#5B53FD] hover:bg-[#5B53FD] hover:text-white transition-all duration-300 group-hover:shadow-lg"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <!-- Enhanced background effect -->
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl -z-10"
        ></div>
        <div class="absolute inset-0 bg-[#5B53FD]/5 mix-blend-multiply"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="relative">
            <span
              class="text-[#5B53FD] text-sm font-semibold tracking-wider uppercase mb-4 block"
              >Get Started Today</span
            >
            <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Ready to Transform Your Financial Management?
            </h2>
            <p class="text-lg text-neutral-600 mb-8 leading-relaxed">
              Join thousands of businesses already using Akounto to streamline
              their financial operations. Start your 14-day free trial today.
            </p>

            <!-- Enhanced feature list -->
            <div class="space-y-6 mb-8">
              <div
                class="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-[#5B53FD]/10 rounded-lg flex items-center justify-center group-hover:bg-[#5B53FD]/20 transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-[#5B53FD]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <span class="text-neutral-700 font-medium"
                  >No credit card required</span
                >
              </div>

              <div
                class="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-[#5B53FD]/10 rounded-lg flex items-center justify-center group-hover:bg-[#5B53FD]/20 transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-[#5B53FD]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span class="text-neutral-700 font-medium"
                  >Full access to all features</span
                >
              </div>

              <div
                class="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors group"
              >
                <div
                  class="w-10 h-10 bg-[#5B53FD]/10 rounded-lg flex items-center justify-center group-hover:bg-[#5B53FD]/20 transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-[#5B53FD]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <span class="text-neutral-700 font-medium"
                  >Free onboarding support</span
                >
              </div>
            </div>

            <!-- Call-to-action button -->
            <button
              class="bg-[#5B53FD] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4A43E8] transition-colors shadow-lg shadow-[#5B53FD]/20 hover:shadow-xl hover:shadow-[#5B53FD]/30"
            >
              Start Free Trial
            </button>
          </div>

          <!-- Right Image -->
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-[#5B53FD] to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"
            ></div>
            <div class="relative">
              <img
                src="https://www.tradifyhq.com/hs-fs/hubfs/Free%20trial%20cta%20image.png"
                alt="Dashboard Preview"
                class="w-full rounded-xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
              <!-- Enhanced info card -->
              <div
                class="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/20"
              >
                <div class="flex items-center gap-6">
                  <img
                    src="https://dms.mydukaan.io/original/webp/media/f7e2f9be-02aa-4b58-bea2-b01212755db9.svg"
                    alt="Logo"
                    class="w-14 h-14"
                  />
                  <div>
                    <h4 class="font-semibold text-neutral-900 text-lg">
                      Start your journey today
                    </h4>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-neutral-600">Join</span>
                      <span class="font-medium text-[#5B53FD]">10,000+</span>
                      <span class="text-neutral-600">satisfied customers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-neutral-900 text-white pt-20 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-neutral-800"
        >
          <!-- Company Info -->
          <div class="lg:col-span-2 space-y-6">
            <img
              src="https://dms.mydukaan.io/original/webp/media/bc3d6fea-c943-4aac-bcac-82641be3a021.svg"
              alt="Akounto Logo"
              class="h-8"
            />
            <p class="text-[#525252] leading-relaxed">
              Streamline your financial operations with our comprehensive
              management platform. Automate processes, gain insights, and grow
              your business.
            </p>

            <!-- Social Links -->
            <div class="flex space-x-4 pt-2">
              <a href="#" class="group">
                <div
                  class="w-10 h-10 rounded-lg bg-[#5B53FD]/10 flex items-center justify-center hover:bg-[#5B53FD] transition-colors"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="h-5 w-5 text-[#5B53FD] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="#" class="group">
                <div
                  class="w-10 h-10 rounded-lg bg-[#5B53FD]/10 flex items-center justify-center hover:bg-[#5B53FD] transition-colors"
                >
                  <span class="sr-only">LinkedIn</span>
                  <svg
                    class="h-5 w-5 text-[#5B53FD] group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>

            <!-- Newsletter Signup -->
            <div class="pt-4">
              <h4 class="text-sm font-semibold text-white mb-3">
                Stay updated
              </h4>
              <div class="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="bg-neutral-800 text-white px-4 py-2 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-[#5B53FD] transition-shadow"
                />
                <button
                  class="bg-[#5B53FD] text-white px-4 py-2 rounded-lg hover:bg-[#4A43E8] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <!-- Quick Links Columns -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Product</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-[#525252] hover:text-[#5B53FD] transition-colors inline-flex items-center group"
                >
                  <span>Features</span>
                  <svg
                    class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-[#525252] hover:text-[#5B53FD] transition-colors inline-flex items-center group"
                >
                  <span>Pricing</span>
                  <svg
                    class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <!-- Repeat similar structure for other links -->
            </ul>
          </div>

          <!-- Resources Column -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Resources</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-[#525252] hover:text-[#5B53FD] transition-colors inline-flex items-center group"
                >
                  <span>Documentation</span>
                  <svg
                    class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <!-- Repeat similar structure for other links -->
            </ul>
          </div>

          <!-- Company Column -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold">Company</h3>
            <ul class="space-y-3">
              <li>
                <a
                  href="#"
                  class="text-[#525252] hover:text-[#5B53FD] transition-colors inline-flex items-center group"
                >
                  <span>About</span>
                  <svg
                    class="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
              <!-- Repeat similar structure for other links -->
            </ul>
          </div>
        </div>

        <!-- Bottom Section -->
        <div
          class="pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div
            class="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0"
          >
            <a
              href="#"
              class="text-sm text-[#525252] hover:text-[#5B53FD] transition-colors"
              >Terms of Service</a
            >
            <a
              href="#"
              class="text-sm text-[#525252] hover:text-[#5B53FD] transition-colors"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-sm text-[#525252] hover:text-[#5B53FD] transition-colors"
              >Cookie Policy</a
            >
          </div>
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            ></span>
            <p class="text-sm text-[#525252]">
              © 2024 Akounto. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Any necessary Vue logic can go here
definePageMeta({
  layout: "blank",
});
</script>

<style>
/* Base styles */
* {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

/* You can add more styles here */
</style>
<!-- End of Selection -->
