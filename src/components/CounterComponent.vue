<script setup lang="ts">
import { reactive, ref } from 'vue';

const number = ref<number>(0);

const increment = () => { number.value++ };
const decrement = () => { number.value-- };

</script>

<template>
  <p>Current value: {{ number }}</p>

  <button @click="increment" data-type="increment">Increment</button>
  <button @click="decrement" data-type="decrement">Decrement</button>
</template>

<style>
/* Component CSS */
</style>

