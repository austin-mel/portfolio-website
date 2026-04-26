<script setup lang="ts">
import { AMLogo, AMSignature, AMInitials } from "@/assets/index"
</script>

<template>
  <div class="flex items-center gap-[10px] font-display text-[15px] sm:text-[17px] font-bold text-ink tracking-[-0.3px]">
    <img
      :src="AMLogo"
      alt="AM Logo"
      class="w-[75px] h-auto"
    />
    <span class="hidden lg:inline w-[8px] h-[8px] rounded-full bg-accent"></span>
    <span class="hidden lg:inline">Austin Meléndez</span>
  </div>
</template>