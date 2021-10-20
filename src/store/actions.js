export default {
  addPokemon: ({ getters, commit }, { data, index }) => {
    const inMemoryData = getters.getAllPokemonData;
    if (!inMemoryData) {
      commit('resetPokemonData');
    }

    if (inMemoryData[index]) {
      // TODO: Do something when already present?
      console.log('Pokemon already cached');
    } else {
      inMemoryData[index] = data;
      commit('savePokemon', inMemoryData);
    }
  },
};
