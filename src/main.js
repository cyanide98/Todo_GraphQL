import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './apollo'
import './registerServiceWorker'
import './vuetify'
import auth from '@/auth'
import Vue from 'vue'
import AuthPlugin from "./plugins/auth";

Vue.use(AuthPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
