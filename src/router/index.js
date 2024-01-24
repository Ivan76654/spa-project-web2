import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewPostView from '../views/NewPostView.vue';
import PostView from '../views/PostView.vue';
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'NewPost',
      component: NewPostView
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: PostView,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
});

export default router;
