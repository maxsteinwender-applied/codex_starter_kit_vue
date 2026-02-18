<script setup lang="ts">
import Card from "primevue/card";
import Chart from "primevue/chart";

const chartData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Requests",
      data: [12, 19, 7, 14, 18],
      borderColor: "#3b82f6",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      tension: 0.35,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
</script>

<template>
  <div class="w-full max-w-4xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-semibold mb-4">Chart Smoke</h1>
    <p class="text-sm mb-6 text-slate-600">
      PrimeVue Chart integration smoke path backed by chart.js.
    </p>

    <Card>
      <template #title>Weekly Requests</template>
      <template #content>
        <div class="h-80">
          <Chart
            type="line"
            :data="chartData"
            :options="chartOptions"
            aria-label="Chart smoke line chart"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
