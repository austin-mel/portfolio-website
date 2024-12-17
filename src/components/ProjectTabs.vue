<script setup>
import Weather from "./Projects/Weather.vue";
import SIRModel from "./Projects/SIRModel.vue";
import Genes from "./Projects/Genes.vue";
import { ref } from "vue";
import Mars from "./Projects/Mars.vue";
import Pharma from "./Projects/Pharma.vue";
import Houses from "./Projects/Houses.vue";

const ProjectSection = ref('DA');
const ProjectVisible = ref('Weather');
</script>

<template>
  <div class="flex justify-center w-full h-full">
  <button v-if="ProjectSection !== 'DA'" @click="ProjectSection = 'DA',ProjectVisible = 'Weather'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Data Analysis
  </button>
  <button v-if="ProjectSection === 'DA'" @click="ProjectSection = 'DA',ProjectVisible = 'Weather'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Data Analysis
  </button>
  <button v-if="ProjectSection !== 'ML'" @click="ProjectSection = 'ML',ProjectVisible = 'Houses'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Machine Learning
  </button>
  <button v-if="ProjectSection === 'ML'" @click="ProjectSection = 'ML',ProjectVisible = 'Houses'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Machine Learning
  </button>
  <button v-if="ProjectSection !== 'SE'" @click="ProjectSection = 'SE',ProjectVisible = 'Pharma'" class="bg-dark-beige hover:bg-light-beige text-black font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Software Engineering
  </button>
  <button v-if="ProjectSection === 'SE'" @click="ProjectSection = 'SE',ProjectVisible = 'Pharma'" class="bg-theme-blue hover:bg-light-beige text-dark-beige font-bold py-2 px-4 border-b-4 border-theme-blue w-3/12 h-full">
    Software Engieering
  </button>
  </div>

  <div class="justify-center h-full my-10">
      <div v-if="ProjectSection === 'DA'" class="justify-items-center">
        <div v-if="ProjectVisible !== 'Weather'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Weather Data Analysis</h1>
            <button @click="ProjectVisible = 'Weather'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Weather'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Weather Data Analysis</h1>
            <button @click="ProjectVisible = 'Weather'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-if="ProjectVisible !== 'SIR'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">SIR Model Simulation</h1>
            <button @click="ProjectVisible = 'SIR'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'SIR'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">SIR Model Simulation</h1>
            <button @click="ProjectVisible = 'SIR'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-if="ProjectVisible !== 'Genes'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Gene Expression Analysis</h1>
            <button @click="ProjectVisible = 'Genes'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Genes'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Gene Expression Analysis</h1>
            <button @click="ProjectVisible = 'Genes'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>

        <div class="flex w-full justify-center mt-20">
          <div v-if="ProjectVisible === 'Weather'" class="justify-items-center">
            <Weather/>
          </div>
          <div v-else-if="ProjectVisible === 'SIR'" class="justify-items-center">
            <SIRModel/>
          </div>
          <div v-else-if="ProjectVisible === 'Genes'" class="justify-items-center">
            <Genes/>
          </div>
        </div>
      </div>

      <div v-else-if="ProjectSection === 'ML'" class="justify-items-center">
        <div v-if="ProjectVisible !== 'Houses'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">House Price Prediction</h1>
            <button @click="ProjectVisible = 'Houses'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Houses'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">House Price Prediction</h1>
            <button @click="ProjectVisible = 'Houses'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-if="ProjectVisible !== 'Mars'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Mars Landmark Classification</h1>
            <button @click="ProjectVisible = 'Mars'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Mars'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Mars Landmark Classification</h1>
            <button @click="ProjectVisible = 'Mars'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-if="ProjectVisible !== 'Tweets'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Tweet NLP Analysis</h1>
            <button @click="ProjectVisible = 'Tweets'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Tweets'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Tweet NLP Analysis</h1>
            <button @click="ProjectVisible = 'Tweets'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>

        <div class="flex w-full justify-center mt-20">
          <div v-if="ProjectVisible === 'Houses'" class="justify-items-center">
            <Houses/>
          </div>
          <div v-else-if="ProjectVisible === 'Mars'" class="justify-items-center">
            <Mars/>
          </div>
          <div v-else-if="ProjectVisible === 'Tweets'" class="justify-items-center">
            test2
          </div>
        </div>
      </div>

      <div v-else-if="ProjectSection === 'SE'" class="justify-items-center">
        <div v-if="ProjectVisible !== 'Pharma'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Pharmaceutical Trial Portal</h1>
            <button @click="ProjectVisible = 'Pharma'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Pharma'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">Pharmaceutical Trial Portal</h1>
            <button @click="ProjectVisible = 'Pharma'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-if="ProjectVisible !== 'Portfolio'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-dark-beige border-theme-blue border-4">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">VueJs Portfolio Website</h1>
            <button @click="ProjectVisible = 'Portfolio'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        <div v-else-if="ProjectVisible === 'Portfolio'" class="inline-block mx-10 px-5 py-5 w-60 rounded overflow-hidden bg-theme-blue">
          <div class="px-6 py-4 text-center">
            <h1 class="text-xl mb-36 text-white">VueJs Portfolio Website</h1>
            <button @click="ProjectVisible = 'Portfolio'" class="w-full bg-light-beige font-bold text-black py-2 px-10 rounded-full">View Project</button>
          </div>
        </div>
        

        <div class="flex w-full justify-center mt-20">
          <div v-if="ProjectVisible === 'Pharma'" class="justify-items-center">
            <Pharma/>
          </div>
          <div v-else-if="ProjectVisible === 'Portfolio'" class="justify-items-center">
            test3
          </div>
        </div>
      </div>
    </div>
</template>


  