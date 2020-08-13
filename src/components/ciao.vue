<template>
  <div class="hello">
    <!-- 此处有一个问题, 那就是刷新后params丢失, 待解决 -->
    <h1>{{ msg }}</h1>
    <p style="background-color: #eee; color: #000">{{$route.params.say}}</p>
    
  </div>
</template>

<script>
export default {
  name: "ciao",
  data() {
    return {
      msg: "ciao!",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
