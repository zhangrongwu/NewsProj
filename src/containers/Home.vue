<template>
<div class="middle">
  <home-header-view></home-header-view>
  <home-list :items="events"></home-list>
</div>
</template>

<script>
// 导入状态数据管理
import { mapState, mapActions } from "vuex";
import homeHeaderView from "../components/homeHeaderView";
import homeList from "../components/homeList";
export default {
  components: {
    homeHeaderView: homeHeaderView,
    homeList: homeList
  },
  // 计算属性 数据回调与vue进行绑定
  computed: {
    ...mapState({
      events: state => state.home.events
    })
  },
  methods: {
    getData() {
      setTimeout(() => {
        // 调用store中的dispatch方法,并把自己需要调用的方法按类型导入
        this.$store.dispatch({
          type: "loadMore",
          param: ""
        });
      }, 1000);
    },
    ...mapActions["loadMore"]
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
  background-color: aqua;
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>

