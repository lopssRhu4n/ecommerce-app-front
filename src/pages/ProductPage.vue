<script setup lang="ts">
import { ProductService } from '@/http/services/ProductService';
import type { IProduct } from '@/interfaces/ProductInterface';
import { onMounted, ref } from 'vue';
import { addProductToCart } from '@/composables/AddProductToCart';
import { useTitle } from '@vueuse/core';

const product = ref<IProduct>();
const title = useTitle(product.value?.name, { titleTemplate: '%s | Ecommerce App ' });

const props = defineProps<{ id: number }>();

const fetchProduct = async () => {
  const { data } = await ProductService.getSingleProduct(props.id);
  product.value = data;
  title.value = product.value?.name;
};

onMounted(() => {
  fetchProduct();
});
</script>

<template>
  <div class="min-h-screen">
    <h1>Product Page {{ props.id }}</h1>

    <h1>Product Name {{ product?.name }}</h1>

    <button @click="addProductToCart(props.id)">Add To Cart</button>
  </div>
</template>

<style>
/* Component CSS */
</style>
