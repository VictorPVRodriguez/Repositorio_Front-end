<template>
  <div class="episodes">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search">
    <button @click="loadEpisodes(search)">Search</button>
    <div v-for="(item,index) in resultados" :key="index">
      <h3>{{item.episode}}</h3>
      <h3>{{item.name}}</h3>
      <h3>{{item.air_date}}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Episodes',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:"",
      pesquisa:""
    }
  },
  methods:{
    loadEpisodes(name){
      axios.get('https://rickandmortyapi.com/api/episode/?name='+name)
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados)
          }
        )
      
    }
  },
  mounted(){
      this.loadEpisodes()
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
