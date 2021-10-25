import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  plugins: [createPersistedState({ paths: ['pokemon', 'currentIndex'] })],
  state,
  mutations,
  actions,
  getters,
});

export default store;
