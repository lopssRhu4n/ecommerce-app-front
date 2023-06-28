import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IClient } from '@/interfaces/ClientInterface';

export const useClientStore = defineStore('client', () => {
  const data = ref<IClient>();
  const getData = computed(() => data.value);

  return { data, getData };
});
