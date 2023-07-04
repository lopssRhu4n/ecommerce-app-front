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
  <section class="flex p-6 justify-center items-center">
    <div
      class="h-[90vh] w-[90%] transition flex justify-center ease-in-out rounded-md duration-1000 relative"
      :style="'background-color: ' + images[slideIndex] + ';'"
    >
      <div
        @click="prevImage"
        class="absolute h-full top-0 flex items-center justify-center left-0 w-20 cursor-pointer transition-all arrow hover:bg-gradient-to-r hover:from-black hover:to-transparent"
      >
        <i class="fas fa-arrow-left"></i>
      </div>

      <div
        @click="nextImage"
        class="absolute h-full top-0 flex items-center justify-center right-0 w-20 cursor-pointer transition-all arrow hover:bg-gradient-to-l hover:from-black hover:to-transparent"
      >
        <i class="fas fa-arrow-right"></i>
      </div>

      <div class="h-4 w-20 flex justify-between absolute bottom-10">
        <div
          v-for="(_image, index) in images"
          :key="index"
          class="w-4 h-4 rounded-full border border-black transition-all"
          :style="slideIndex == index ? 'background-color: white' : ''"
        ></div>
      </div>
    </div>
  </section>
</template>

<style></style>
