<template>
  <div>
    <b-row>
      <b-card
        v-for="episodio in listEpisodios"
        :key="episodio.index"
        :title="episodio.name"
        :img-src="episodio.image"
        img-alt="Image"
        style="max-width: 20rem"
        class="card--style"
      >
        <b-card-text class="card__episodio--detail">
        <span>Espécie: {{ speciesTranslate(episodio.species) }}</span>
        <span>Estado: {{ statusTranslate(episodio.status) }} </span>
        <span>ID Episodio: {{ episodio.id }} </span>
        <span>Lugar de Origem: {{ episodio.location.name }}</span>
        </b-card-text>
        <b-button
        variant="outline-primary"
        @click="abrirDetalhesepisodio(episodio.id)"
        >Detalhes</b-button
        >
    </b-card>
    </b-row>

<b-row>
    <div class="row">
    <b-container class="btn__act--pages">
        <b-button
        variant="light"
        :disabled="getPageIndex < 2"
        @click="PaginaAnterior(getPageIndex)"
        >Anterior</b-button
        >
        <b-button variant="light" @click="proximaPagina(getPageIndex)"
        >Proximo</b-button
        >
    </b-container>
    </div>
</b-row>
    
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CardEpisodio',
    data(){
      return{
        pageNumber: 1
      }
    },
    computed:{
        ...mapGetters("episodio", ['listEpisodios', 'getPageIndex'])
    },
    methods:{
      ...mapActions('episodio', ["getEpisodioByPage"]),
    speciesTranslate(specie) {
      if (specie === "Human") {
        return "Humano";
      } else {
        return "Alien";
      }
    },
        statusTranslate(status) {
        if (status === "Alive") {
            return "Vivo";
        } else {
            return "Morto";
        }
        },
    abrirDetalhesepisodio(id) {
      this.$router.push(`/episodio/detalhes/${id}`);
    },
    proximaPagina(id) {
      let params = {
        id: id,
        pageIndex: this.pageNumber,
      };
      this.getEpisodioByPage(params).then(() => {
        this.$store.commit("episodio/SET_PAGE_INDEX", params.pageIndex);
      });
    },
    PaginaAnterior(id) {
      let params = {
        id: id - 1,
        pageIndex: this.pageNumber,
      };
      this.getEpisodioByPage(params).then(() => {
        this.$store.commit("episodio/REMOVE_PAGE_INDEX", params.pageIndex);
      });
    },
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
.card__personagem--detail {
  display: flex;
  flex-direction: column;
}
.card--style {
  margin: 16px;
}
.btn__act--pages {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px auto 20px auto;
}
</style>