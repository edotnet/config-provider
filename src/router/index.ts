import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/specifications",
    },
    {
      path: "/specifications",
      name: "specifications",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Specifications.vue"),
    },
    {
      path: "/specifications/new",
      name: "specifications_new",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SpecificationEdit.vue"),
    },
    {
      path: "/specifications/:id",
      name: "specifications_edit",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SpecificationEdit.vue"),
    },
  ],
});

export default router;
