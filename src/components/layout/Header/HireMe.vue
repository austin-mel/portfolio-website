<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToContact = () => router.push('/contact');
</script>

<template>
  <button
    @click="goToContact"
    class="bg-ink text-white px-4 sm:px-5 py-2 rounded-[9px] text-[12px] sm:text-[13px] font-medium font-sans tracking-[0.5px] transition-all duration-150 hover:bg-accent hover:-translate-y-[1px]"
  >
    Hire me!
  </button>
</template>