<template>
  <nav class="py-4 flex items-center justify-between">
    <div>
      <img class="h-8 w-auto" :src="logo" alt="laslesVPN Logo" />
    </div>

    <ul class="flex items-center space-x-8">
      <li
        class="text-sm text-gray-600 font-normal tracking-wide hover:text-red-600 cursor-pointer"
      >
        About
      </li>
      <li
        class="text-sm text-gray-600 font-normal tracking-wide hover:text-red-600 cursor-pointer"
      >
        Features
      </li>
      <li
        class="text-sm text-gray-600 font-normal tracking-wide hover:text-red-600 cursor-pointer"
      >
        Pricing
      </li>
      <li
        class="text-sm text-gray-600 font-normal tracking-wide hover:text-red-600 cursor-pointer"
      >
        Testimonials
      </li>
      <li
        class="text-sm text-gray-600 font-normal tracking-wide hover:text-red-600 cursor-pointer"
      >
        Help
      </li>
    </ul>

    <div class="flex space-x-6">
      <button
        class="text-sm leading-normal tracking-wide font-semibold text-gray-800 hover:text-red-600 transition duration-500 ease-in-out"
      >
        Sign In
      </button>
      <button
        class="px-6 py-2 text-sm leading-normal tracking-wide font-semibold text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-500 ease-in-out rounded-full"
      >
        Sign Up
      </button>
    </div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.svg'

export default {
  name: 'Navbar',
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped></style>
