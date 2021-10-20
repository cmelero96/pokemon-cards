export default {
  getAllPokemonData: (state) => {
    if (!state.pokemon?.length) {
      return [];
    }

    return JSON.parse(state.pokemon);
  },
  getPokemon: (state, getters) => (index) => getters.getAllPokemonData[index],
};
