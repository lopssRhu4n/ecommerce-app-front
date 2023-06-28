<script setup lang="ts">
import { defineProps } from 'vue';
import type { IProduct } from '@/interfaces/ProductInterface';
import { CartService } from '@/http/services/CartService';
import { useClientStore } from '@/stores/ClientStore';
const props = defineProps<{ product: IProduct }>();

const clientStore = useClientStore();

const addProductToCart = () => {
  const clientID = clientStore.data;
  CartService.addProductToCart({ productID: 0, clientID: 0 });
};
</script>

<template>
  <h2 class="text-xl text-black">{{ props.product.name }}</h2>
  <h2 class="text-2xl text-black">{{ props.product.price }}</h2>
  <small class="text-black">{{ props.product.description }}</small>
  <small class="text-black">{{ props.product.likes }}</small>
  <button @click="addProductToCart" class="bg-black px-4 py-2">Add to Cart</button>
</template>

<style>
/* Component CSS */
</style>
