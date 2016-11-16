<template>
  <div class="hello">
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello',
    };
  },
  methods: {
    showId() {
      console.log(this.$route.params.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
