<template>
  <div class="w-full">
    <BaseSection class="pt-8">
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
    </BaseSection>

    <BaseSection class="mt-12 w-full flex items-center justify-between">
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
    </BaseSection>

    <BaseSection class="mt-16 w-full">
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
    </BaseSection>

    <BaseSection class="mt-24 w-full">
      <div class="text-center flex items-center justify-center">
        <SeactionHeader title="Huge Global Network of Fast VPN">
          <template #subtitle>
            See <strong>LaslesVPN</strong> everywhere to make it easier for you
            when you move locations
          </template>
        </SeactionHeader>
      </div>

      <div class="mt-12">
        <img
          class="mx-auto"
          src="@/assets/images/huge_global.svg"
          alt="Huge Global"
        />
      </div>

      <div class="mt-8 flex items-center justify-between">
        <div
          class="opacity-50"
          v-for="(partner, index) in partners"
          :key="index"
        >
          <img
            :src="partner.image"
            :alt="partner.name"
            style="filter:  grayscale(100%)"
          />
        </div>
      </div>
    </BaseSection>

    <BaseSection class="mt-16 w-full">
      <div class="text-center flex items-center justify-center">
        <SeactionHeader
          title="Trusted by Thousands of Happy Customer"
          subtitle="These are the stories of our customers who have joined us with great pleasure when using this crazy feature."
        />
      </div>

      <div class="mt-12">
        <Slider :options="sliderOptions">
          <CustomerCard
            class="mx-6 w-1/3 h-48 border hover:border-red-400"
            v-for="(customer, index) in customers"
            :key="index"
            :customer="customer"
          />
        </Slider>
      </div>
    </BaseSection>

    <BaseSection
      class="relative bg-white mt-16 px-16 py-12 flex items-center justify-between w-full shadow-lg rounded-lg z-40"
    >
      <SeactionHeader
        title="Subscribe Now for Get Special Features!"
        subtitle="Let's subscribe with us and find the fun."
      />

      <BaseButton>Subscribe Now</BaseButton>
    </BaseSection>

    <footer class="relative -mt-24 pt-40 pb-20 bg-gray-100 w-full z-10">
      <div class="container px-4 mx-auto flex">
        <div class="max-w-sm flex-shrink-0">
          <div>
            <img src="../assets/logo.svg" alt="logo" />
            <p class="mt-4 text-sm text-gray-600">
              <strong>LaslesVPN</strong> is a private virtual network that has
              unique features and has high security.
            </p>
          </div>

          <ul class="mt-8 flex items-center space-x-2">
            <li>
              <span class="p-2 inline-block bg-white rounded-full shadow-lg">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  class="h-4 w-4 text-red-600"
                  fill="currentColor"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </span>
            </li>
            <li>
              <span class="p-2 inline-block bg-white rounded-full shadow-lg">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  class="h-4 w-4 text-red-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </span>
            </li>
            <li>
              <span class="p-2 inline-block bg-white rounded-full shadow-lg">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="h-4 w-4 text-red-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </span>
            </li>
          </ul>

          <p class="mt-4 text-xs text-gray-600 leading-none tracking-wide">
            <span>©2020</span><span>LaslesVPN</span>
          </p>
        </div>

        <div class="flex flex-1 justify-end space-x-16">
          <List class="space-y-2">
            <ListItem class="text-sm font-bold text-gray-800">Product</ListItem>
            <ListItem><BaseLink to="#">Donwload</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Pricing</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Locations</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Server</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Countries</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Blog</BaseLink></ListItem>
          </List>

          <List class="space-y-2">
            <ListItem class="text-sm font-bold text-gray-800">Engage</ListItem>
            <ListItem><BaseLink to="#">LaslesVPN?</BaseLink></ListItem>
            <ListItem><BaseLink to="#">FAQ</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Tutorials</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Aboout Us</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Privacy Policy</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Terms of Service</BaseLink></ListItem>
          </List>

          <List class="flex flex-col space-y-2">
            <ListItem class="text-sm font-bold text-gray-800"
              >Earn Money</ListItem
            >
            <ListItem><BaseLink to="#">Affiliate</BaseLink></ListItem>
            <ListItem><BaseLink to="#">Become Partner</BaseLink></ListItem>
          </List>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BaseSection from '@/components/BaseSection'
import HeroCard from '@/components/HeroCard'
import UserIcon from '@/assets/images/user.svg'
import ServerIcon from '@/assets/images/server.svg'
import LocationIcon from '@/assets/images/location.svg'
import SeactionHeader from '@/components/SeactionHeader'
import List from '@/components/List'
import ListItem from '@/components/ListItem'
import PlanCard from '@/components/PlanCard'
import PlanImage from '@/assets/images/plan.svg'
import NetflixIcon from '@/assets/images/netflix.svg'
import RedditIcon from '@/assets/images/reddit.svg'
import AmazonIcon from '@/assets/images/amazon.svg'
import DiscordIcon from '@/assets/images/discord.svg'
import SpotifyIcon from '@/assets/images/spotify.svg'
import Slider from '@/components/Slider'
import CustomerCard from '@/components/CustomerCard'
import BaseButton from '@/components/BaseButton'
import BaseLink from '@/components/BaseLink'

export default {
  name: 'Home',

  components: {
    BaseSection,
    HeroCard,
    SeactionHeader,
    List,
    ListItem,
    PlanCard,
    Slider,
    CustomerCard,
    BaseButton,
    BaseLink
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
      ],
      partners: [
        { name: 'Netflix', image: NetflixIcon },
        { name: 'Reddit', image: RedditIcon },
        { name: 'Amazon', image: AmazonIcon },
        { name: 'Discord', image: DiscordIcon },
        { name: 'Sportify', image: SpotifyIcon }
      ],
      sliderOptions: { freeScroll: true, wrapAround: true, contain: true },
      customers: [
        {
          name: 'Viezh Robert',
          image: 'https://randomuser.me/api/portraits/men/42.jpg',
          location: 'Warsaw, Poland',
          star: '4.5',
          quote:
            '“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'
        },
        {
          name: 'Yessica Christy',
          image: 'https://randomuser.me/api/portraits/women/84.jpg',
          location: 'Shanxi, China',
          star: '4.5',
          quote:
            '“I like it because I like to travel far and still can connect with high speed.”.'
        },
        {
          name: 'Kim Young Jou',
          image: 'https://randomuser.me/api/portraits/men/64.jpg',
          location: 'Warsaw, Poland',
          star: '4.5',
          quote:
            '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
