import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dogs: [
            {nome: 'Chico', frequencia: '2 semanas', peso: '3.5kg', idade: '6 anos', nome_dono: 'Daniel', imagem: '1'},
            {nome: 'Dora', frequencia: '2 semanas', peso: '5.3kg', idade: '3 anos', nome_dono: 'Isabella', imagem: '2'},
            {nome: 'Bento', frequencia: '1 semana', peso: '1.5kg', idade: '6 meses', nome_dono: 'Rebecca', imagem: '3'},
            {nome: 'Otavio', frequencia: '3 semanas', peso: '3.5kg', idade: '2 anos', nome_dono: 'Francisco', imagem: '4'},
            {nome: 'Fifi', frequencia: '4 semanas', peso: '0.5kg', idade: '5 anos', nome_dono: 'Lara', imagem: '5'}
        ],
    },
    mutations: {
        SET_EVENTS(state, payload){
            state.events = payload
        }
    },
    actions: {
        fetchEvents({commit}){
            console.log("fetchEvents")
            Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => {
                    const payload = response.data.bpi
                    console.log(payload)
                    commit('SET_EVENTS',payload)
                })
            .catch(error=>{console.log(error)})
        }
    },
    getters: {
        bigTitle(state){
            return state.title.toUpperCase()
        }
    }
  })