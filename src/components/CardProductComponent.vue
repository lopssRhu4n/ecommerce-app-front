<script setup lang="ts">
import type { IProduct } from '@/interfaces/ProductInterface';
import { addProductToCart } from '@/composables/AddProductToCart';
const props = defineProps<{ product: IProduct }>();
</script>

<template>
  <div
    class="col-span-1 rounded-lg h-[400px] w-3/5 px-3 bg-white mx-auto flex flex-col gap-y-5 justify-center items-center text-center shadow-lg shadow-black"
  >
    <h2 class="text-xl font-bold text-black">
      <router-link :to="`/product/${props.product.id}`"> {{ props.product.name }}</router-link>
    </h2>
    <h2 class="text-2xl text-black">{{ props.product.price }}</h2>
    <small class="text-black">{{ props.product.description }}</small>
    <small class="text-black">{{ props.product.likes }}</small>
    <button @click="addProductToCart(props.product.id)" class="bg-black px-4 py-2">
      Add to Cart
    </button>
  </div>
</template>

<style>
/* Component CSS */
</style>
