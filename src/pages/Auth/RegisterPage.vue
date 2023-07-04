<script setup lang="ts">
import { ref } from 'vue';
import type { IRegisterData } from '@/interfaces/Auth/RegisterDataInterface';
import { authService } from '@/http/services/AuthService';
import { useClientStore } from '@/stores/ClientStore';
import router from '@/router';

const clientStore = useClientStore();

const register = ref<IRegisterData>({
  name: '',
  email: '',
  password: '',
  cpf: '',
  phone: '',
  birthdate: '',
});

const registerInputsTypes = {
  name: 'text',
  email: 'email',
  password: 'password',
  cpf: 'text',
  phone: 'text',
  birthdate: 'date',
};

const sendRegister = async () => {
  try {
    const { data } = await authService.register(register.value);
    clientStore.data = data.client;
    router.push('/');
  } catch (error: any) {
    console.log(error.response.data);
  }
};
</script>

<template>
  <form
    class="w-[800px] flex justify-center flex-row items-center h-[500px] bg-white rounded-md shadow-md"
    @submit.prevent="sendRegister"
  >
    <div class="w-2/5 h-full p-10 bg-red-600 rounded-l-md"></div>
    <div class="w-3/5 p-10 h-full flex justify-center gap-y-1 flex-col">
      <div class="flex my-2 justify-between" v-for="(_item, index) in register" :key="index">
        <label :for="index" class="text-black uppercase font-bold">{{ index }}</label>
        <input
          :id="index"
          :type="registerInputsTypes[index]"
          class="text-black p-1 outline-none w-3/5 rounded-sm"
          v-model="register[index]"
        />
      </div>
      <button
        class="p-4 transition-all bg-black text-gray-200 mt-4 rounded-sm uppercase font-bold border hover:text-black hover:bg-white hover:border-black"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<style>
/* Component CSS */
</style>
