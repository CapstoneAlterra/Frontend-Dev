<template>
  <h1>ini tampilan setting <button @click="test()">test</button></h1>
</template>
<script>
export default {
  layout: "admin",
  methods: {
    test() {
      console.log(this.$store.state.auth);
    },
  },
};
</script>
