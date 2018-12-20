import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
    test_message1: 'abcdefgh',
    test_message2: '',
    input_num1: 0,
    input_num2: 0,
    result: 0
  },
  mutations: {
    increase (state) {
      state.counter += 1
    },
    reversedMessage (state) {
      state.test_message2 = state.test_message1.split('').reverse('').join('')
    },
    cal (state) {
      state.result = state.input_num1 + state.input_num2
    },
    get_input_num1 (state, n) {
      state.input_num1 = n
    },
    get_input_num2 (state, n) {
      state.input_num2 = n
    }
  },
  actions: {

  },
  getters: {

  }
})
