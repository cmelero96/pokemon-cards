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
      const storedPokemon = localStorage.pokemonData && JSON.parse(localStorage.pokemonData)[index];
      if (storedPokemon) {
        console.log('Retrieving data from Local Storage');
        this.pokemon = storedPokemon;
      } else {
        console.log('Calling API');
        const newPokemon = await PokemonService.getPokemon(index);

        if (newPokemon && newPokemon.image && newPokemon.name) {
          this.pokemon = newPokemon;
          this.storePokemonData(newPokemon, index);
        }
      }
    },
    storePokemonData(data, index) {
      const storedData = localStorage.pokemonData ? JSON.parse(localStorage.pokemonData) : {};

      // TODO: Add deep comparison, or add timestamp to objects to update once X time has passed
      if (!storedData[index]) {
        storedData[index] = data;
        localStorage.pokemonData = JSON.stringify(storedData);
      }
    },
  },
};
</script>
