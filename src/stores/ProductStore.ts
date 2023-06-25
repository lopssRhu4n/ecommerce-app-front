import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IProduct } from '@/interfaces/ProductInterface'

export const useProductStore = defineStore('product', () => {
  const data = ref<IProduct[]>();

  return { data  }
})  
