<template>
  <search-bar @pokemon-selected="onPokemonSelected"></search-bar>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
  methods: {
    onPokemonSelected(index) {
      // TODO
      console.log(`Calling API with pokedex entry #${index}`);
    },
  },
};
</script>
