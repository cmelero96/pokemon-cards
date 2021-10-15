<template>
  <search-bar @pokemon-selected="onPokemonSelected"/>
  <pokemon-card v-if="pokemon" :pokemon="pokemon"/>
</template>

<script>
import PokemonService from '../services/FakePokemonGetter';

import SearchBar from './SearchBar.vue';
import PokemonCard from './PokemonCard.vue';

export default {
  data() {
    return {
      pokemon: null,
    };
  },
  components: {
    SearchBar,
    PokemonCard,
  },
  methods: {
    onPokemonSelected(index) {
      // TODO
      console.log(`Calling API with pokedex entry #${index}`);
    },
  },
  mounted() {
    this.pokemon = PokemonService.getPokemon();
  },
};
</script>
