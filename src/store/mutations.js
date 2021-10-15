export default {
  addPokemon(state, { data, index }) {
    if (!state.pokemon[index]) {
      console.log('Mutating');
      state.pokemon[index] = data;
    }
  },
};
