<template>
<div class="middle">
    我的
        <button @click="about">跳转到关于页面</button>

</div>
</template>

<script>
export default {
  components: {},
  methods: {
    about() {
      this.$router.push({ name: "about" });
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
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>

