<template>
  <div class="flex items-center justify-center">
    <div>
      <slot name="icon"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroCard'
}
</script>

<style scoped></style>
