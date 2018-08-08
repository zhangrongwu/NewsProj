<template>
<div class="middle">
     <van-nav-bar
     class="van-nav-bar"
    title="首页"
    :fixed="navFixed"
    right-text="菜单"
    @click-left="onClickLeft"
    @click-right="onClickRight"
    :title="getTitle(active)"
   ></van-nav-bar>
   <!-- 中间路由 -->
    <router-view/>
    <van-tabbar v-model="active">
    <van-tabbar-item v-for="item in tabBar" :key="item.id" info="">
         <span>{{item.title}}</span>
    <img
      slot="icon"
      slot-scope="props"
      dot=true
      info="item.badge"
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
  filters: {},
  created() {
    var index = this.defines.tabBarItemIndex;
    if (index == 0) {
      this.$router.push({ name: "home" });
    } else if (index == 1) {
      this.$router.push({ name: "news" });
    } else if (index == 2) {
      this.$router.push({ name: "mine" });
    }
  },
  data() {
    return {
      navFixed: true,
      active: this.defines.tabBarItemIndex,
      selectTitle: "首页",
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
      ]
    };
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    getTitle: function(value) {
      return this.tabBar[value].title;
    }
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
      this.defines.tabBarItemIndex = newValue;
    }
  }
};
</script>

<style scoped>
.van-nav-bar {
  background-color: rgb(84, 170, 91);
  color: white;
}

.middle {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: aliceblue;
}
</style>
