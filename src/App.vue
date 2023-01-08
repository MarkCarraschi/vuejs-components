<template>
  <v-app>
    <Drawer :drawer.sync="drawer"></Drawer>
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

    <v-footer color="indigo" app>
      <span class="white--text">&copy; App</span>
    </v-footer>

    <!-- <v-main>
      <HelloWorld />
    </v-main> -->

  </v-app>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld';
import Drawer from '@/components/Drawer';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Drawer
  },

  watch: {
    drawer: {
      handler: function (value) {

        this.$nextTick(() => {
          try {
            if (value) {
              document.querySelector('.v-overlay').addEventListener('click', this.handler)
            } else {
              document.querySelector('.v-overlay').removeEventListener('click', this.handler)
            }
          } catch (e) {
            // do nothing
          }
        })

      }
    }
  },
  methods: {
    handler() {
      this.drawer = false
    }
  },

  data() {
    return {
      drawer: false,
      mode: false,
      items: [
        {
          route: '/',
          title: 'Home'
        },
        {
          route: '/second',
          title: 'Second'
        },
        {
          route: '/third',
          title: 'Third'
        },
        {
          route: '/fourth',
          title: 'Fourth'
        }
      ]
    }
  }
};
</script>