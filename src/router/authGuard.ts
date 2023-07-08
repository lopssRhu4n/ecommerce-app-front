import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore';

export const authGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.apiToken) {
    window.alert('Not logged!');
    return from;
  }

  return;
};
