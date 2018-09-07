import Vue from "vue";
import Router from "vue-router";
import home from "@/containers/Home";
import mine from "@/containers/Mine";
import news from "@/containers/News";
import about from "@/containers/About";
import noFound from "@/containers/NoFound";
import newsDetail from "@/containers/NewsDetail";
import moreMovie from "@/containers/MoreMovie";

Vue.use(Router);

export default new Router({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/mine",
      name: "mine",
      component: mine
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/news/newsDetail/:id",
      name: "newsDetail",
      component: newsDetail
    },
    {
      path: "/news/moreMovie/:id",
      name: "moreMovie",
      component: moreMovie
    },
    {
      path: "*",
      name: "*",
      component: noFound
    }
  ]
});
