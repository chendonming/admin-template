const state = () => ({
  test: "Hello World Vuex!",
  ajaxError: false,
  ajaxContent: {}
});

const getters = {
  getTest: state => state.test,
  ajaxError: state => state.ajaxError,
  ajaxContent: state => state.ajaxContent
};

const actions = {};

const mutations = {
  setTest(state, t) {
    state.test = t;
  },
  setAjaxError(state, b) {
    state.ajaxError = b;
  },
  setAjaxContent(state, sc) {
    state.ajaxContent = sc;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
