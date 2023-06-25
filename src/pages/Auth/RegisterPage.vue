<script setup lang="ts">
import { reactive, ref, type Ref } from 'vue';
import type { registerData } from '@/interfaces/RegisterDataInterface';

const registerData = ref({});
</script>

<template>
  <form class="w-[600px] flex justify-center items-center h-[400px] bg-white rounded-md shadow-md">
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="text" placeholder="Name" />
    <input type="date" placeholder="Birthdate" />
    <input type="text" placeholder="CPF" />
  </form>
</template>

<style>
/* Component CSS */
</style>
