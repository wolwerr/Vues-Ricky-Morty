<template>
  <div>
    <b-form-input
      v-model="name"
      placeholder="Pesquisar por nome do Episodio"
      @input="filterEpisode"
    ></b-form-input>
    <div class="mt-2">Value: {{ name }}</div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapActions } from "vuex";
export default {
  name: "SearchEpisode",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions("episodio", ["getEpisodioByName"]),
    filterEpisode: _.debounce(function (e) {
      this.name = e;
      this.getEpisodioByName(this.name).then(() => {});
    }, 500),
  },
};
</script>

<style scoped></style>