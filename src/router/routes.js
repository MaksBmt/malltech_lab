export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/AuthView.vue"),
    meta: {
      layout: "AppLayoutMain",
    },
  },
  {
    path: "/reg",
    name: "Registration",
    component: () => import("@/views/RegView.vue"),
    meta: {
      layout: "AppLayoutMain",
    },
  },
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: { layout: "AppLayoutMain" },
  },
  {
    path: "/notes",
    name: "Notes",
    component: () => import("@/views/NotesView.vue"),
    meta: { layout: "AppLayoutMain" },
  },
];
