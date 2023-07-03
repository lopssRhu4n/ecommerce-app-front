<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { CategoryService } from '../http/services/CategoryService';
import CardProductComponent from '@/components/CardProductComponent.vue';
import type { ICategory } from '@/interfaces/CategoryInterface';
import { useTitle } from '@vueuse/core';

const props = defineProps<{ id: string }>();
const title = useTitle('', { titleTemplate: '%s | Ecommerce App' });

const categoryData = ref<ICategory>();

const fetchCategory = async () => {
  try {
    const { data } = await CategoryService.getCategory(props.id);

    categoryData.value = data;
    title.value = categoryData.value?.name;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchCategory();
});
</script>

<template>
  <div class="min-h-screen grid grid-cols-2">
    <div class="w-full h-[100px] col-span-2 mt-4 text-center">
      <h1 class="text-2xl font-bold">{{ categoryData?.name }}</h1>
    </div>

    <CardProductComponent
      v-for="product in categoryData?.products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style>
/* Component CSS */
</style>
