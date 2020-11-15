import Vue from 'vue'
import App from './App.vue'

import BaseButton from './components/BaseButton'
Vue.component('BaseButton', BaseButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
