<script setup>

</script>

<template>
    <h1 class="font-bold text-xl text-center">Vue.js Portfolio Website</h1>

    <div class="flex mb-10">
      <a target="_blank" href="https://github.com/austin-mel/portfolio-website">
        <button class="bg-transparent font-bold h-32 text-theme-blue py-2 px-20 mx-10 my-5 border-2 border-theme-blue rounded-full w-auto xxs:w-72 xs:w-96 hover:bg-dark-beige ">View Repo</button>
      </a>
    </div>

    <div class="hidden xxs:flex w-full text-center justify-center">
      <h1 class="hidden lg:flex bg-theme-blue text-dark-beige px-10 py-2 rounded-full text-xl mx-8 lg:mx-28 2xl:mx-80">Project Information</h1>
    </div>
    <div class="hidden xxs:flex w-full">
      <div class="hidden lg:block mt-10 h-screen w-full bg-theme-blue mx-2 my-2 px-5 py-6 text-white text-2xl content-center">
        <p class="font-bold underline underline-offset-4">Objective:</p>
        <p class="pt-2 pb-10">This website was custom designed and built by Austin Melendez using the Vuejs front-end framework and Tailwind CSS for styling. It is hosted on my custom domain using Github pages.
        Vuejs is a library used to build versatile, approachable, interactive and lightweight web applications. This website uses conditional rendering to allow quick and dynamic interaction with the site.
        Additionally,  this website is fully responsive to mobile and tablet screen sizes, elements will dynamically change at different breakpoints to maintain useability no matter the screen size.</p>
        <p class="font-bold underline underline-offset-4">Technology Stack:</p>
        <ul>
          <li>Vuejs (Front-end)</li>
          <li>Tailwind CSS (Styling framework)</li>
          <li>Github Pages (Hosting)</li>
        </ul>
      </div>
    </div>
</template>