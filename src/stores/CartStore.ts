import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { ICart } from '@/interfaces/CartInterface';

export const useCartStore = defineStore('cart', () => {
  const data = ref<ICart>();
  const getData = computed(() => data.value);

  return { data, getData };
});
