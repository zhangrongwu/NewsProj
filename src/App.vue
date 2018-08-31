<template>
  <div id="app">
    <van-nav-bar class="van-nav-bar" title="首页" :fixed="navFixed" right-text="菜单" @click-left="onClickLeft" @click-right="onClickRight" title="测试"></van-nav-bar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
