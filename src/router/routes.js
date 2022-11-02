import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "githomePage",
    children: [
      {
        path: "homePage",
        name: "HomePage",
        component: () => import("../components/HomePageView.vue"),
      },
      {
        path: "skill",
        name: "Skill",
        component: () => import("../components/SkillView.vue"),
      },
      {
        path: "notes",
        name: "Notes",
        component: () => import("../components/NotesView.vue"),
      },
      {
        path: "phone",
        name: "Phone",
        component: () => import("../components/PhoneView.vue"),
      },
      {
        path: "aboutUser",
        name: "AboutUser",
        component: () => import("../components/AboutUserView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

// const VueRouterPush = router.prototype.push;
// router.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch((err) => err);
// };
export default routes;
