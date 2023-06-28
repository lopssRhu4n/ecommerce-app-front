<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue';
import type { ILoginData } from '@/interfaces/Auth/LoginDataInterface';
// Component Script

const loginBody = {
  password: '',
  email: '',
  confirmPassword: '',
};

const LoginData = ref<ILoginData>(loginBody);

const Login = async () => {
  if (LoginData.value.password !== LoginData.value.confirmPassword) {
    return "Confirmation password doesn't match!";
  }
};
</script>

<template>
  <form
    class="w-[600px] flex justify-center flex-col items-center h-[400px] bg-white rounded-md shadow-md"
    @submit.prevent=""
  ></form>
</template>

<style>
/* Component CSS */
</style>
