<template>
 <div class="middle">
  <button @click="getMovie">点击加载数据</button>
 

    新闻
    {{hotMovies}}
    {{topMovies}}
    {{newMovies}}
    {{movieTags}}
    
 </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "News",
  computed: {
    hotMovies: state => state.news.hotMovies,
    topMovies: state => state.news.topMovies,
    newMovies: state => state.news.newMovies,
    movieTags: state => state.news.movieTags
  },
  components: {},

  methods: {
    getMovie() {
      this.$store.dispatch("getMovie");
    }
  },
  created() {
    // this.getMovie();
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

