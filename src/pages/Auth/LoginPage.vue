<script setup lang="ts">
import { ref } from 'vue';
import type { ILoginData } from '@/interfaces/Auth/LoginDataInterface';
import { authService } from '@/http/services/AuthService';
import { useUserStore } from '@/stores/UserStore';
import router from '@/router';
import { useAuthStore } from '@/stores/AuthStore';
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

const loginAutocomplete = {
  password: 'new-password',
  email: 'email',
  confirmPassword: 'new-password',
};

const LoginData = ref<ILoginData>(loginBody);

const Login = async () => {
  if (LoginData.value.password !== LoginData.value.confirmPassword) {
    return "Confirmation password doesn't match!";
  }

  const userStore = useUserStore();
  const authStore = useAuthStore();

  const { data } = await authService.login(LoginData.value);

  userStore.data = data.data;
  localStorage.setItem('apiToken', data.auth_token);
  authStore.apiToken = data.auth_token;

  router.push('/');
};
</script>

<template>
  <form
    class="w-[800px] relative flex justify-center flex-col items-center h-[500px] bg-white rounded-md shadow-md"
    @submit.prevent="Login"
  >
    <div class="w-1/2 absolute h-full bg-red-800 left-0"></div>
    <div
      class="w-3/5 flex my-2 justify-between z-10"
      v-for="(_item, index) in LoginData"
      :key="index"
    >
      <label :for="index" class="text-center text-black uppercase font-bold">{{ index }}</label>
      <input
        :autocomplete="loginAutocomplete[index]"
        :id="index"
        :type="loginTypes[index]"
        class="text-black p-1 outline-none flex w-3/5 pt-4 rounded-sm"
        v-model="LoginData[index]"
      />
    </div>
    <button
      @click="Login"
      class="p-4 z-10 border-black transition-all bg-black text-gray-200 mt-4 rounded-sm uppercase font-bold border hover:text-black hover:bg-white hover:border-black"
    >
      ENVIAR
    </button>
  </form>
</template>

<style>
/* Component CSS */
</style>
