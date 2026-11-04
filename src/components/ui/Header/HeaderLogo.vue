<script setup lang="ts">
import { AMLogo, AMSignature, AMInitials } from "@/assets/index"
</script>

<template>
  <div
    class="flex items-center gap-[10px] font-display text-[15px] sm:text-[17px] font-bold text-ink tracking-[-0.3px]">
    <a href="https://www.austinmelendez.com/" class="inline-block overflow-hidden">
      <img :src="AMLogo" alt="AM Logo"
        class="w-[75px] h-auto transition-transform duration-300 ease-in-out hover:scale-[1.5]" />
    </a>
    <span class="hidden lg:inline w-[8px] h-[8px] rounded-full bg-accent"></span>
    <span class="hidden lg:inline">Austin Meléndez</span>
  </div>
</template>