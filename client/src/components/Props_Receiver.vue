<template>
  <div>
    {{ cal() }}
    result : {{ result }}
    <br>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
      computed:{
          ...mapState(['result'])
      },
      methods:{
          ...mapMutations(['cal'])
      }
};
</script>