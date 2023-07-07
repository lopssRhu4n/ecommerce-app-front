import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { authGuard } from './authGuard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(authGuard);

export default router;
