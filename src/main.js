import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import { addMockAxiosEndpoints } from '@/proto';

Vue.config.productionTip = false

if (process.env.VUE_APP_USE_MOCK_API) {
  // setup fake backend
  addMockAxiosEndpoints()
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
