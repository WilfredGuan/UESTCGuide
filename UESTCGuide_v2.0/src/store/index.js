import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logStatus: false,
    showPanel: false,
    scrollTitle: '成电印记',
    favor: ''
  },
  mutations: {
    changeLogStatus (state, status) {
      state.logStatus = status
    },
    changeShowPanel (state, show) {
      state.showPanel = show
    },
    changeScrollTitle (state, title) {
      state.scrollTitle = title
    },
    changeFavor (state, favor) {
      state.favor = favor
    }
  }
})
