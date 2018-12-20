<template>
        <a>Counter:{{ counter }} <br>
        <button type="button" @click="increase"> Click to increase</button> </a>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default{
    computed: {
        ...mapState(['counter'])
    },
    methods: {
        ...mapMutations(['increase'])
    }
}
</script>