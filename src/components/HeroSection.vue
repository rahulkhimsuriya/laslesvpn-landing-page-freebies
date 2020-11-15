<template>
  <section class="pt-8">
    <div class=" flex gap-8 items-center">
      <div class="w-1/2">
        <h2
          class="text-4xl font-semibold leading-tight tracking-wider text-gray-900"
        >
          Want anything to be <br />
          easy with LaslesVPN.
        </h2>
        <p class="mt-4 text-sm leading-snug tracking-wide text-gray-600">
          Provide a network for all your needs with ease and fun using
          <strong>LaslesVPN</strong><br />
          discover interesting features from us.
        </p>
        <BaseButton class="mt-6 px-12">Get Started</BaseButton>
      </div>
      <div class="w-1/2">
        <img src="../assets/images/illustration_01.svg" alt="Hero Image" />
      </div>
    </div>

    <div class="mt-8 py-6 w-full rounded-lg shadow-lg">
      <div class="flex items-center justify-around divide-x-2">
        <HeroCard class="w-1/3 h-24" v-for="(item, idx) in items" :key="idx">
          <template #icon>
            <div class="p-2 text-white bg-red-200 rounded-full">
              <img class="h-4 w-4 text-red-200" :src="item.icon" alt="icon" />
            </div>
          </template>

          <div class="ml-6">
            <h4 class="text-lg text-gray-800 font-bold tracking-wider">
              {{ item.title }}
            </h4>
            <p class="text-sm text-gray-600 font-medium tracking-wider">
              {{ item.subtitle }}
            </p>
          </div>
        </HeroCard>
      </div>
    </div>
  </section>
</template>

<script>
import HeroCard from './HeroCard'
import UserIcon from '@/assets/images/user.svg'
import ServerIcon from '@/assets/images/server.svg'
import LocationIcon from '@/assets/images/location.svg'

export default {
  name: 'HeroSection',

  components: {
    HeroCard
  },

  data() {
    return {
      icon: UserIcon,
      items: [
        {
          icon: UserIcon,
          title: '90+',
          subtitle: 'Users'
        },
        {
          icon: LocationIcon,
          title: '30+',
          subtitle: 'Locations'
        },
        {
          icon: ServerIcon,
          title: '50+',
          subtitle: 'Servers'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
