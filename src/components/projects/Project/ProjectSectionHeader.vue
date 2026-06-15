<script setup lang="ts">
interface Props {
  kicker: string;
  title: string;
  body: string;
}

defineProps<Props>();
</script>

<template>
  <header class="mb-8 grid grid-cols-1 items-end gap-6 md:grid-cols-[0.85fr_1fr] md:gap-14">
    <div>
      <div class="mb-3.5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-[26px] before:bg-accent before:content-['']">
        {{ kicker }}
      </div>
      <h2 class="font-display text-[34px] font-bold leading-[1.06] tracking-normal text-ink md:text-[44px]">
        {{ title }}
      </h2>
    </div>
    <p class="m-0 text-[15px] font-light leading-[1.76] text-ink3">
      {{ body }}
    </p>
  </header>
</template>
