<script setup lang="ts">
const items: { name: string; hi: boolean }[] = [
  { name: 'Python', hi: true },   { name: 'SQL', hi: false },
  { name: 'Tableau', hi: true },  { name: 'dbt', hi: false },
  { name: 'Airflow', hi: false }, { name: 'Snowflake', hi: true },
  { name: 'BigQuery', hi: false },{ name: 'Power BI', hi: false },
  { name: 'XGBoost', hi: true },  { name: 'MLflow', hi: false },
  { name: 'Pandas', hi: false },  { name: 'Looker', hi: true },
  { name: 'Spark', hi: false },   { name: 'R', hi: false },
];

// Duplicate for seamless loop
const looped = [...items, ...items];
</script>

<template>
  <div class="marquee-strip">
    <div class="marquee-track">
      <span
        v-for="(item, i) in looped"
        :key="i"
        class="marquee-item"
        :class="{ hi: item.hi }"
      >
        <span class="dot"></span>{{ item.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee-strip {
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  background: var(--ink); overflow: hidden; white-space: nowrap; padding: 14px 0;
  position: relative; z-index: 1;
}
.marquee-track { display: inline-flex; gap: 0; animation: marquee 28s linear infinite; }
.marquee-item {
  display: inline-flex; align-items: center; gap: 12px;
  padding: 0 2.5rem; font-size: 12px; font-weight: 500;
  letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255, 255, 255, 0.5);
}
.marquee-item .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent2); flex-shrink: 0; }
.marquee-item.hi { color: rgba(255, 255, 255, 0.85); }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>