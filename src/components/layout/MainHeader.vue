<script setup lang="ts">
import { useClientStore } from '@/stores/ClientStore';
import type { ICategoryPreview } from '@/interfaces/CategoryPreviewInterface';
import { onMounted, ref } from 'vue';
import { CategoryService } from '@/http/services/CategoryService';

const clientStore = useClientStore();
const showCartPopUp = ref(false);
const showCategoriesPopUp = ref(false);

const categoriesPreview = ref<ICategoryPreview[]>();
const fetchCategoriesPreview = async () => {
  const { data } = await CategoryService.getAllCategoriesPreview();

  categoriesPreview.value = data;
};

const toggleCartPopUp = () => (showCartPopUp.value = !showCartPopUp.value);
const toggleCategoriesPopUp = () => (showCategoriesPopUp.value = !showCategoriesPopUp.value);

onMounted(() => {
  fetchCategoriesPreview();
});
</script>

<template>
  <header class="w-full relative grid grid-cols-6 justify-between px-5 h-[100px] bg-black">
    <div class="text-xl uppercase col-span-2 flex items-center justify-start">
      <router-link to="/">Logo</router-link>
    </div>
    <div class="text-lg uppercase col-span-2 flex items-center gap-x-2 justify-center">
      <div>
        <button @click="toggleCategoriesPopUp">Categories</button>
        <div v-if="showCategoriesPopUp" class="absolute top-[110%] z-[2] shadow-lg">
          <router-link
            v-for="category in categoriesPreview"
            :key="category.id"
            class="block bg-white text-black"
            :to="`/category/${category.id}`"
            @click="showCategoriesPopUp = false"
          >
            {{ category.name }}
          </router-link>
        </div>
      </div>
      <span>|</span>
      <p>Content</p>
      <span>|</span>
      <p>Content</p>
    </div>
    <div
      v-if="!clientStore.data"
      class="text-lg uppercase col-span-2 flex items-center justify-end gap-x-4"
    >
      <button class="hover:bg-white hover:text-gray-800 transition-all">
        <a href="/auth/register">Register</a>
      </button>
      <button class="hover:bg-white hover:text-gray-800 transition-all">
        <a href="/auth/login">Login</a>
      </button>
    </div>
    <div v-else class="text-lg uppercase col-span-2 flex items-center justify-end gap-x-4">
      <button class="hover:bg-white hover:text-gray-800 transition-all" @click="toggleCartPopUp">
        Cart
      </button>
      <div class="h-50 w-50 z-[1] absolute top-20 bg-black p-5" v-if="showCartPopUp">
        <h1>Amount: {{ clientStore.data?.cart.amount }}</h1>
        <h2>Shipping: {{ clientStore.data?.cart.shipping }}</h2>
        <div v-if="clientStore.data?.cart.products">
          <h2>{{ clientStore.data.cart.products[0].name }}</h2>
          <h2 v-if="clientStore.data.cart.products.length > 1">
            {{ clientStore.data.cart.products.length - 1 }} more...
          </h2>
        </div>

        <h2 v-else>Empty Cart</h2>
      </div>
      <button class="hover:bg-white hover:text-gray-800 transition-all">
        {{ clientStore.data.name }}
      </button>
    </div>
  </header>
</template>

<style>
/* Component CSS */
</style>
