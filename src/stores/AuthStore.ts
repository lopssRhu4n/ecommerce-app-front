import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLogged = ref(false);
  const apiToken = ref<string | null>('');

  const checkIsLogged = () => {
    const local = localStorage.getItem('apiToken');
    console.log(local);

    if (local) {
      apiToken.value = local;

      return true;
    }

    return false;
  };

  return { isLogged, apiToken, checkIsLogged };
});
