import MainPage from "@/pages/MainPage.vue";
import RoomDetailsPage from '@/pages/RoomDetailsPage.vue'
import CatalogPage from '@/pages/CatalogPage.vue'
import Error404Page from "@/pages/Error404Page.vue";
import ReviewsPage from '@/pages/ReviewsPage.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/catalog',
    component: CatalogPage,
  },
  {
    path: '/reviews',
    component: ReviewsPage,
  },
  {
    path: '/catalog/details/:id',
    name: 'details',
    component: RoomDetailsPage,
    props: true,
  },
  {
    path: '/:CatchAll(.*)',
    name: 404,
    component: Error404Page,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    return {
      top: 0,
    };
  },
});

// app.use(router);
export default router;
