<template>
  <div
    class="pt-20 pb-8 px-8 flex flex-shrink-0 flex-col items-center border-2 border-gray-400 hover:border-red-300 rounded-lg"
  >
    <div class="flex flex-1 flex-col items-center">
      <div class="flex flex-col items-center justify-center">
        <img class="h-24" :src="plan.image" :alt="plan.name" />

        <h6 class="mt-8 text-base font-semibold text-gray-900">
          {{ plan.name }}
        </h6>
      </div>

      <List class="mt-8 space-y-2">
        <ListItem
          class="text-xs font-normal text-gray-600"
          v-for="(feature, index) in plan.features"
          :key="index"
        >
          <span class="mr-4">
            <svg
              class="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>

          {{ feature }}
        </ListItem>
      </List>
    </div>

    <div class="mt-12 flex flex-col items-center justify-center">
      <slot name="footer">
        <h5 class="text-xl font-semibold text-gray-900">{{ plan.price }}</h5>

        <BaseButton class="mt-4 px-12" type="ghost">Select</BaseButton>
      </slot>
    </div>
  </div>
</template>

<script>
import List from './List'
import ListItem from './ListItem'
import BaseButton from './BaseButton'

export default {
  name: 'PlanCard',

  props: {
    plan: {
      type: Object,
      required: true
    }
  },

  components: {
    List,
    ListItem,
    BaseButton
  }
}
</script>

<style scoped></style>
