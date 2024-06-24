<template>
  <div class="flex items-center gap-4">
    <slot name="icon" />
    <span class="text-2xl font-bold">{{ title }}</span>
    <span v-if="subTitle?.length" class="text-2xl font-bold text-slate-600">/ {{ subTitle }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string, subTitle?: string }>()
</script>
