<template>
    <div>
        <input type="text" id="input1" v-model="Meow1"> <br>
        <input type="text" id="input2" v-model="Meow2"> <br>
        <router-link :to="{name:'PageReceive',params:{ Meow1,Meow2 }}"><button>MEOW!!!!</button></router-link>
        <br><br><br>
        <router-link to="/"><button>Back</button></router-link>
    </div>
</template>

<script>

export default{
        data() {
            return {
                Meow1:'',
                Meow2:''
            }
        }
}

</script>