<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">SIR Model Simulations</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://github.com/austin-mel/sirmodelsimulation">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Information</h1>
      <h1 class="relative bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Report</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white text-sm xl:text-base content-center">
        <p class="font-bold underline underline-offset-4">Description:</p>
        <p class="pt-2 pb-10">Model the spread of infection through populations using matrices in R. Allow for advanced parameters to be input to create a more sophisticated simulation. Report information and statistics about the simulation after there are no remaining infected cells.
        Allow for a specific simulation setup to be run multiple times, reporting the average statistics over all runs, and allow a specific simulation setup to run a sequence of different infection spread probabilities. Generate a heatmap of multiple runs to identify trends in which
        cells are more or less likely to become infected.</p>

        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">Create an R package that allows the simulation and analysis of different types of disease spread using custom infection, immunity, and mortality rates. </p>

        <p class="font-bold underline underline-offset-4">Approach:</p>
        <p class="pt-2 pb-10">Use matrices to represent a population where each point represents an individual person. Allow users to create a matrix to use via built-in functions, or accept any input given its a valid matrix.
        Allow infection to spread to neighboring cells from already infected cells based on specified infection spread probabilty. Additionally, allow the option to enable fatalities.</p>

        <p class="font-bold underline underline-offset-4">Conclusions:</p>
        <p class="pt-2 pb-10">The package can be used for basic and advanced analysis into patterns and probabilities of infection spread, gaining immunity, fatality, as well as total proportion of healthy, immune, and deceased cells. As shown at the very bottom of the vignette example, the center cells are generally more likely to become infected.

        </p>
      </div>
      <div class="mt-10 h-screen w-full bg-theme-blue mx-2 my-2">
        <iframe src="https://drive.google.com/file/d/1LRkiNA6slHRJKJA21ox7I4GHzooTSYId/preview" class="h-full w-full px-2 py-2"></iframe>
      </div>
    </div>
</template>