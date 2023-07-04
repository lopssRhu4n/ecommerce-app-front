<script setup lang="ts">
import type { IProduct } from '@/interfaces/ProductInterface';
import { addProductToCart } from '@/composables/AddProductToCart';
const props = defineProps<{ product: IProduct }>();
</script>

<template>
  <div
    class="col-span-1 pb-3 w-3/5 bg-white mx-auto flex flex-col gap-y-5 justify-center items-center text-center shadow-lg shadow-black hover:scale-110 transition-all hover:z-20"
  >
    <img
      :src="'http://localhost/storage/' + props.product.image"
      :alt="props.product.name + ' image'"
    />
    <h2 class="text-xl font-bold text-black">
      <router-link :to="`/product/${props.product.id}`"> {{ props.product.name }}</router-link>
    </h2>
    <div class="w-4/5 h-[80px] flex justify-between flex-col">
      <small class="text-black">{{ props.product.description }}</small>
      <small class="text-black"
        ><i class="text-black fas fa-heart mr-4"></i>{{ props.product.likes }}</small
      >
    </div>
    <div class="flex w-full justify-around items-center">
      <h2 class="text-xl text-black font-bold">${{ props.product.price }}</h2>
      <button
        @click="addProductToCart(props.product.id)"
        class="bg-transparent px-4 w-3/5 text-black font-bold rounded-md border border-black py-2 transition-all hover:bg-black hover:border-white hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<style>
/* Component CSS */
</style>
