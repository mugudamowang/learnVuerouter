<template>
  <div id="app">
    <img src="./assets/logo.png" />

    <!-- 编程式导航 -->
    <div>
      <button @click="forward">forward</button>
      <button @click="backward">backward</button>
      <button @click="gohome">gohome</button>
    </div>

    <div id="nav">
      <router-link to="/">HOME</router-link>&nbsp;|
      <router-link to="/multiPage">MultiPage</router-link>&nbsp;|
      <router-link to="/sayHi">Hi</router-link>&nbsp;|
      <router-link to="/sayHi/hello">Hello</router-link>&nbsp;|
      <!-- 使用:to传递参数 其中name可以简写成ciao, 而不需要路径 -->
      <router-link :to="{name:'/sayHi/ciao', params:{say:'$route.params.say: cooooool~'}}">Ciao</router-link>&nbsp;|
      <router-link to="/urlParams/233/666">URLparams</router-link>
      <router-link to="/fuck233">404</router-link>

      <!-- 模板参数name接受使用$route, 不同页面会显示对应的name值 -->
      <p>name: {{ $route.name}}</p>
    </div>

    <transition name="fade" mode="out-in">
      <!-- 单页面多路由设置 -->
      <router-view id="top"></router-view>
    </transition>
      <router-view name="left" id="left"></router-view>
      <router-view name="right" id="right"></router-view>

    <!--页面重定向-->
    <router-link class="go" to="/goHome">Go HOME</router-link>
    <router-link class="go params" to="/goParams/go/back">Go urlParams</router-link>

    <!-- alias别名重定向 -->
    <router-link class="go alias" to="/home">home</router-link>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    backward(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    },
    gohome(){
      this.$router.push('/').catch(err=>{})   //此处有个导航重复, 多次点击出现Uncaught, 解决办法进行异常捕获

      //or 
      // const path = `yourpath`
      //if (this.$route.path !== path) this.$router.push(path)
    }

  }
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
.params {
  right: 60px;
}
.alias {
  right: 0;
}

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
/* 过场动画 */
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
