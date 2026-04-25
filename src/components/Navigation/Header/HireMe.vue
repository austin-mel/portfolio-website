<script setup lang="ts">
import { useRouter } from 'vue-router';
 
const router = useRouter();

const goToContact = () => router.push('/contact');
</script>
 
<template>
    <button class="nav-cta" @click="goToContact">Hire me</button>
</template>
 
<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 3rem; height: 62px;
  background: rgba(250, 248, 244, 0.88);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.logo {
  font-family: var(--font-d); font-size: 17px; font-weight: 700; color: var(--ink);
  letter-spacing: -0.3px; display: flex; align-items: center; gap: 10px;
}
.logo-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent2); }
.nav-links { display: flex; gap: 2px; }
.nav-btn {
  background: none; border: none; cursor: pointer; padding: 7px 16px; border-radius: 8px;
  font-size: 13px; font-weight: 400; color: var(--ink3); font-family: var(--font-b);
  transition: background .15s, color .15s;
}
.nav-btn:hover { background: var(--cream2); color: var(--ink); }
.nav-btn.active { background: var(--accent-pale); color: var(--accent); font-weight: 500; }
.nav-cta {
  background: var(--ink); color: #fff; border: none; cursor: pointer;
  padding: 8px 20px; border-radius: 9px; font-size: 13px; font-weight: 500;
  font-family: var(--font-b); transition: background .15s, transform .1s; letter-spacing: 0.2px;
}
.nav-cta:hover { background: var(--accent); transform: translateY(-1px); }
</style>