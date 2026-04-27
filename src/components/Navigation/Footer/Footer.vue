<script setup lang="ts">
import { ref } from "vue";
const current_year = ref(new Date().getFullYear());
</script>

<template>
  <footer class="rounded-lg bg-accent">
    <div class="mx-auto w-full max-w-[1280px] p-4">

      <hr class="my-6 border-t border-border2" />

      <span class="block text-center text-sm text-cream">
        &copy; {{ current_year }}
        <a href="https://austinmelendez.com/" class="text-cream no-underline hover:underline">
          Austin Melendez
        </a>.
        All Rights Reserved.
      </span>
    </div>
  </footer>
</template>