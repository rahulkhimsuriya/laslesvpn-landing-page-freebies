<template>
  <div class="max-w-sm">
    <h3
      class="text-3xl text-gray-800 font-semibold leading-tight tracking-wide"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </h3>

    <p
      class="mt-6 text-sm text-gray-600 font-normal leading-normal tracking-wide"
    >
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SeactionHeader',

  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    }
  }
}
</script>

<style scoped></style>
