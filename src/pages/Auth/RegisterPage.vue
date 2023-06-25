<script setup lang="ts">
import { ref } from 'vue';
import type { IRegisterData } from '@/interfaces/RegisterDataInterface';
import RepositoriesFactory from '@/http/RepositoriesFactory';
import { useClientStore } from '@/stores/ClientStore';
import router from '@/router';

const AuthRepo = RepositoriesFactory.get('auth');
const store = useClientStore();

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
    const { data } = await AuthRepo.register(register.value);
    store.data = data.client;
    router.push('/');
  } catch (error: any) {
    console.log(error.response.data);
  }
};
</script>

<template>
  <form
    class="w-[600px] flex justify-center flex-col items-center h-[400px] bg-white rounded-md shadow-md"
    @submit.prevent="sendRegister"
  >
    <div class="w-3/5 flex my-2 justify-between" v-for="(item, index) in register" :key="index">
      <label :for="index" class="text-black">{{ index }}</label>
      <input
        :id="index"
        :type="registerInputsTypes[index]"
        class="text-black w-3/5"
        v-model="register[index]"
      />
    </div>
    <button class="text-black bg-green-800">Submit</button>
  </form>
</template>

<style>
/* Component CSS */
</style>
