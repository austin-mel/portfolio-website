<script setup lang="ts">
import { ref } from "vue";
import { AMLogo, AMSignature, AMInitials } from "../assets/images/index.js"
const current_year = ref(new Date().getFullYear());
const current_page = ref('Home');
</script>

<template>
  <!-- Website Header -->
  <header class="w-full flex items-center">
      <div class="w-auto h-full flex items-center justify-start text-white">
          <RouterLink to="/" class="flex-none overflow-hidden">
              <span class="sr-only">Home</span>
              <img class="h-auto max-w-40" :src="AMLogo" alt="AM Logo">
          </RouterLink>
      </div>
      <!-- This is added to create a space between the logo and the nav buttons -->
      <div class="hidden xxs:flex xxs:flex-1"></div>
      <div class="hidden justify-end xxs:inline-flex xxs:mx-5">
        <!--
        <RouterLink @click="current_page = 'Home'" to="/" class="flex-none overflow-hidden">
            <h1 v-if="current_page === 'Home'" class="mx-1 xs:mx-5 text-theme-blue font-bold text-sm xs:text-base sm:text-3xl hover:text-dark-beige hover:animate-pulse">Home</h1>
            <h1 v-else-if="current_page !== 'Home'" class="mx-1 xs:mx-5 text-theme-blue text-sm xs:text-base sm:text-3xl hover:text-dark-beige hover:animate-pulse">Home</h1>
        </RouterLink>
        -->
        <RouterLink @click="current_page = 'Projects'" to="/" class="flex-none overflow-hidden">
            <h1 v-if="current_page === 'Projects'" class="mx-1 xs:mx-5 text-theme-blue font-bold text-sm xs:text-base sm:text-3xl hover:text-dark-beige hover:animate-pulse">Projects</h1>
            <h1 v-else-if="current_page !== 'Projects'" class="mx-1 xs:mx-5 text-theme-blue text-sm xs:text-base sm:text-3xl hover:text-dark-beige hover:animate-pulse">Projects</h1>
        </RouterLink>
        <RouterLink @click="current_page = 'Resume'" to="/resume" class="flex-none overflow-hidden">
            <h1 v-if="current_page === 'Resume'" class="mx-1 xs:mx-5 text-theme-blue font-bold text-sm xs:text-base sm:text-3xl hover:text-dark-beige hover:animate-pulse">Resume</h1>
            <h1 v-else-if="current_page !== 'Resume'" class="mx-1 xs:mx-5 text-theme-blue text-sm xs:text-base sm:text-3xl hover:text-dark-beige hover:animate-pulse">Resume</h1>
        </RouterLink>
      </div>
      <div class="inline-flex xxs:hidden justify-end">
        
      </div>
  </header>

  <slot></slot>

  <!-- Website Footer -->
  <footer class="bg-theme-blue rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="xs:flex xs:items-center xs:justify-between">
            <a href="https://austinmelendez.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img :src="AMSignature" class="hidden xxs:flex h-auto max-w-40" alt="AM Signature Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-light-beige sm:mb-0">
                <!--
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                -->
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="/resume" class="hover:underline me-4 md:me-6">Resume</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-dark-beige sm:mx-auto lg:my-8"/>
        <span class="block text-sm text-light-beige sm:text-center">&copy; {{ current_year }} <a href="https://austinmelendez.com/" class="hover:underline">Austin Melendez</a>. All Rights Reserved.</span>
    </div>
</footer>
</template>
