import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
console.log(import.meta.env.VITE_PUBLIC_PATH);

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes,
});

export default router;
