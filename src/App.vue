<template>
  <v-app>
    <v-main>
      <Topbar/>
      <v-main>
        <Card/>
      </v-main>

      
      
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
