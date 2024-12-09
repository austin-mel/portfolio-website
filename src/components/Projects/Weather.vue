<script setup>
import { WeatherReport } from '@/assets/DA';
</script>

<template>
    <h1 class="font-bold text-xl text-center">Weather Data Analysis</h1>

    <div class="inline-flex mb-10">
      <a target="_blank" href="https://github.com/austin-mel/weatheranalysis">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <h1 class="absolute left-0 ml-10 bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl">Project Description</h1> 
    <p class="justify-end bg-theme-blue w-6/12 text-dark-beige px-10 py-2 rounded text-xl mb-10 text-center">There are 106,200 stations from around the world containing five weather common measurements: precipitation total (PRCP), snowfall (SNOW), snow base depth (SNWD), max temperature (TMAX), min temperature (TMIN) for each day of the year. Other additional meteorological measurements are included for stations where the data is available. This dataset contains data from 1750 to 2023. This totals over 106 GB of data when uncompressed.</p>

    <h1 class="absolute left-0 ml-10 bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl">Project Report</h1>
    <div class="justify-end mt-10 h-screen w-8/12 bg-theme-blue mx-2 my-2">
      <!--<embed :src="WeatherReport" class="h-full w-full" alt="Report" />-->
      <iframe src="https://drive.google.com/file/d/1_zoizWN73w2zIMHA_bSBvlmk536ZsXyX/preview" class="h-full w-full px-2 py-2"></iframe>
    </div>
</template>
  