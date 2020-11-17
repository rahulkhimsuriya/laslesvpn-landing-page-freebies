<template>
  <a
    :href="to"
    class="inline-block text-sm text-gray-600 font-normal tracking-wide hover:text-red-600 transition-all ease-in-out duration-300 cursor-pointer"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'BaseLink',

  props: {
    to: {
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
