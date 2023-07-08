import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isLogged = ref(false);
  const apiToken = ref<string | null>('');
  const changeIsLogged = async (val: boolean) => {
    if (val) {
      isLogged.value = val;
    }
  };

  return { isLogged, apiToken, changeIsLogged };
});
