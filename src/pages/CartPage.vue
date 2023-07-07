<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';
import { onMounted, reactive } from 'vue';

const userStore = useUserStore();
</script>

<template>
  <div class="w-full grid grid-cols-8">
    <div
      v-if="userStore.data?.client.cart.products"
      class="col-span-5 flex gap-x-2 justify-center flex-col h-full bg-white"
    >
      <div
        v-for="product in userStore.data.client.cart.products"
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
