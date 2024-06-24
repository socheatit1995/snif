<template>
  <div class="bg-white p-2 rounded-lg flex gap-4 shadow">
    <img src="../../assets/img/pdf.png" alt="" />
    <div class="flex flex-col gap-4">
      <p class="line-clamp-3">
        {{  data.description }}
      </p>
      <div class="mt-auto flex items-center justify-between gap-4">
        <span class="text-sm text-slate-600">{{ data.datetime }}</span>
        <RouterLink :to="data?.url" class="download" download ><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
          <path fill="currentColor"
            d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" />
        </svg></RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const { data } = defineProps(['data']);
console.log(data);

</script>
