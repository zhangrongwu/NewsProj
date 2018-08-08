<template>
<div>
  <van-tabs @click="onClick">
  <van-tab v-for="item in titles" :title=item.title :key="item.id">
  </van-tab>
</van-tabs>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      titles: [
        {
          id: "1",
          title: "豆瓣时间",
          url: ""
        },
        {
          id: "2",
          title: "豆瓣豆品",
          url: ""
        },
        {
          id: "3",
          title: "书店",
          url: ""
        },
        {
          id: "1",
          title: "豆瓣视频",
          url: ""
        }
      ]
    };
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>

<style scoped>
</style>

