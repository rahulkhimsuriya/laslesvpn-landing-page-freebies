<template>
  <div id="app" class="bg-white">
    <header class="container px-4 mx-auto">
      <Navbar />
    </header>

    <main>
      <Home />
    </main>
  </div>
</template>

<script>
import Home from '@/pages/Home'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Home,
    Navbar
  }
}
</script>

<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');

/* Tailwind CSS */
@import './assets/css/tailwind.css';
</style>
