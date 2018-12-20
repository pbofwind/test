<template>
  <div>Input 1
    <input type="text" id="input1" v-model="temp11">
    <br>+
    <br>Input 2
    <input type="text" id="input2" v-model="temp22">
    <br>
    textbox1 : {{temp11}}<br>
    textbox2 : {{temp22}}<br>
    store_number1 : {{input_num1}}<br>
    store_number2 : {{input_num2}}
    <br>
    <button type="button" @click="send_data">Compute</button>
    <br>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
import store from '@/store.js'

var temp1=0
var temp2=0
export default {
  data() {
    return{
      temp11:0,
      temp22:0,
    }
  },
  computed: {
     ...mapState(['input_num1','input_num2'])
  },
  methods:{
     ...mapMutations(['get_input_num1','get_input_num2']),
  send_data: function() {
    temp1 = parseInt(this.temp11),
    temp2 = parseInt(this.temp22),
    store.commit('get_input_num1',temp1),
    store.commit('get_input_num2',temp2)
  }
}
};
</script>   