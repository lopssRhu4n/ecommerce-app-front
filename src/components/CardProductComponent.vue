<script setup lang="ts">
import type { IProduct } from '@/interfaces/ProductInterface';
import { addProductToCart } from '@/composables/AddProductToCart';
const props = defineProps<{ product: IProduct }>();

</script>

<template>
  <h2 class="text-xl text-black"> <router-link :to="`/product/${props.product.id}`"> {{ props.product.name }}</router-link> </h2>
  <h2 class="text-2xl text-black">{{ props.product.price }}</h2>
  <small class="text-black">{{ props.product.description }}</small>
  <small class="text-black">{{ props.product.likes }}</small>
  <button @click="addProductToCart(props.product.id)" class="bg-black px-4 py-2">Add to Cart</button>
</template>

<style>
/* Component CSS */
</style>
