<template>
  <top-bar></top-bar>
  <playground-box></playground-box>
  <side-content></side-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PlaygroundBox from './components/PlaygroundBox.vue';
import TopBar from './components/TopBar.vue';
import SideContent from './components/SideContent.vue';
import PokemonService from './services/PokemonApiService';

export default {
  name: 'App',
  components: {
    TopBar,
    PlaygroundBox,
    SideContent,
  },
  computed: {
    ...mapGetters(['getCurrentIndex', 'getPokemon', 'getCurrentPokemon']),
  },
  methods: {
    ...mapActions(['addPokemon']),
  },
  watch: {
    async getCurrentIndex(newIndex) {
      if (!this.getPokemon(newIndex)) {
        const newPokemon = await PokemonService.getPokemon(newIndex);
        this.addPokemon({ data: newPokemon, index: newIndex });
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}
</style>
