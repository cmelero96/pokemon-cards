<template>
  <select v-model="selectedPokemonIndex">
    <option selected hidden value="">Select a pokemon from the list:</option>
    <option v-for="(pokemon, index) in pokemonList" :name="pokemon" :value="index+1" :key="index+1">
      {{ pokemon }}
    </option>
  </select>
</template>
<script>
import pokemonList from '../static/pokemon-list';

export default {
  data() {
    return {
      pokemonList,
      selectedPokemonIndex: null,
    };
  },
  watch: {
    selectedPokemonIndex(pokemon) {
      this.$emit('pokemon-selected', pokemon);
    },
  },
};
</script>
