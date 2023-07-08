<script setup lang="ts">
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col items-center bg-gray-800">
    <MainHeader />
    <RouterView class="min-h-screen" />
    <MainFooter />
  </div>
</template>

<style>
/* Component CSS */
</style>
