<template>
  <v-card
      height=auto
      width="264"
  >
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      width="264"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Sair
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template><script>
  export default {
    data () {
      return {
        items: [
          { title: 'Início', icon: 'mdi-view-dashboard', to:'/inicio'},
          { title: 'Machos', icon: 'mdi-gender-male' },
          { title: 'Fêmeas', icon: 'mdi-gender-female' },
          { title: 'Agenda', icon: 'mdi-calendar-month-outline'}
        ],
      }
    },
  }
</script>

