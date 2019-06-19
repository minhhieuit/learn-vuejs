import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrTask:[],
    count:0,
  },
  mutations: {
    ADD_TASK:(state,payload) => {
      state.arrTask.push(payload);
    },
    CLEAR_TASK: (state) => {
      let taskLength = state.arrTask.length;
      state.arrTask.splice(0,taskLength);
    }
  },
  actions: {
    addTask({commit},data){
      commit('ADD_TASK',data);
    },
    clearTask({commit}){
      commit('CLEAR_TASK');
    }
  },
  getters:{
    arrTask: state => state.arrTask,
  }
})
