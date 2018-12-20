<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyComponent/>
    <Test1/>
    <compute1/>
    <date1/><br>
    <Sender/>
    <Receiver/>
    <router-link to="/PageSend">Props</router-link>
    <br>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyComponent from "@/components/MyComponent.vue";
import Test1 from "@/components/Test1.vue";
import compute1 from "@/components/compute1.vue";
import date1 from "@/components/date1.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Sender from "@/components/Props_Sender.vue";
import Receiver from "@/components/Props_Receiver.vue";

export default {
  name: "home",
  components: {
    MyComponent,
    Test1,
    compute1,
    date1,
    Sender,
    Receiver,
    HelloWorld
  }
};
</script>
