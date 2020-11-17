<template>
  <div>
    <h3
      class="text-3xl text-gray-800 font-semibold leading-tight tracking-wide"
    >
      {{ title }}
    </h3>

    <p
      class="mt-6 text-sm text-gray-600 font-normal leading-normal tracking-wide"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SeactionHeader',

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
