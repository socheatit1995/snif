<template>
  <div>
    <TopHeader />
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/layout/TopHeader.vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
</script>
