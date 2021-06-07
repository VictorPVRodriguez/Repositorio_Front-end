<template>
  <div style="display: flex">
    <div class="favorites">
      <div v-for="(item, index) in $store.state.favoritos" :key="index">
        <h3>{{item.name}}</h3>
        <h3>{{item.status}}</h3>
        <h3>{{item.species}}</h3>
        <h3>{{item.type}}</h3>
        <h3>{{item.gender}}</h3>
        <h3>{{item.origin}}</h3>
        <img :src="item.image_url" alt="" @click="desmarcaFavorito(index)"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HelloWorld from '@/components/HelloWorld.vue'
import appCard from "@/components/app-card.vue"
export default {
  components: {
    HelloWorld,
    appCard,
  },
  data() {
    return {
      resultados: "",
      pesquisa: "",
      favoritos: [],
    };
  },
  methods: {
    desmarcaFavorito(index) {
      this.$store.commit('desmarcaFavorito',index);
    },
    LoadInfo(query) {
      axios.get("https://rickandmortyapi.com/api/character/?name="+query)
      .then((res) => {
          this.resultados = res.data.results;
          console.log(res.data.results);
      });
    }
  },
};
</script>