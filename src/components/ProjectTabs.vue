<script setup>
import ProjectCards from './ProjectCards.vue'
import { ref } from "vue";

const Project = ref('DA');
</script>

<template>
  <div class="flex justify-center w-full h-16">
    <button v-if="Project !== 'DA'" @click="Project = 'DA'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Data Analysis
  </button>
  <button v-if="Project === 'DA'" @click="Project = 'DA'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Data Analysis
  </button>
  <button v-if="Project !== 'ML'" @click="Project = 'ML'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Machine Learning
  </button>
  <button v-if="Project === 'ML'" @click="Project = 'ML'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Machine Learning
  </button>
  <button v-if="Project !== 'SE'" @click="Project = 'SE'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Software Engineering
  </button>
  <button v-if="Project === 'SE'" @click="Project = 'SE'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Software Engieering
  </button>
  </div>

  <div class="w-full h-96 bg-light-beige">
      <div v-if="Project === 'DA'">
        
      </div>
      <div v-else-if="Project === 'ML'">

      </div>
      <div v-else-if="Project === 'SE'">

      </div>
    </div>
</template>
  