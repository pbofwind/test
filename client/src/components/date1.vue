<template>
  <div id="example">
    <p>
      Date:"{{ Original}}"
      <br>
      Date:"{{reversedInMethod()}}"
      <br>
      Date:"{{reversedInComputed}}"
      <br>
    </p>
    <button type="button" v-on:click="changeDate()">Update</button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      Original: Date.now()
    };
  },
  methods: {
    changeDate: function() {
      this.Original = Date.now()
    },
    reversedInMethod: function() {
      return Date.now()
    }
  },
  computed: {
    reversedInComputed: function() {
      return Date.now()
    }
  }
};
</script>