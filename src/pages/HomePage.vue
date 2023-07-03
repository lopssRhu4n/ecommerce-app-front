<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';
import { onMounted } from 'vue';
import CardProductComponentVue from '@/components/CardProductComponent.vue';
import { ProductService } from '@/http/services/ProductService';

const productStore = useProductStore();

const fetchProducts = async () => {
  const { data } = await ProductService.getProducts();
  productStore.data = data;
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div class="w-3/4 h-screen bg-green-300 text-4xl items-center text-center text-red-800">
    CAROUSEL IMAGES
  </div>
  <div class="w-3/4 py-4 bg-blue-300 grid gap-5 grid-cols-2 text-yellow-800">
    <CardProductComponentVue
      v-for="(product, index) in productStore.data"
      :key="index"
      :product="product"
    />
  </div>
</template>

<style>
/* Component CSS */
</style>
