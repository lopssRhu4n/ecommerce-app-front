<script setup lang="ts">
import { useClientStore } from '@/stores/ClientStore';
import { onMounted, reactive } from 'vue';

const clientStore = useClientStore();
</script>

<template>
  <div class="w-full grid grid-cols-8">
    <div
      v-if="clientStore.data?.cart.products"
      class="col-span-5 flex gap-x-2 justify-center flex-col h-full bg-white"
    >
      <div
        v-for="product in clientStore.data.cart.products"
        class="flex flex-row"
        :key="product.id"
      >
        <img
          :src="'http://localhost/storage/' + product.image"
          class="h-[220px]"
          :alt="product.name + 'image'"
        />
        <h1 class="text-black">{{ product.name }}</h1>
        <h2>{{ product.description }}</h2>
      </div>
    </div>
    <div class="col-span-3 h-full bg-green-800"></div>
  </div>
</template>

<style>
/* Component CSS */
</style>
