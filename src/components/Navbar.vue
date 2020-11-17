<template>
  <nav class="py-4 flex items-center justify-between">
    <div>
      <img class="h-8 w-auto" :src="logo" alt="laslesVPN Logo" />
    </div>

    <List class="flex items-center space-x-8">
      <ListItem><BaseLink to="#">About</BaseLink></ListItem>
      <ListItem><BaseLink to="#">Features</BaseLink></ListItem>
      <ListItem><BaseLink to="#">Pricing</BaseLink></ListItem>
      <ListItem><BaseLink to="#">Testimonials</BaseLink></ListItem>
      <ListItem><BaseLink to="#">Help</BaseLink></ListItem>
    </List>

    <div class="flex space-x-6">
      <BaseButton type="link">Sign In</BaseButton>
      <BaseButton type="ghost">Sign Up</BaseButton>
    </div>
  </nav>
</template>

<script>
import logo from '@/assets/logo.svg'
import List from './List'
import ListItem from './ListItem'
import BaseLink from './BaseLink'

export default {
  name: 'Navbar',

  components: {
    List,
    ListItem,
    BaseLink
  },

  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped></style>
