<script setup lang="ts">
import { reactive } from 'vue';
import MainHeader from '@/components/layout/MainHeader.vue';
import { RouterView } from 'vue-router';
// Component Script
</script>

<template>
  <div class="w-screen flex flex-col items-center bg-gray-800">
    <MainHeader />
    <RouterView />
  </div>
</template>

<style>
/* Component CSS */
</style>
