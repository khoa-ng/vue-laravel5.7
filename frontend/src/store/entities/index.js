import getters from './getters';
import mutations from './mutations';

const state = {
  users: { byId: {} },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
