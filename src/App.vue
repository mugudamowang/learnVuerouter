<template>
  <div id="app">
    <img src="./assets/logo.png" />

    <div id="nav">
      <router-link to="/">HOME</router-link>&nbsp;|
      <router-link to="/multiPage">MultiPage</router-link>&nbsp;|
      <router-link to="/sayHi">Hi</router-link>&nbsp;|
      <router-link to="/sayHi/hello">Hello</router-link>&nbsp;|
      <!-- 使用:to传递参数 其中name可以简写成ciao, 而不需要路径 -->
      <router-link :to="{name:'/sayHi/ciao', params:{say:'$route.params.say: cooooool~'}}">Ciao</router-link>&nbsp;|
      <router-link to="/urlParams/233/666">URLparams</router-link>

      <!-- 模板参数name接受使用$route, 不同页面会显示对应的name值 -->
      <p>name: {{ $route.name}}</p>
    </div>

    <!-- 单页面多路由设置 -->
    <router-view id="top"></router-view>
    <router-view name="left" id="left"></router-view>
    <router-view name="right" id="right"></router-view>

    <router-link class="go" to="/goHome">Go HOME</router-link>
    <router-link class="go params" to="/goParams/go/back">Go urlParams</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.go {
  text-align: center;
  background-color: white;
  position: fixed;
  bottom: 20px;
  right: 200px;
  text-decoration: none;
  font-size: smaller;
}
.params{right:20px;}

#top {
  background-color: white;
}

#nav {
  margin: 10px;
}

#left {
  box-sizing: border-box;
  padding: 100px 0;
  background-color: #41b883;
  float: left;
  width: 50%;
  color: #eee;
}

#right {
  padding: 100px 0;
  background-color: #35495e;
  float: right;
  width: 50%;
  color: #eee;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: wheat;
}
</style>
