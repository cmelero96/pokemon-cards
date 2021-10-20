<template>
  <search-bar @pokemon-selected="onPokemonSelected"/>
  <pokemon-card v-if="pokemon" :pokemon="pokemon"/>
</template>

<script>
// import FakePokemonService from '../services/FakePokemonGetter';
import { mapActions, mapGetters } from 'vuex';
import PokemonService from '../services/PokemonApiService';

import SearchBar from './SearchBar.vue';
import PokemonCard from './PokemonCard.vue';

export default {
  data() {
    return {
      pokemon: null,
    };
  },
  computed: {
    ...mapGetters([
      'getPokemon',
    ]),
  },
  components: {
    SearchBar,
    PokemonCard,
  },
  methods: {
    ...mapActions([
      'addPokemon',
    ]),
    async onPokemonSelected(index) {
      const cachedPokemon = this.getPokemon(index);

      if (cachedPokemon) {
        this.pokemon = cachedPokemon;
      } else {
        const newPokemon = await PokemonService.getPokemon(index);

        this.pokemon = newPokemon;
        this.addPokemon({ data: newPokemon, index });
      }
    },
  },
};
</script>
