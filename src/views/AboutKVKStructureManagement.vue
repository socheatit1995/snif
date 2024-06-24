<template>
    <div>
      <TheBanner title="រចនាសម្ព័ន្ធនៃការគ្រប់គ្រង" />
  
      <section class="max-w-screen-lg mx-auto mt-20 flex flex-col gap-10">
        <TheHeading title="រចនាសម្ព័ន្ធនៃការគ្រប់គ្រង">
          <!-- <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z" />
            </svg>
          </template> -->
        </TheHeading>
  
        <ul class="grid grid-cols-2 gap-6 mt-10">
          <li class="flex gap-6" v-for="i in 4">
            <div class="rounded-lg overflow-hidden w-36 h-40">
              <img src="../assets/img/about-2.png" class="w-full h-full object-cover" alt="">
            </div>
            <div class="flex flex-col gap-4 flex-1">
              <h1 class="font-bold">ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី</h1>
              <span class="text-sm text-slate-600">H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister</span>
            </div>
          </li>
        </ul>
      </section>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import TheBanner from '@/components/blocks/TheBanner.vue';
  import TheHeading from '@/components/blocks/TheHeading.vue';
  
  </script>
  