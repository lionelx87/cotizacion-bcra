<template>
  <v-app>
    <v-app-bar app color="purple" dark>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" id="logo">
          <span>Cotización</span>
          <span class="font-weight-light"> BCRA</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <router-link :to="{ name: 'cotizacion' }">
              <v-btn icon v-on="on">
                <v-icon size="30">attach_money</v-icon>
              </v-btn>
            </router-link>
          </template>
          <span>Cotización</span>
      </v-tooltip>

      <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click.stop="showDialog">
              <v-icon size="30">emoji_objects</v-icon>
            </v-btn>          
          </template>
          <span>Info</span>
      </v-tooltip>

    </v-app-bar>

    <About />

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

import About from './components/About'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    About
  },
  data: () => ({
    
  }),
  methods: {
    ...mapMutations(['showDialog'])
  }
};
</script>

<style>
  a{
    text-decoration: none;
  }
  #logo{    
    color: white; 
  }
</style>
