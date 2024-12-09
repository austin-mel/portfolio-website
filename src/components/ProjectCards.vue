<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="h-96 bg-light-beige">
      <h1 v-show="DA">test1</h1>
      <h1 v-show="project">test2</h1>
      <h1 v-show="project">test3</h1>
    </div>
</template>
  