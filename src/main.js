import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory } from 'vue-router'
//import Router from 'vue-router'
import routes from './routes'

loadFonts()

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

/*const router = new Router({
  mode: 'history',
  routes
});*/

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
