<script setup lang="ts">
import { defineProps } from 'vue';
import type { IProduct } from '@/interfaces/ProductInterface';
import { CartService } from '@/http/services/CartService';
import { useClientStore } from '@/stores/ClientStore';
import router from '@/router';
const props = defineProps<{ product: IProduct }>();

const clientStore = useClientStore();

const addProductToCart = () => {
  if (clientStore.data?.cart.id) {
    const cart_id = clientStore.data.cart.id;
    CartService.addProductToCart({ product_id: props.product.id, cart_id: cart_id });
  } else {
    router.push('login');
  }
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
