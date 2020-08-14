<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p style="background-color: #41b883; color: #eee">param1: {{ $route.params.param1}}</p>
    <p style="background-color: #35495E; color: #eee">param2: {{ $route.params.param2}}</p>
  </div>
</template>

<script>
export default {
  name: "Params",
  data() {
    return {
      msg: "URL is usually used to transfer paramters",
    };
  },
  //hook
  beforeRouteEnter:(to, from, next) =>{
    console.log("ready to enter this component");
    next(true)//i am a toggle
  },
  beforeRouteLeave:(to, from, next) =>{
    console.log("ready to leave this component");
    next(true)//i am a toggle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
