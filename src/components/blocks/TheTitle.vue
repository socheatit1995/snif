<template>
  <div class="flex flex-col gap-6 max-w-screen-md text-center">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <p v-if="hasDescription" class="text-lg text-slate-600">
      សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារនៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ
    </p>
  </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{ title: string, hasDescription: boolean }>(), {
  hasDescription: true
})

</script>
