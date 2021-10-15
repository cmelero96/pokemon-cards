import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import rootMutations from './mutations';

const store = createStore({
  // TODO: State is not persisted yet.
  plugins: [createPersistedState()],
  state() {
    return {
      pokemon: [],
    };
  },
  mutations: rootMutations,
});

export default store;
