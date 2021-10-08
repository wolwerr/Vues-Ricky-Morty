<template>
  <b-container fluid class="back-ground">
    <b-row>
      <h1>Lista de Episodio</h1>
      <SearchEpisodio />
    </b-row>
    <CardEpisodio />
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import CardEpisodio from '../components/CardEpisodio.vue';
import SearchEpisodio from "../components/SearchEpisodio.vue"
export default {
  name: 'Episodios',
  components:{CardEpisodio, SearchEpisodio},
  mounted(){
    this.getEpisodios().then(()=>{
    }) 
  },
  methods:{
    ...mapActions('episodio', ['getEpisodios']),
  },
  computed:{
    ...mapGetters("episodio", ["listEpisodios"]),
    
  }
}
</script>
<style scoped>
.back-ground {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
}
.title__home {
  color: black;
  margin-top: 16px;
}
</style>