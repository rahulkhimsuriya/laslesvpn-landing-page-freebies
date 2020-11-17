<template>
  <li class="flex items-center">
    <div>
      <slot name="icon"></slot>
    </div>

    <div class="ml-4">
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItems'
}
</script>

<style scoped></style>
