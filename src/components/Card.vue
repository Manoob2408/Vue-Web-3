<template>
<v-row>
    <Drawer/>
    <v-col
        v-for="dog in dogs"
          :key="dog.nome"
        cols="3"
          >

        <v-card
            :loading="loading"
            max-width="374"
        >
            <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
            </template>

            <v-img
            height="250"
            :src="require(`../assets/images/Dog-${dog.imagem}.jpg`)"
            
            ></v-img>

            <v-card-title>{{dog.nome}}</v-card-title>

            <v-card-text>
            <div>
                Peso: {{dog.peso}}<br>
                Idade: {{dog.idade}}
            </div>
            <div>{{dog.frequencia}}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Horários Agendados</v-card-title>

            <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
            </v-chip-group>
            </v-card-text>

            <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="cancelar"
            >
                Cancelar
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</v-row>

 
</template>

<script>
import Drawer from './Drawer';
import Store from '../store'

  export default {

      components: {
        Drawer
    },
    data: () => ({
      loading: false,
      selection: 1,
      dogs: Store.state.dogs
    }),

    methods: {
      cancelar () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },

    },
  }
</script>