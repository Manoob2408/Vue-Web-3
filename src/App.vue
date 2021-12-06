<template>
  <v-app>
    <Topbar/>
    <Card/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Topbar from './components/Topbar';
import Card from './components/Card';

export default {
  name: 'App',

  components: {
    Topbar,
    Card,
  },

  data: () => ({
    //
  }),
};
</script>
