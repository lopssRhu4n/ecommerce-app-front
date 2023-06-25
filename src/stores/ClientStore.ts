import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { IRegisterData } from '@/interfaces/RegisterDataInterface';

export const useClientStore = defineStore('client', () => {
  const data = ref<IRegisterData>();
  const getData = computed(() => data.value);

  return { data, getData };
});
