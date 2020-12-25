import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    visible: true
  },
  mutations: {
    isVisible(state) {
      state.visible = true;
    },
    isInvisible(state) {
      state.visible = false;
    }
  },
  actions: {},
  modules: {}
});
