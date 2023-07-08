<script setup lang="ts">
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { authService } from '@/http/services/AuthService';
// Component Script

const authStore = useAuthStore();

onMounted(async () => {
  if (authStore.isLogged) {
    try {
      const { data } = await authService.retrieveUserData();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
});
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
