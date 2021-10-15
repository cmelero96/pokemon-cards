<template>
  <main-component>
  </main-component>
</template>

<script>
// import axios from 'axios';
// import pokemonList from './static/pokemon-list';
import MainComponent from './components/Main.vue';

export default {
  name: 'App',
  components: {
    MainComponent,
  },
  mounted() {
    // const instance = axios.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   headers: { 'X-Custom-Header': 'foobar' },
    // });

    // instance.get('https://pokeapi.co/api/v2/pokemon/?limit=9999').then((a) => {
    //   const pokes = a.data.results;
    //   let str = '';
    //   pokes.forEach((p) => { str = str.concat(`"${p.name}",\n`); });
    //   console.log(str);
    // });

    // console.log(pokemonList);
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
</style>
