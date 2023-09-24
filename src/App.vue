<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

          <v-list-item v-for="item in itemsDrawer" :key="item.title" @click="goToPage(item.name)" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="deep-purple" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>

    <!-- <v-footer color="indigo" app>
      <span class="white--text">&copy; App</span>
    </v-footer> -->

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  watch: {

    group() {
      this.drawer = false
    },
  },
  methods: {

    goToPage(pageName) {
      console.log("pageName ", pageName);
      this.$router.push({ name: pageName });
      //this.$router.push("/home");
    }

  },

  data() {
    return {
      drawer: false,
      mode: false,
      items: [
        {
          route: '/',
          title: 'Home',
          name: 'Home'
        }
      ],
      group: null,
      itemsDrawer: [
        { title: 'Home', name: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'Account', icon: 'mdi-account-box' },
        { title: 'Payment', icon: 'mdi-credit-card-outline' },
        { title: 'Settings', icon: 'mdi-cog' },
      ]
    }
  }
};
</script>

<!--
<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
-->