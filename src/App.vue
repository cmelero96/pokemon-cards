<template>
  <div class="main-wrapper">
    <top-bar></top-bar>
    <playground-box></playground-box>
  </div>
  <side-content></side-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import PokemonService from './services/PokemonApiService';

import PlaygroundBox from './components/PlaygroundBox.vue';
import TopBar from './components/TopBar.vue';
import SideContent from './components/SideContent.vue';

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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;

  .main-wrapper {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2 1;
  }
}

html, body {
  height: 100%;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}
</style>
