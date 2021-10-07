<template>
  <div class="home">
    <h1> Lista de personagens </h1>
    <span>{{ listPersonagens }}</span>
    
    <h1> Lista de Episodios </h1>
    <span>{{ listEpisodios }}</span>

    <h1> Lista de Locais </h1>
    <span>{{ listLocais }}</span>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  mounted(){
    this.getPersonagens()
      this.getEpisodios()
        this.getLocais()
     
  },
  methods:{
    ...mapActions('personagem', ['getPersonagens']),
    ...mapActions('episodio', ['getEpisodios']),
    ...mapActions('local', ['getLocais'])
  },
  computed:{
    ...mapGetters('personagem', ["listPersonagens"]),
    ...mapGetters('episodio', ["listEpisodios"]),
    ...mapGetters('local', ["listLocais"])
  }
}
</script>
