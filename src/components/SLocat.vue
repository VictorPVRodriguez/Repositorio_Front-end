<template>
  <div class="locations">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search">
    <button @click="loadLocations(search)">Search</button>
    <div v-for="(item,index) in resultados" :key="index">
      <h3>{{item.name}}</h3>
      <h3>{{item.type}}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Locations',
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
    loadLocations(name){
      axios.get('https://rickandmortyapi.com/api/location/?name='+name)
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados)
          }
        )
    }
  },
  mounted(){
    this.loadLocations()
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
