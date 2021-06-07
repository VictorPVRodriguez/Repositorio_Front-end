import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
    info: [],
    favoritos:[],
    user: null
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    marcaFavoritos(state, item){
      state.favoritos = [item, ...state.favoritos]
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    desmarcaFavoritos(state, index){
      state.favoritos.splice(index,1)
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    carregaInfo(state, item){
      state.info = item
    },
    iniciaFavoritos(state, lista){
      state.favoritos = lista
    }
  },
  actions: {
    loadCha({ commit }){
      let resultados = []
      let breeds = []
      let LoadInfo = (query) => {
          return axios.get('https://rickandmortyapi.com/api/character/?name='+query)
          .then(
            res => res.data.message
          )
      }
      let infoLocalStorage = localStorage.getItem('infoLocal')
      if(!infoLocalStorage){
        axios.get('')
        .then(
          res => {
            return res.data.results
          }
        )
        .then(
            res => {
                breeds=[...Object.keys(res)]
                return [...Object.keys(res)]
            }
        )
        .then(
            res => {
                return axios.all([...res.map(x=>LoadInfo(x))])
            }
        )
        .then(
            res => {
                for(let [index, item] of res.entries()){
                    resultados.push(
                        {
                            'name': breeds[index],
                            'photo': item
                        }
                    )
                }
                return resultados
            }
        )
        .then(
          res => {
            commit('loadCha', resultados)
            localStorage.setItem('infoLocal', JSON.stringify(res))
          }
        )
      } else {  
        commit('loadCha', JSON.parse(infoLocalStorage))
      }
    },
    loadCha({commit}){
      const favoritoLocalStorage = localStorage.getItem('favoritoLocal')
      if(!favoritoLocalStorage){
        localStorage.setItem('favoritoLocal', '[]')
      }else{
        commit('iniciaFavoritos', JSON.parse(favoritoLocalStorage))
      }
    }
  },
  modules: {
  }
})
