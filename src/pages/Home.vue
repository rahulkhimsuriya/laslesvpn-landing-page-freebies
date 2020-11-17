<template>
  <div class="w-full">
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
          <HeroCard
            class="w-1/3 h-24"
            v-for="(item, idx) in heroItems"
            :key="idx"
          >
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

    <section class="mt-12 w-full flex items-center justify-between">
      <div class="w-1/2">
        <img src="../assets/images/illustration_02.svg" alt="Feature" />
      </div>

      <div class="w-1/2 px-24">
        <SeactionHeader
          title="We Provide Many Features You Can Use"
          subtitle="You can explore the features that we provide with fun and have their own functions each feature."
        />

        <List class="mt-8 space-y-4">
          <ListItem
            class="text-sm font-medium text-gray-600 leading-none tracking-wider"
            v-for="feature in featuresList"
            :key="feature"
          >
            <template #icon>
              <svg
                class="w-6 h-6 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </template>
            {{ feature }}
          </ListItem>
        </List>
      </div>
    </section>

    <section class="mt-16 w-full">
      <div class="text-center flex items-center justify-center">
        <SeactionHeader
          title="Choose Your Plan"
          subtitle="Let's choose the package that is best for you and explore it happily and cheerfully."
        />
      </div>

      <div class="mt-10 grid grid-cols-3 gap-24">
        <PlanCard v-for="(plan, index) in plans" :key="index" :plan="plan">
          <template #footer>
            <h5 class="text-xl font-semibold text-gray-900">
              {{ plan.price }}
              <span
                class="font-light text-gray-700"
                v-if="plan.price != 'Free'"
              >
                /mo
              </span>
            </h5>

            <BaseButton class="mt-4 px-12" type="ghost">Select</BaseButton>
          </template>
        </PlanCard>
      </div>
    </section>
  </div>
</template>

<script>
import HeroCard from '@/components/HeroCard'
import UserIcon from '@/assets/images/user.svg'
import ServerIcon from '@/assets/images/server.svg'
import LocationIcon from '@/assets/images/location.svg'
import SeactionHeader from '@/components/SeactionHeader'
import List from '@/components/List'
import ListItem from '@/components/ListItem'
import PlanCard from '@/components/PlanCard'
import PlanImage from '@/assets/images/plan.svg'

export default {
  name: 'Home',

  components: {
    HeroCard,
    SeactionHeader,
    List,
    ListItem,
    PlanCard
  },

  data() {
    return {
      heroItems: [
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
      ],
      featuresList: [
        'Powerfull online protection.',
        'Internet without borders.',
        'Supercharged VPN',
        'No specific time limits.'
      ],
      plans: [
        {
          name: 'Free Plan',
          image: PlanImage,
          price: 'Free',
          features: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices'
          ]
        },
        {
          name: 'Standard Plan',
          image: PlanImage,
          price: '$9',
          features: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
            'Connect Anyware'
          ]
        },
        {
          name: 'Premium Plan',
          image: PlanImage,
          price: '$12',
          features: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
            'Connect Anyware',
            'Get New Features'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>
