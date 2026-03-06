<template>
  <div class="specular-card p-6">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h2 class="text-[14px] font-semibold text-white">Document Uploads</h2>
        <p class="text-[12px] text-[#525252] mt-0.5">Last 30 days</p>
      </div>
    </div>
    <div ref="chartRef" style="height: 260px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

const chartRef = ref(null);
const uploadData = ref([]);
const { $api } = useNuxtApp();

onMounted(async () => {
  try {
    const data = await $api.dashboard.get();
    uploadData.value = data.data.dateWiseDocs;

    const options = {
      series: [{
        name: 'Uploads',
        data: uploadData.value.map((item) => item.count),
      }],
      chart: {
        height: 240,
        type: 'area',
        toolbar: { show: false },
        fontFamily: 'Inter, system-ui, sans-serif',
        zoom: { enabled: false },
        background: 'transparent',
      },
      theme: { mode: 'dark' },
      dataLabels: { enabled: false },
      stroke: { curve: 'straight', width: 1.5 },
      xaxis: {
        type: 'datetime',
        categories: uploadData.value.map((item) => item.date),
        labels: { style: { colors: '#525252', fontSize: '11px', fontFamily: 'Inter' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { style: { colors: '#525252', fontSize: '11px', fontFamily: 'Inter' } },
      },
      grid: {
        borderColor: 'rgba(255,255,255,0.04)',
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
        padding: { left: 8, right: 8, top: 0, bottom: 0 },
      },
      tooltip: {
        x: { format: 'dd MMM yyyy' },
        theme: 'dark',
        style: { fontSize: '12px', fontFamily: 'Inter' },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.02,
          stops: [0, 100],
          colorStops: [
            { offset: 0, color: '#10b981', opacity: 0.3 },
            { offset: 100, color: '#10b981', opacity: 0.02 },
          ],
        },
      },
      colors: ['#10b981'],
    };

    const chart = new ApexCharts(chartRef.value, options);
    chart.render();
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }
});
</script>
