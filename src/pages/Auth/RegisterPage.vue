<script setup lang="ts">
import { reactive, ref } from 'vue';
const username = ref<string>("");
</script>

<template>
  <form class="w-[600px] flex justify-center items-center h-[400px] bg-white rounded-md shadow-md">
    {{username}}
    <input type="text" class="border-black w-10 h-6 bg-blue" :model="username">
  </form>

</template>

<style>
/* Component CSS */
</style>

