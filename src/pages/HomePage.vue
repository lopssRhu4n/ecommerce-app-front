<script setup lang="ts">
import { useProductStore } from '@/stores/ProductStore';
import RepositoriesFactory from '@/http/RepositoriesFactory';
import { onMounted } from 'vue';
// import { reactive } from 'vue';
// Component Script

const productStore = useProductStore();
const ProductRepo = RepositoriesFactory.get('product');

const fetchProducts = async () => {
  const { data } = await ProductRepo.getProducts();
  productStore.data = data;
};

onMounted(() => {
  fetchProducts();
})

</script>

<template>
  <h1>HomePage!!</h1>
  <div class="w-3/4 h-screen bg-green-300 text-4xl items-center text-center text-red-800">
    CAROUSEL IMAGES
  </div>
  <div class="w-3/4 h-screen bg-blue-300 text-4xl items center text-center text-yellow-800">
    MAIN PRODUCTS
  </div>
</template>

<style>
/* Component CSS */
</style>
