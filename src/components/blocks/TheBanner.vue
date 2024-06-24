<template>
  <div class="max-h-80 overflow-hidden relative">
    <div
      class="flex items-center flex-col gap-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <div>
        <RouterLink to="/">ទំព័រដើម - </RouterLink>
        <span>{{ title }}</span>
      </div>
    </div>

    <!-- Overlay -->
    <div class="bg-black/50 absolute inset-0"></div>

    <img src="../../assets/img/slider1.png" class="w-full object-contain md:object-cover lg:h-[400px]" alt="">
  </div>
</template>

<script setup lang="ts">


defineProps<{ title: string }>()

</script>
