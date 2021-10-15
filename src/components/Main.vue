<template>
  <search-bar @pokemon-selected="onPokemonSelected"/>
  <pokemon-card v-if="pokemon" :pokemon="pokemon"/>
</template>

<script>
// import FakePokemonService from '../services/FakePokemonGetter';
import PokemonService from '../services/PokemonApiService';

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
    async onPokemonSelected(index) {
      // TODO
      console.log(`Calling API with pokedex entry #${index}`);
      const newPokemon = await PokemonService.getPokemon(index);

      if (newPokemon && newPokemon.image && newPokemon.name) {
        this.pokemon = newPokemon;
        this.storePokemonData(newPokemon, index);
      }
    },
    // TODO
    storePokemonData(data, index) {
      this.$store.commit('addPokemon', { data, index });
    },
  },
  mounted() {
  },
};
</script>
