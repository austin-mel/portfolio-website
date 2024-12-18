<script setup>
import Weather from "./Projects/Weather.vue";
import SIRModel from "./Projects/SIRModel.vue";
import Genes from "./Projects/Genes.vue";
import { ref } from "vue";
import Mars from "./Projects/Mars.vue";
import Pharma from "./Projects/Pharma.vue";
import Houses from "./Projects/Houses.vue";
import Mobile from "./Mobile.vue";

const ProjectSection = ref('DA');
const ProjectVisible = ref('Weather');
</script>

<template>
  <div class="inline-grid xs:flex justify-center w-full h-full">
    <button v-if="ProjectSection !== 'DA'" @click="ProjectSection = 'DA',ProjectVisible = 'Weather'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-2 border-b-4 border-theme-blue md:w-3/12 h-full">
    Data Analysis
    </button>
    <button v-if="ProjectSection === 'DA'" @click="ProjectSection = 'DA',ProjectVisible = 'Weather'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-2 border-b-4 border-theme-blue md:w-3/12 h-full">
    Data Analysis
    </button>
    <button v-if="ProjectSection !== 'ML'" @click="ProjectSection = 'ML',ProjectVisible = 'Houses'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-2 border-b-4 border-theme-blue md:w-3/12 h-full">
    Machine Learning
    </button>
    <button v-if="ProjectSection === 'ML'" @click="ProjectSection = 'ML',ProjectVisible = 'Houses'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-2 border-b-4 border-theme-blue md:w-3/12 h-full">
    Machine Learning
    </button>
    <button v-if="ProjectSection !== 'SE'" @click="ProjectSection = 'SE',ProjectVisible = 'Pharma'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-2 border-b-4 border-theme-blue md:w-3/12 h-full">
    Software Engineering
    </button>
    <button v-if="ProjectSection === 'SE'" @click="ProjectSection = 'SE',ProjectVisible = 'Pharma'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-2 border-b-4 border-theme-blue md:w-3/12 h-full">
    Software Engineering
    </button>
  </div>

  <div class="justify-center h-full my-10">
    <div v-if="ProjectSection === 'DA'" class="justify-items-center">
      <div class="hidden md:flex">
      <div v-if="ProjectVisible !== 'Weather'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="whitespace-normal text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Weather Data Analysis</h1>
          <button @click="ProjectVisible = 'Weather'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'Weather'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Weather Data Analysis</h1>
          <button @click="ProjectVisible = 'Weather'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible !== 'SIR'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">SIR Model Simulation</h1>
          <button @click="ProjectVisible = 'SIR'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'SIR'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">SIR Model Simulation</h1>
          <button @click="ProjectVisible = 'SIR'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible !== 'Genes'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Gene Expression Analysis</h1>
          <button @click="ProjectVisible = 'Genes'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'Genes'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Gene Expression Analysis</h1>
          <button @click="ProjectVisible = 'Genes'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
    </div>
    <div class="relative md:hidden">
      <button @click="ProjectVisible = 'Weather'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">Weather Data</button>
      <button @click="ProjectVisible = 'SIR'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">SIR Model</button>
      <button @click="ProjectVisible = 'Genes'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">Gene Analysis</button>
    </div>

      <div class="flex w-full justify-center mt-20">
        <div v-if="ProjectVisible === 'Weather'" class="justify-items-center">
          <Mobile />
        </div>
        <div v-else-if="ProjectVisible === 'SIR'" class="justify-items-center">
          <SIRModel/>
        </div>
        <div v-else-if="ProjectVisible === 'Genes'" class="justify-items-center">
          <Genes/>
        </div>
      </div>
    </div>
    <div v-if="ProjectSection === 'ML'" class="justify-items-center">
      <div class="hidden md:flex">
      <div v-if="ProjectVisible !== 'Houses'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="whitespace-normal text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">House Price Prediction</h1>
          <button @click="ProjectVisible = 'Houses'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'Houses'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">House Price Prediction</h1>
          <button @click="ProjectVisible = 'Houses'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible !== 'Mars'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Mars Landmark Classification</h1>
          <button @click="ProjectVisible = 'Mars'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'Mars'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Mars Landmark Classification</h1>
          <button @click="ProjectVisible = 'Mars'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
    </div>
    <div class="relative md:hidden">
      <button @click="ProjectVisible = 'Houses'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">House Prices</button>
      <button @click="ProjectVisible = 'Mars'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">Mars Landmarks</button>
    </div>

      <div class="flex w-full justify-center mt-20">
        <div v-if="ProjectVisible === 'Houses'" class="justify-items-center">
          <Houses/>
        </div>
        <div v-else-if="ProjectVisible === 'Mars'" class="justify-items-center">
          <Mars/>
        </div>
      </div>
    </div>
    <div v-if="ProjectSection === 'SE'" class="justify-items-center">
      <div class="hidden md:flex">
      <div v-if="ProjectVisible !== 'Pharma'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="whitespace-normal text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Pharmaceutical Trial Portal</h1>
          <button @click="ProjectVisible = 'Pharma'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'Pharma'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">Pharmaceutical Trial Portal</h1>
          <button @click="ProjectVisible = 'Pharma'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible !== 'Portfolio'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-dark-beige border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">VueJS Portfolio Website</h1>
          <button @click="ProjectVisible = 'Portfolio'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
      <div v-if="ProjectVisible === 'Portfolio'" class="inline-block mx-5 px-5 py-5 w-48 h-64 lg:w-60 lg:h-80 rounded bg-theme-blue border-theme-blue border-4">
          <h1 class="text-center text-lg mb-16 lg:text-2xl lg:mb-36 text-white">VueJS Portfolio Website</h1>
          <button @click="ProjectVisible = 'Portfolio'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
      </div>
    </div>
    <div class="relative md:hidden">
      <button @click="ProjectVisible = 'Pharma'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">Pharma Trial</button>
      <button @click="ProjectVisible = 'Portfolio'" class="w-full bg-theme-blue font-bold text-white my-2 py-2 px-10 rounded-full">Portfolio Website</button>
    </div>

      <div class="flex w-full justify-center mt-20">
        <div v-if="ProjectVisible === 'Pharma'" class="justify-items-center">
          <Pharma/>
        </div>
        <div v-else-if="ProjectVisible === 'Portfolio'" class="justify-items-center">
          test
        </div>
      </div>
    </div>
      
  </div>
</template>