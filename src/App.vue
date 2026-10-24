<script setup lang="ts">
import { NavBar, Footer } from '@/components';
</script>



<template>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-6JLEY8NKD0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-6JLEY8NKD0');
  </script>
  <NavBar />
  <router-view />
  <!-- <ProjectModal /> -->
  <Footer />
</template>
