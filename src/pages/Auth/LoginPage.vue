<script setup lang="ts">
import { reactive } from 'vue';
import { ref } from 'vue';
import type { ILoginData } from '@/interfaces/Auth/LoginDataInterface';
import { authService } from '@/http/services/AuthService';
import { useClientStore } from '@/stores/ClientStore';
import { useCartStore } from '@/stores/CartStore';
import router from '@/router';
// Component Script

const loginBody = {
  email: '',
  password: '',
  confirmPassword: '',
};

const loginTypes = {
  password: 'password',
  email: 'email',
  confirmPassword: 'password',
};

const LoginData = ref<ILoginData>(loginBody);

const Login = async () => {
  if (LoginData.value.password !== LoginData.value.confirmPassword) {
    return "Confirmation password doesn't match!";
  }

  const clientStore = useClientStore();

  const { data } = await authService.login(LoginData.value);

  clientStore.data = data.client;

  router.push('/');
};
</script>

<template>
  <form
    class="w-[600px] flex justify-center flex-col items-center h-[400px] bg-white rounded-md shadow-md"
    @submit.prevent="Login"
  >
    <div class="w-3/5 flex my-2 justify-between" v-for="(item, index) in LoginData" :key="index">
      <label :for="index" class="text-black">{{ index }}</label>
      <input
        :id="index"
        :type="loginTypes[index]"
        class="text-black w-3/5"
        v-model="LoginData[index]"
      />
    </div>
    <button @click="Login" class="bg-black">ENVIAR</button>
  </form>
</template>

<style>
/* Component CSS */
</style>
