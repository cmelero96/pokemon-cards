export default {
  savePokemon: (state, payload) => {
    state.pokemon = JSON.stringify(payload);
  },
  resetPokemonData: (state) => {
    state.pokemon = {};
  },
};
