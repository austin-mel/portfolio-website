<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { HTMLAttributes } from 'vue';
import SVGIcons from '@/assets/SVGIcons.vue';

const props = withDefaults(defineProps<{
  src: string;
  alt: string;
  title: string;
  type?: string;
  buttonLabel?: string;
  loading?: 'lazy' | 'eager';
  triggerClass?: HTMLAttributes['class'];
  imageClass?: HTMLAttributes['class'];
}>(), {
  type: '',
  buttonLabel: '',
  loading: 'lazy',
  triggerClass: '',
  imageClass: '',
});

const isOpen = ref(false);

const dialogLabel = computed(() => `${props.title} full-size screenshot`);

const triggerLabel = computed(() =>
  props.buttonLabel || `Open full-size screenshot: ${props.title}`
);

const openLightbox = () => {
  isOpen.value = true;
};

const closeLightbox = () => {
  isOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeLightbox();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <button
    class="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    :class="triggerClass"
    type="button"
    :aria-label="triggerLabel"
    @click="openLightbox"
  >
    <img
      class="block h-auto w-full object-contain"
      :class="imageClass"
      :src="src"
      :alt="alt"
      :loading="loading"
    />
  </button>

  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="dialogLabel"
      @click="closeLightbox"
    >
      <div
        class="flex w-[95vw] h-[95vh] flex-col overflow-hidden rounded-[14px] border border-white/15 bg-white shadow-[0_24px_80px_rgb(0_0_0_/_45%)]"
        @click.stop
      >
        <div class="flex flex-col gap-3 border-b border-border bg-cream2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div v-if="type" class="mb-1 font-mono text-[11px] uppercase text-ink4">
              {{ type }}
            </div>

            <h3 class="text-[16px] font-bold leading-snug tracking-normal text-ink">
              {{ title }}
            </h3>
          </div>

          <button
            class="inline-flex min-h-10 items-center justify-center gap-2 rounded-[10px] bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream2"
            type="button"
            @click="closeLightbox"
          >
            <SVGIcons name="close" class="h-4 w-4" />
            Close
          </button>
        </div>

        <div class="grid min-h-0 flex-1 place-items-center overflow-auto bg-[#f5f2ec] p-4">
          <img
            class="h-auto max-h-[calc(100vh_-_132px)] w-auto max-w-full object-contain"
            :src="src"
            :alt="alt"
          />
        </div>
      </div>
    </div>
  </Teleport>
</template>
