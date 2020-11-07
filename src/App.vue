<template>
  <div id="app" class="bg-white container px-4 mx-auto">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
/* Tailwind CSS */
@import './assets/css/tailwind.css';
</style>
