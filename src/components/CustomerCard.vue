<template>
  <div class="p-4 flex flex-col rounded-lg shadow">
    <div class="flex items-center flex-shrink-0 justify-between">
      <div class="flex items-center justify-center">
        <img
          class="h-8 w-8 rounded-full"
          :src="customer.image"
          :alt="customer.name"
        />

        <div class="ml-2">
          <h6 class="text-sm font-bolt">{{ customer.name }}</h6>
          <p class="text-xs text-gray-600">{{ customer.location }}</p>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-2">
        <span class="text-xs text-gray-800">{{ customer.star }}</span>
        <span>
          <svg
            class="w-4 h-4 text-orange-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        </span>
      </div>
    </div>

    <div class="mt-4 flex-1 text-xs text-gray-800">
      {{ customer.quote }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerCard',

  props: {
    customer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.flickity-prev-next-button .flickity-button-icon {
  color: #e53e3e;
}

.dot.is-selected {
  background: #e53e3e;
}
</style>
