<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import { Background } from './assets/images';

</script>

<template>
  <div class="bg-[url('../assets/images/background-image.svg')] bg-repeat-y bg-cover">
  <Navigation>
    <main class="flex-grow flex flex-col items-center justify-center p-4">
      <RouterView />
    </main>
  </Navigation>
  </div>
</template>
