import Vue from "vue";
import Router from "vue-router";
import main from "@/components/Main";
import home from "@/components/Home";
import mine from "@/components/Mine";
import news from "@/components/News";
import about from "@/components/About";

Vue.use(Router);

export default new Router({
  mode: "history",
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
    }
  ]
});

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       redirect: '/pages/'
//     },
//     {
//       path: '/pages',
//       component: PagesView,
//       children: [
//         {
//           path: '',
//           redirect: '/pages/home'
//         },
//         {
//           path: 'home',
//           name: 'HomeView',
//           component: HomeView
//         },
//         {
//           path: 'movie',
//           name: 'MovieView',
//           component: MovieView
//         },
//         {
//           path: 'book',
//           name: 'BookView',
//           component: BookView
//         },
//         {
//           path: 'status',
//           name: 'StatusView',
//           component: StatusView
//         },
//         {
//           path: 'group',
//           name: 'GroupView',
//           component: GroupView
//         },
//         {
//           path: 'detail/:id',
//           name: 'DetailView',
//           component: DetailView
//         }
//       ]
//     },
//     {
//       path: '/pages/:classify/subject/:id',
//       name: 'SubjectView',
//       components: {
//         default: PagesView,
//         subject: SubjectView
//       }
//     },
//     {
//       path: '/search',
//       name: 'SearchView',
//       components: {
//         default: PagesView,
//         search: SearchView
//       }
//     },
//     {
//       path: '/login',
//       name: 'LoginView',
//       component: LoginView
//     },
//     {
//       path: '/register',
//       name: 'RegisterView',
//       component: RegisterView
//     },
//     {
//       path: '*',
//       redirect: '/pages/'
//     }
//   ]
// })
