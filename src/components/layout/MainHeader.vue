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
    <div
      class="text-lg uppercase col-span-2 flex items-center tracking-wide gap-x-4 justify-center"
    >
      <div>
        <button
          data-testid="categories-toggle"
          class="transition-all p-2 hover:bg-white hover:text-black"
          @click="toggleCategoriesPopUp"
        >
          CATEGORIES
        </button>
        <div
          v-if="showCategoriesPopUp"
          data-testid="categories-preview"
          class="absolute top-[110%] z-[2] shadow-lg"
        >
          <router-link
            v-for="category in categoriesPreview"
            :key="category.id"
            class="block bg-white text-black"
            :to="`/category/${category.id}`"
            :data-testid="'category-preview-' + category.id"
            @click="showCategoriesPopUp = false"
          >
            {{ category.name }}
          </router-link>
        </div>
      </div>
      <div class="transition-all hover:bg-white hover:text-black p-2">
        <router-link to="/bestsellers">Best Sellers</router-link>
      </div>
      <div class="transition-all hover:bg-white hover:text-black p-2">
        <router-link to="/discounts">DISCOUNTS</router-link>
      </div>
    </div>
    <div
      v-if="!clientStore.data"
      class="text-lg uppercase col-span-2 flex items-center justify-end gap-x-4"
    >
      <button class="hover:bg-white hover:text-gray-800 transition-all p-4">
        <router-link to="/auth/register">Register</router-link>
      </button>
      <button class="hover:bg-white hover:text-gray-800 transition-all p-4">
        <router-link to="/auth/login">Login</router-link>
      </button>
    </div>
    <div v-else class="text-lg uppercase col-span-2 flex items-center justify-end gap-x-4">
      <button
        data-testid="cart-toggle"
        class="hover:bg-white hover:text-gray-800 transition-all"
        @click="toggleCartPopUp"
      >
        Cart
      </button>
      <div
        data-testid="cart-preview"
        class="h-50 w-50 z-[1] absolute top-20 bg-black p-5"
        v-if="showCartPopUp"
      >
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
