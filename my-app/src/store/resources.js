const generateState = () => ({
  resources: [],
});

export default {
  namespaced: true,
  state: generateState(),
  getters: {
    resources: state => state.resources,
  },
  mutations: {
    add(state, payload) {
      state.resources = [...state.resources, payload];
    },
    update(state, payload) {
      state.resources = state.resources.map(resource => {
        if (resource.id === payload.id) {
          return { ...resource, ...payload };
        }
        return resource;
      });
    },
    remove(state, payload) {
      state.resources = state.resources.filter(i => i.id !== payload.id);
    },
  },
  actions: {
    create({ state, commit }, payload) {
      if (state.resources.length === 0) {
        payload.id = 1;
      } else {
        payload.id = state.resources[state.resources.length - 1].id + 1;
      }
      commit('add', payload);
    },
    edit({ state, commit }, payload) {
      commit('update', payload);
    },
    delete({ commit }, payload) {
      commit('remove', payload);
    },
  },
};
