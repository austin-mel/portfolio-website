<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { DrawFnName } from '@/types/types';

const props = withDefaults(defineProps<{
  drawFn: DrawFnName;
  color: string;
  height?: number;
}>(), {
  height: 200,
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

const roundRect = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
) => {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
};

const lightCanvas = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = '#f3efe8';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(0,0,0,0.04)';
  ctx.lineWidth = 1;

  for (let x = 0; x < canvas.width; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y < canvas.height; y += 36) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  return ctx;
};

const drawDash = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  const { width: W, height: H } = canvas;
  const scale = Math.min(1, (W - 24) / 430);
  const offsetX = Math.max(12, (W - 430 * scale) / 2);
  ctx.save();
  ctx.translate(offsetX, H < 180 ? 6 : 0);
  ctx.scale(scale, scale);

  const kpis = [
    { x: 0, value: '$4.2M', label: 'Revenue', color: '#1d4ed8' },
    { x: 140, value: '3.1%', label: 'Churn', color: '#16a34a' },
    { x: 280, value: '12.4%', label: 'Conv. Rate', color: '#7c3aed' },
  ];

  kpis.forEach((kpi) => {
    ctx.fillStyle = '#fff';
    roundRect(ctx, kpi.x, 18, 122, 72, 8);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.08)';
    ctx.lineWidth = 0.5;
    roundRect(ctx, kpi.x, 18, 122, 72, 8);
    ctx.stroke();
    ctx.fillStyle = kpi.color;
    ctx.font = 'bold 20px Playfair Display, serif';
    ctx.textAlign = 'left';
    ctx.fillText(kpi.value, kpi.x + 12, 54);
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.font = '11px DM Sans, sans-serif';
    ctx.fillText(kpi.label, kpi.x + 12, 72);
  });

  const points = [.3, .48, .42, .62, .57, .72, .68, .82, .87, .93];
  ctx.strokeStyle = `${color}60`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  points.forEach((value, index) => {
    const x = index * (430 / 9);
    const y = Math.min(130, H / scale - 70) + 65 * (1 - value);
    index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.restore();

  if (W > 540) {
    const values = [.55, .72, .6, .88, .92, .76, .97];
    const bx = 460;
    const by = 16;
    const bw = W - 480;
    const bh = H - 36;
    const gap = 10;
    const barWidth = (bw - gap * (values.length + 1)) / values.length;

    values.forEach((value, index) => {
      const x = bx + gap + index * (barWidth + gap);
      const barHeight = bh * value;
      const gradient = ctx.createLinearGradient(0, by + bh - barHeight, 0, by + bh);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, `${color}30`);
      ctx.fillStyle = gradient;
      roundRect(ctx, x, by + bh - barHeight, barWidth, barHeight, 4);
      ctx.fill();
    });
  }
};

const drawPipe = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  const { width: W, height: H } = canvas;
  const nodes = ['Sources', 'Airflow', 'dbt', 'BigQuery', 'BI Layer'];
  const y = H / 2;
  const positions = nodes.map((label, index) => ({
    label,
    x: 56 + index * ((W - 112) / (nodes.length - 1)),
  }));

  positions.slice(0, -1).forEach((node, index) => {
    const next = positions[index + 1];
    const gradient = ctx.createLinearGradient(node.x, 0, next.x, 0);
    gradient.addColorStop(0, `${color}50`);
    gradient.addColorStop(1, `${color}cc`);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(node.x + 34, y);
    ctx.lineTo(next.x - 34, y);
    ctx.stroke();
    ctx.fillStyle = `${color}cc`;
    ctx.beginPath();
    ctx.moveTo(next.x - 36, y - 4);
    ctx.lineTo(next.x - 29, y);
    ctx.lineTo(next.x - 36, y + 4);
    ctx.fill();
  });

  positions.forEach((node, index) => {
    const active = index === 2;
    ctx.fillStyle = active ? `${color}15` : '#fff';
    roundRect(ctx, node.x - 38, y - 24, 76, 48, 10);
    ctx.fill();
    ctx.strokeStyle = active ? `${color}60` : 'rgba(0,0,0,0.10)';
    ctx.lineWidth = active ? 1.5 : 0.5;
    roundRect(ctx, node.x - 38, y - 24, 76, 48, 10);
    ctx.stroke();
    ctx.fillStyle = '#0d1117';
    ctx.font = 'bold 10px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(node.label, node.x, y + 4);
  });
};

const drawML = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  const { width: W, height: H } = canvas;
  const ox = H <= 140 ? 30 : 72;
  const oy = H - 20;
  const cw = Math.min(190, W * 0.45);
  const ch = Math.min(H - 30, 160);
  const roc = [[0, 0], [.04, .4], [.1, .63], [.2, .77], [.35, .86], [.5, .91], [.7, .96], [1, 1]];
  const gradient = ctx.createLinearGradient(ox, oy, ox + cw, oy - ch);

  gradient.addColorStop(0, `${color}20`);
  gradient.addColorStop(1, `${color}60`);
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(ox, oy);
  roc.forEach(([px, py]) => ctx.lineTo(ox + px * cw, oy - py * ch));
  ctx.lineTo(ox, oy);
  ctx.fill();

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  roc.forEach(([px, py], index) => {
    const x = ox + px * cw;
    const y = oy - py * ch;
    index === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.stroke();

  const cardX = W - 170;
  ctx.fillStyle = `${color}15`;
  roundRect(ctx, cardX, H / 2 - 30, 140, 60, 8);
  ctx.fill();
  ctx.strokeStyle = 'rgba(124,58,237,0.2)';
  ctx.lineWidth = 0.5;
  roundRect(ctx, cardX, H / 2 - 30, 140, 60, 8);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = 'bold 22px Playfair Display, serif';
  ctx.textAlign = 'center';
  ctx.fillText('87% AUC', cardX + 70, H / 2 + 8);
  ctx.fillStyle = 'rgba(0,0,0,0.35)';
  ctx.font = '10px DM Sans, sans-serif';
  ctx.fillText('Churn Model', cardX + 70, H / 2 + 26);
};

const drawFallback = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  ctx.fillStyle = `${color}20`;
  roundRect(ctx, 32, 24, canvas.width - 64, canvas.height - 48, 14);
  ctx.fill();
  ctx.strokeStyle = `${color}80`;
  ctx.lineWidth = 2;
  roundRect(ctx, 32, 24, canvas.width - 64, canvas.height - 48, 14);
  ctx.stroke();
};

const drawMap: Record<DrawFnName, (canvas: HTMLCanvasElement, color: string) => void> = {
  drawDash,
  drawPipe,
  drawML,
  drawSelf: drawFallback,
  drawGeo: drawFallback,
  drawBot: drawFallback,
};

const render = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.round(rect.width));
  canvas.height = Math.max(1, Math.round(rect.height || props.height));
  drawMap[props.drawFn](canvas, props.color);
};

onMounted(() => {
  render();

  if (canvasRef.value) {
    resizeObserver = new ResizeObserver(render);
    resizeObserver.observe(canvasRef.value);
  }
});

watch(() => [props.drawFn, props.color, props.height], render);

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
});
</script>

<template>
  <canvas ref="canvasRef" class="block h-full w-full"></canvas>
</template>
