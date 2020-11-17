<template>
  <div class="main-carousel w-full">
    <slot />
  </div>
</template>

<script>
import Flickity from 'flickity'
import 'flickity/css/flickity.css'

export default {
  name: 'Slider',

  props: {
    options: {
      type: Object
    }
  },

  mounted() {
    new Flickity(this.$el, this.options)
  }
}
</script>

<style scoped></style>
