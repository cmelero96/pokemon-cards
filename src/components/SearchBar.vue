<template>
  <select v-model="selectedPokemonIndex">
    <option v-if="!selectedPokemonIndex" selected hidden value="">
      Select a pokemon from the list
    </option>
    <option v-for="(pokemon, index) in pokemonList"
      :name="pokemon"
      :value="index+1"
      :key="index+1"
      :ref="`${index+1}`">
      {{ pokemon }}
    </option>
  </select>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import pokemonList from '../static/pokemon-list';

export default {
  data() {
    return {
      pokemonList,
      selectedPokemonIndex: null,
    };
  },
  computed: {
    ...mapGetters([
      'getCurrentIndex',
    ]),
  },
  methods: {
    ...mapMutations([
      'changeCurrentIndex',
    ]),
    shouldSelectOption(index) {
      return this.getCurrentIndex === index + 1;
    },
  },
  watch: {
    selectedPokemonIndex(index) {
      this.changeCurrentIndex({ index });
    },
  },
  mounted() {
    this.$refs[this.getCurrentIndex].selected = true;
  },
};
</script>
<style lang="scss" scoped>
  select {
    width: 40%;
  }
</style>
