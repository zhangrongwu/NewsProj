<template>
<div>
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
</style>

