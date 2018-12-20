<template>
    <div id = "example">
    <p>Original message: "{{ test_message1 }}" <br>
    {{ reversedMessage(test_message1) }}
    Computed reversed message: "{{ test_message2 }}"</p> <br>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default{
    computed:{
        ...mapState(['test_message1','test_message2'])
    },
    methods:{
        ...mapMutations(['reversedMessage'])
    }
}
</script>