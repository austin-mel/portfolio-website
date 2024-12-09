<script setup lang="ts">
import { ref } from "vue";
import { AMLogo, AMSignature, AMInitials } from "../assets/images/index.js"
const current_year = ref(new Date().getFullYear());
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
      <div class="flex-1"></div>
  </header>

  <slot></slot>

  <!-- Website Footer -->
  <footer class="bg-theme-blue rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://austinmelendez.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img :src="AMSignature" class="h-auto max-w-40" alt="AM Signature Logo" />
               
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-light-beige sm:mb-0">
                <li>
                    <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                </li>
                <li>
                    <a href="/projects" class="hover:underline me-4 md:me-6">Projects</a>
                </li>
                <li>
                    <a href="/resume" class="hover:underline me-4 md:me-6">Resume</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-dark-beige sm:mx-auto lg:my-8" />
        <span class="block text-sm text-light-beige sm:text-center">&copy; {{ current_year }} <a href="https://austinmelendez.com/" class="hover:underline">Austin Melendez</a>. All Rights Reserved.</span>
    </div>
</footer>
</template>
