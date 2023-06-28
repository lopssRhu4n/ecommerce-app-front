<script setup lang="ts">
import { useClientStore } from '@/stores/ClientStore';

const store = useClientStore();
// Component Script
</script>

<template>
  <header class="w-full grid grid-cols-6 justify-between px-5 h-[100px] bg-black">
    <div class="text-xl uppercase col-span-2 flex items-center justify-start">Logo</div>
    <div class="text-lg uppercase col-span-2 flex items-center gap-x-2 justify-center">
      <p>Content</p>
      <span>|</span>
      <p>Content</p>
      <span>|</span>
      <p>Content</p>
    </div>
    <div
      v-if="!store.data"
      class="text-lg uppercase col-span-2 flex items-center justify-end gap-x-4"
    >
      <button class="hover:bg-white hover:text-gray-800 transition-all">
        <a href="/auth/register">Register</a>
      </button>
      <button class="hover:bg-white hover:text-gray-800 transition-all">Login</button>
    </div>
    <div v-else class="text-lg uppercase col-span-2 flex items-center justify-end gap-x-4">
      <button class="hover:bg-white hover:text-gray-800 transition-all">Cart</button>
      <button class="hover:bg-white hover:text-gray-800 transition-all">
        {{ store.data.name }}
      </button>
    </div>
  </header>
</template>

<style>
/* Component CSS */
</style>
