import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import Router from 'vue-router'
import routes from './routes';

Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
