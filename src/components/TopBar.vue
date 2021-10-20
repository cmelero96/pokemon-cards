<template>
  <search-bar/>
</template>

<script>
import { mapMutations } from 'vuex';

import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      pokemon: null,
    };
  },
  methods: {
    ...mapMutations([
      'changeCurrentIndex',
    ]),
  },
};
</script>
