export default {
  getAllPokemonData: (state) => {
    if (!state.pokemon?.length) {
      return [];
    }

    return JSON.parse(state.pokemon);
  },
  getPokemon: (state, getters) => (index) => getters.getAllPokemonData[index],
  getCurrentIndex: (state) => state.currentIndex,
  // eslint-disable-next-line arrow-body-style
  getCurrentPokemon: (state, getters) => {
    return state.currentIndex ? getters.getPokemon(state.currentIndex) : null;
  },
  getUser: (state) => state.user,
};
