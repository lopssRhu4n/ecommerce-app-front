import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IUser } from '@/interfaces/ClientInterface';

export const useUserStore = defineStore('user', () => {
  const data = ref<IUser>();
  const getData = computed(() => data.value);

  return { data, getData };
});
