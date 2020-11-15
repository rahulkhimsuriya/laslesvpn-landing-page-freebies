<template>
  <div id="app" class="bg-white container px-4 mx-auto">
    <Navbar />
    <HeroSection />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection
  }
}
</script>

<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

/* Tailwind CSS */
@import './assets/css/tailwind.css';
</style>
