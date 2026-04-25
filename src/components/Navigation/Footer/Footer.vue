<script setup lang="ts">
import { ref } from "vue";
const current_year = ref(new Date().getFullYear());
</script>
 
<template>
  <footer class="footer">
    <div class="footer-container">

      <hr class="footer-divider" />

      <span class="footer-date">
        &copy; {{ current_year }}
        <a href="https://austinmelendez.com/" class="footer-link">
          Austin Melendez
        </a>.
        All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1e3a5f; /* theme-blue */
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem;
}

.footer-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
}

.footer-link {
  color: #f5f0e6; /* light-beige */
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-divider {
  margin: 1.5rem 0;
  border: 0;
  border-top: 1px solid #d6c6a8; /* dark-beige */
}

.footer-date {
  display: block;
  font-size: 0.875rem;
  text-align: center;
  color: #f5f0e6;
}
</style>