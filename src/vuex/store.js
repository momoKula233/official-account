import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isLoading: false,
  direction: 'forward',
};

/* eslint-disable */
export default new Vuex.Store({
  state,
  // getters: {
  //   route: state => state.route,
  //   isLoading: state => state.isLoading,
  //   direction: state => state.direction,
  // },
  mutations: {
    UPDATE_LOADING(state, status) {
      // console.log(state.isLoading, status);
      state.isLoading = status;
      // console.log(state.isLoading, status);
    },
    UPDATE_DIRECTION(state, direction) {
      // console.log(state.direction, direction);
      state.direction = direction;
      // console.log(state.direction, direction);
    },
  },
});
