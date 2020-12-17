import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoList:[],
  },
  mutations: {
    infoApi(state,infoApiRecibida){
      state.infoList=infoApiRecibida;
    }
  },
  actions: {
    infoApi(context,infoApiRecibida){
      context.commit('mutandoInfoApi',infoApiRecibida )
    }
  },
  getters: {
    enviarInfoApi(state){
      return state.infoList;
    }
  }
})
