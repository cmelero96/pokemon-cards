<template>
  <pokemon-card v-if="getCurrentPokemon" :pokemon="getCurrentPokemon"/>
</template>

<script>
import { mapGetters } from 'vuex';

import PokemonCard from './PokemonCard.vue';

export default {
  components: {
    PokemonCard,
  },
  computed: {
    ...mapGetters([
      'getCurrentPokemon',
      'getCurrentIndex',
    ]),
  },
};
</script>
