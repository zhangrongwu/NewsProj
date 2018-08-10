import Vue from "vue";
import Router from "vue-router";
import main from "@/containers/Main";
import home from "@/containers/Home";
import mine from "@/containers/Mine";
import news from "@/containers/News";
import about from "@/containers/About";
import noFound from "@/containers/NoFound";
import newsDetail from "@/containers/NewsDetail";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      component: main,
      children: [
        {
          path: "home",
          name: "home",
          component: home
        },
        {
          path: "news",
          name: "news",
          component: news
        },
        {
          path: "mine",
          name: "mine",
          component: mine
        }
      ]
    },
    {
      path: "about",
      name: "about",
      component: about
    },
    {
      path: "/main/news/newsDetail/:id",
      name: "newsDetail",
      component: newsDetail,
      default: main
    },
    {
      path: "*",
      name: "*",
      component: noFound
    }
  ]
});
