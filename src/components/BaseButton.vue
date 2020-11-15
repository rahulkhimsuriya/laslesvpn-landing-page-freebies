<template>
  <button
    class="text-sm leading-normal tracking-wide font-semibold transition duration-500 ease-in-out"
    :class="classes"
  >
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    classes() {
      let type = {
        link: 'text-gray-800 hover:text-red-600',
        ghost:
          'px-6 py-2 text-red-600 border border-red-600 hover:bg-red-600 hover:text-white rounded-full',
        default:
          'px-6 py-2 text-white bg-red-600 hover:bg-red-500 rounded-lg shadow-primary hover:shadow-none'
      }
      return type[this.type]
    }
  }
}
</script>

<style lang="scss" scoped></style>
