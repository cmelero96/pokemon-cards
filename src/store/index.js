import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
  // TODO: State is not persisted yet.
  plugins: [createPersistedState()],
  state() {
    return {
      pokemon: [],
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
