export default {
  addPokemon: ({ getters, commit }, { data, index }) => {
    const inMemoryData = getters.getAllPokemonData;

    if (!inMemoryData[index]) {
      inMemoryData[index] = data;
      commit('savePokemon', inMemoryData);
    }
  },
};
