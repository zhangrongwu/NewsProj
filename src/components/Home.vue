<template>
<div class="middle">
  <button @click="getData">数据请求</button>
    这是一个主页面
    {{events}}
    
</div>
</template>

<script>
// 导入状态数据管理
import { mapState, mapActions } from "vuex";
export default {
  components: {},
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

