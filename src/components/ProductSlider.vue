<script setup lang="ts">
import { ref } from 'vue';
const slideIndex = ref(0);
const active = ref(0);

// <!-- :style="'background: url(' + require('../assets/' + images[slideIndex] + '.jpg') + ')'" -->
const images = ['red', 'green', 'blue', 'yellow'];

const nextImage = () => {
  if (slideIndex.value == images.length - 1) {
    slideIndex.value = 0;
    return;
  }

  slideIndex.value++;
};

const prevImage = () => {
  if (slideIndex.value == 0) {
    slideIndex.value = images.length - 1;
    return;
  }

  slideIndex.value--;
};
</script>

<template>
  <section class="p-6 flex justify-center items-center">
    <div
      class="h-[90vh] p-10 w-[90%] transition ease-in-out rounded-md duration-1000 relative"
      :style="'background-color: ' + images[slideIndex] + ';'"
    >
      <div @click="prevImage" class="absolute top-1/2 left-10 cursor-pointer">
        <i class="fas fa-arrow-left"></i>
      </div>

      <div @click="nextImage" class="absolute top-1/2 right-10 cursor-pointer">
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  </section>
</template>

<style>
/* Component CSS */
</style>
