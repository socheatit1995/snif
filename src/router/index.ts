import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/about-kvk-structure",
      name: "about-kvk-structure",
      component: () => import("@/views/AboutKVKstructure.vue"),
    },
    {
      path: "/about-kvk-structure-management",
      name: "about-kvk-structure-management",
      component: () => import("@/views/AboutKVKStructureManagement.vue"),
    },
    {
      path: "/document",
      name: "document",
      component: () => import("@/views/DocumentView.vue"),
    },
    {
      path: "/workshop",
      name: "workshop",
      component: () => import("@/views/WorkshopView.vue"),
    },
    {
      path: "/workshop/:id",
      name: "workshop-detail",
      component: () => import("@/views/WorkshopDetailView.vue"),
    },
    {
      path: "/training",
      name: "training",
      component: () => import("@/views/TrainingView.vue"),
    },
    {
      path: "/training/:id",
      name: "training-detail",
      component: () => import("@/views/TrainingDetailView.vue"),
    },
    {
      path: "/about-kvk",
      name: "aboutkvk",
      component: () => import("@/views/AboutKVKView.vue"),
    },
    {
      path: "/about-kvk/:id",
      name: "about-kvk-detail",
      component: () => import("@/views/AboutKVKDetailView.vue"),
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("@/views/ContactUsView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("@/views/NewsView.vue"),
    },
    {
      path: "/news/:id",
      name: "news-detail",
      component: () => import("@/views/NewsDetailView.vue"),
    },
  ],
});

export default router;
