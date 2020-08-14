<template>
  <div>
    <h1>{{ msg }}</h1>
    <transition name="fade" mode="out-in">
    <router-view class="green"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "sayHi",
  data() {
    return {
      msg: "Hi!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: #41b883;
  color: #eee;
}
.green {
  background-color: #35495e;
  color: #eee;
}
</style>
