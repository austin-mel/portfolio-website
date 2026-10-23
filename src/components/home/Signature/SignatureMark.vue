<script setup lang="ts">
import { useScrollObserver } from '@/composables/useScrollObserver';
import { AMInitialsWhite } from "@/assets/index"

useScrollObserver('.num-card');
</script>

<template>
  <section class="relative overflow-hidden bg-ink">
                    <div class="flex h-auto w-full items-center justify-center rounded-full font-display text-white shadow-[0_0_0_1px_var(--border),0_8px_24px_rgba(13,17,23,0.08)]">
            <img
      :src="AMInitialsWhite"
      alt="AM Initials"
      class="h-auto"
    />
        </div>
  </section>
</template>
