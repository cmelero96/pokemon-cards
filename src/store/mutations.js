export default {
  savePokemon: (state, payload) => {
    state.pokemon = JSON.stringify(payload);
  },
  resetPokemonData: (state) => {
    state.pokemon = [];
  },
  changeCurrentIndex: (state, { index }) => {
    state.currentIndex = index;
  },
  setUser: (state, { user }) => {
    state.user = user;
    console.log(state.user);
  },
  clearUser: (state) => {
    state.user = null;
    console.log(state.user);
  },
};
