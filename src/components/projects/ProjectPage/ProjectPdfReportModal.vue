<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { HTMLAttributes } from 'vue';
import SVGIcons from '@/assets/SVGIcons.vue';

const props = withDefaults(defineProps<{
  src: string;
  title: string;
  buttonLabel: string;
  triggerClass?: HTMLAttributes['class'];
}>(), {
  triggerClass: '',
});

const isOpen = ref(false);

const dialogLabel = computed(() => `${props.title} PDF report`);
const iframeTitle = computed(() => `${props.title} PDF report viewer`);
const triggerLabel = computed(() => `Open PDF report: ${props.title}`);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeModal();
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
    @click="openModal"
  >
    {{ buttonLabel }}
  </button>

  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="dialogLabel"
      @click="closeModal"
    >
      <div
        class="flex h-[95vh] w-[95vw] flex-col overflow-hidden rounded-[14px] border border-white/15 bg-white shadow-[0_24px_80px_rgb(0_0_0_/_45%)]"
        @click.stop
      >
        <div class="flex flex-col gap-3 border-b border-border bg-cream2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div class="mb-1 font-mono text-[11px] uppercase text-ink4">
              PDF report
            </div>

            <h3 class="text-[16px] font-bold leading-snug tracking-normal text-ink">
              {{ title }}
            </h3>
          </div>

          <button
            class="inline-flex min-h-10 items-center justify-center gap-2 rounded-[10px] bg-ink px-4 text-sm font-semibold text-white transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream2"
            type="button"
            @click="closeModal"
          >
            <SVGIcons name="close" class="h-4 w-4" />
            Close
          </button>
        </div>

        <div class="min-h-0 flex-1 bg-[#f5f2ec] p-2 sm:p-4">
          <iframe
            class="h-full w-full rounded-[10px] border border-border bg-white"
            :src="src"
            :title="iframeTitle"
          ></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>
