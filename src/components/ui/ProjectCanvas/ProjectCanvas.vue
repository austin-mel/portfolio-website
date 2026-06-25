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

const drawDistribution = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  const { width: W, height: H } = canvas;
  const left = Math.max(28, W * 0.12);
  const right = W - Math.max(22, W * 0.08);
  const bottom = H - 28;
  const top = 22;
  const chartWidth = right - left;
  const chartHeight = bottom - top;
  const bars = [.18, .28, .45, .72, .92, .78, .55, .36, .2, .11];
  const barGap = Math.max(3, chartWidth * 0.012);
  const barWidth = (chartWidth - barGap * (bars.length - 1)) / bars.length;

  ctx.strokeStyle = 'rgba(13,17,23,0.18)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, bottom);
  ctx.lineTo(right, bottom);
  ctx.stroke();

  bars.forEach((value, index) => {
    const x = left + index * (barWidth + barGap);
    const h = chartHeight * value;
    const gradient = ctx.createLinearGradient(0, bottom - h, 0, bottom);
    gradient.addColorStop(0, `${color}cc`);
    gradient.addColorStop(1, `${color}26`);
    ctx.fillStyle = gradient;
    roundRect(ctx, x, bottom - h, barWidth, h, 4);
    ctx.fill();
  });

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  for (let i = 0; i <= 60; i += 1) {
    const t = i / 60;
    const x = left + chartWidth * t;
    const y = bottom - chartHeight * Math.exp(-Math.pow((t - .48) / .24, 2)) * .9;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.font = 'bold 11px DM Sans, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Baseline noise model', left, top + 10);
};

const drawClinicalTrial = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  const { width: W, height: H } = canvas;
  const panelX = Math.max(18, W * 0.08);
  const panelY = Math.max(14, H * 0.13);
  const panelW = W - panelX * 2;
  const panelH = H - panelY * 2;

  ctx.fillStyle = '#fff';
  roundRect(ctx, panelX, panelY, panelW, panelH, 12);
  ctx.fill();
  ctx.strokeStyle = `${color}33`;
  ctx.lineWidth = 1;
  roundRect(ctx, panelX, panelY, panelW, panelH, 12);
  ctx.stroke();

  ctx.fillStyle = `${color}18`;
  roundRect(ctx, panelX + 12, panelY + 12, panelW - 24, 24, 8);
  ctx.fill();

  const columns = ['Site', 'Review', 'Blind'];
  const columnWidth = (panelW - 42) / columns.length;
  columns.forEach((label, index) => {
    const x = panelX + 14 + index * (columnWidth + 7);
    const y = panelY + 48;
    ctx.fillStyle = index === 1 ? `${color}14` : '#f8f5ef';
    roundRect(ctx, x, y, columnWidth, panelH - 64, 9);
    ctx.fill();
    ctx.strokeStyle = 'rgba(13,17,23,0.08)';
    ctx.lineWidth = 1;
    roundRect(ctx, x, y, columnWidth, panelH - 64, 9);
    ctx.stroke();
    ctx.fillStyle = index === 1 ? color : 'rgba(13,17,23,0.58)';
    ctx.font = 'bold 10px DM Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, x + columnWidth / 2, y + 18);
  });

  ctx.strokeStyle = `${color}85`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(panelX + panelW * .28, panelY + panelH * .62);
  ctx.lineTo(panelX + panelW * .48, panelY + panelH * .62);
  ctx.lineTo(panelX + panelW * .48, panelY + panelH * .45);
  ctx.lineTo(panelX + panelW * .68, panelY + panelH * .45);
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(panelX + panelW * .48, panelY + panelH * .62, 4, 0, Math.PI * 2);
  ctx.fill();
};

const drawSurveyAnalysis = (canvas: HTMLCanvasElement, color: string) => {
  const ctx = lightCanvas(canvas);
  if (!ctx) return;

  const { width: W, height: H } = canvas;
  const left = Math.max(26, W * 0.1);
  const right = W - left;
  const top = 22;
  const bottom = H - 24;
  const midX = left + (right - left) * .46;
  const pairs = [
    [.32, .46],
    [.44, .58],
    [.52, .62],
    [.58, .68],
    [.66, .73],
  ];

  ctx.strokeStyle = 'rgba(13,17,23,0.14)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, bottom);
  ctx.lineTo(right, bottom);
  ctx.stroke();

  pairs.forEach(([before, after], index) => {
    const y1 = bottom - (bottom - top) * before;
    const y2 = bottom - (bottom - top) * after;
    const rowColor = index % 2 === 0 ? `${color}90` : 'rgba(13,17,23,0.45)';
    ctx.strokeStyle = rowColor;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(left + 18, y1);
    ctx.lineTo(midX - 12, y2);
    ctx.stroke();
    ctx.fillStyle = rowColor;
    ctx.beginPath();
    ctx.arc(left + 18, y1, 3, 0, Math.PI * 2);
    ctx.arc(midX - 12, y2, 3, 0, Math.PI * 2);
    ctx.fill();
  });

  const boxes = [
    { x: midX + 32, y: top + 38, h: 46 },
    { x: midX + 82, y: top + 24, h: 58 },
  ];

  boxes.forEach((box, index) => {
    ctx.strokeStyle = index === 0 ? 'rgba(13,17,23,0.45)' : color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(box.x + 15, box.y - 16);
    ctx.lineTo(box.x + 15, box.y + box.h + 16);
    ctx.stroke();
    ctx.fillStyle = index === 0 ? 'rgba(13,17,23,0.08)' : `${color}24`;
    roundRect(ctx, box.x, box.y, 30, box.h, 5);
    ctx.fill();
    ctx.strokeRect(box.x, box.y + box.h * .48, 30, 1);
  });

  ctx.fillStyle = color;
  ctx.font = 'bold 11px DM Sans, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Pre/post empathy scores', left, top + 10);
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
  drawDistribution,
  drawClinicalTrial,
  drawSurveyAnalysis,
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
