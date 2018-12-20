<template>
    <div v-bind:class="classObject">
        MumumumumumumumumumuMeow
    </div>
</template>
<script>
export default{
    data:{
        /*isActive:true,
        error:null,
        activeClass:'active',
        errorClass:'text-danger',*/
        aciveColor:"red",
        fontSize:30
    },
    computed:{
        classObject:function(){
            return{
                active: this.isActive && !this.error,
                'text-danger':this.error&&this.error.type ==="fatal"
            }
        }
    }
}
</script>
<style>
    
</style>