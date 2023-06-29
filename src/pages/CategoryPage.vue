<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { CategoryService } from '../http/services/CategoryService';
import CardProductComponent from '@/components/CardProductComponent.vue';
import type { ICategory } from '@/interfaces/CategoryInterface';

const props = defineProps<{ id: number }>();

const categoryData = ref<ICategory>();

const fetchCategory = async () => {
  try {
    const { data } = await CategoryService.getCategory(props.id);

    categoryData.value = data;
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

    <div
      class="col-span-1 h-[400px] bg-blue-300 w-2/5 mx-auto flex flex-col gap-y-5 justify-center items-center text-center"
      v-for="product in categoryData?.products"
      :key="product.id"
    >
      <CardProductComponent :product="product" />
    </div>
  </div>
</template>

<style>
/* Component CSS */
</style>
