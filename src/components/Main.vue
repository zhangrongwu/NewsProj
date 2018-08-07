<template>
<div class="middle">
     <van-nav-bar
    title="首页"
    right-text="菜单"
    @click-left="onClickLeft"
    @click-right="onClickRight"
   ></van-nav-bar>
   <!-- 中间路由 -->
    <router-view/>

    <van-tabbar v-model="active">
    <!-- <van-tabbar-item icon="shop">
    <span>首页</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal">
    </van-tabbar-item>
    <van-tabbar-item icon="chat">标签</van-tabbar-item>
    <van-tabbar-item icon="records" info="10">我的</van-tabbar-item> -->

    <van-tabbar-item v-for="item in tabBar" :key="item.id">
         <span>{{item.title}}</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? item.active : item.normal"> 
    </van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
import Home from "./Home.vue";

export default {
  name: "Main",
  components: {
    Home: Home
  },
  data() {
    return {
      active: this.defines.tabBarItemSelected,
      tabBar: [
        {
          normal: require("../assets/icon-home-normal.png"),
          active: require("../assets/icon-home-active.png"),
          title: "首页",
          badge: "",
          id: 0
        },
        {
          normal: require("../assets/icon-news-normal.png"),
          active: require("../assets/icon-news-active.png"),
          title: "新闻",
          badge: "1",
          id: 1
        },
        {
          normal: require("../assets/icon-mine-normal.png"),
          active: require("../assets/icon-mine-active.png"),
          title: "我的",
          badge: "2",
          id: 2
        }
      ],
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      }
    };
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  },
  watch: {
    active: function(newValue, oldValue) {
      if (newValue == 0) {
        this.$router.push({ name: "home" });
      } else if (newValue == 1) {
        this.$router.push({ name: "news" });
      } else if (newValue == 2) {
        this.$router.push({ name: "mine" });
      }
      this.defines.tabBarItemSelected = newValue;
    }
  }
};
</script>

<style scoped>
.middle {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: aliceblue;
}
</style>
