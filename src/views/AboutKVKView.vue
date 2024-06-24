<template>
  <div>
    <TheBanner title="គម្រោង ក.វ.ក" src="../../assets/img/about-1.png"/>

    <section class="max-w-screen-lg mx-auto mt-20 flex flex-col gap-10">
          <ul class="flex border-b">
            <li class="-mb-px mr-1">
              <RouterLink to="" class="bg-white inline-block py-2 px-4 text-blue-700 font-semibold" :class="currentTab === 0? 'border-l border-t border-r rounded-t': 'hover:text-blue-800'" @click="currentTab = 0">
                <TheHeading title="គម្រោង ក.វ.ក">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 1024 1024">
                      <path fill="currentColor"
                        d="M768 0H416c-35.344 0-64 28.656-64 64h352v256h256v512H736v64h224c35.344 0 64-28.656 64-64V256.016zm0 256V90.496L933.472 256zM64 128c-35.344 0-64 28.656-64 64v768c0 35.344 28.656 64 64 64h544c35.344 0 64-28.656 64-64V384.016L416 128zm544 832H64V192h288v256h256zM416 384V218.496L581.472 384z" />
                    </svg>
                  </template>
                </TheHeading>
              </RouterLink>
            </li>
            <li class="-mb-px mr-1">
              <RouterLink to="" class="bg-white inline-block py-2 px-4 text-blue-500  font-semibold" :class=" currentTab === 1? 'border-l border-t border-r rounded-t': 'hover:text-blue-800'" @click="currentTab = 1">
                <TheHeading title="គម្រោង ADB">
                  <template #icon>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 1024 1024">
                      <path fill="currentColor"
                        d="M768 0H416c-35.344 0-64 28.656-64 64h352v256h256v512H736v64h224c35.344 0 64-28.656 64-64V256.016zm0 256V90.496L933.472 256zM64 128c-35.344 0-64 28.656-64 64v768c0 35.344 28.656 64 64 64h544c35.344 0 64-28.656 64-64V384.016L416 128zm544 832H64V192h288v256h256zM416 384V218.496L581.472 384z" />
                    </svg>
                  </template>
                </TheHeading>
              </RouterLink>
            </li>
           
          </ul>
          

          <div class="grid grid-cols-2 gap-6" id="plankvk" v-if="currentTab === 0">
            <RouterLink class="flex bg-slate-50 rounded-e-lg overflow-hidden shadow" v-for="i in 10" :to="`/about-kvk/${i}`">
              <div
                class="overflow-hidden px-10 w-36 rounded-s-lg flex items-center justify-center border border-primary-200 bg-primary-50">
                <h1 class="text-lg font-bold text-center text-primary-800">10 Dec 2024</h1>
              </div>
              <div class="flex flex-col gap-4 flex-1 p-6">
                <div class="flex flex-col gap-2">
                  <h1 class="font-bold">ឯកជនក្នុងវិស័យ ហេដ្ឋារចនាសម្ព័ន្ធ</h1>
                  <span class="text-sm text-slate-600">កិច្ចសិក្សាអំពីភាពជាដៃគូរវាងរដ្ឋ និងឯកជនក្នុងវិស័យ
                    ហេដ្ឋារចនាសម្ព័ន្ធនៅប្រទេសអូស្ត្រាលី</span>
                </div>
                <span class="text-slate-600 text-sm mt-auto">Continue reading</span>
              </div>
            </RouterLink>
          </div>
          <div class="grid grid-cols-2 gap-6" id="plandab" v-if="currentTab === 1">
            <RouterLink class="flex bg-slate-50 rounded-e-lg overflow-hidden shadow" v-for="i in 10" :to="`/about-kvk/${i}`">
              <div
                class="overflow-hidden px-10 w-36 rounded-s-lg flex items-center justify-center border border-primary-200 bg-primary-50">
                <h1 class="text-lg font-bold text-center text-primary-800">10 Dec 2024</h1>
              </div>
              <div class="flex flex-col gap-4 flex-1 p-6">
                <div class="flex flex-col gap-2">
                  <h1 class="font-bold">ឯកជនក្នុងវិស័យ ហេដ្ឋារចនាសម្ព័ន្ធ avout</h1>
                  <span class="text-sm text-slate-600">កិច្ចសិក្សាអំពីភាពជាដៃគូរវាងរដ្ឋ និងឯកជនក្នុងវិស័យ
                    ហេដ្ឋារចនាសម្ព័ន្ធនៅប្រទេសអូស្ត្រាលី</span>
                </div>
                <span class="text-slate-600 text-sm mt-auto">Continue reading</span>
              </div>
            </RouterLink>
          </div>

      <Pagination />

    </section>

  </div>
</template>

<script setup lang="ts">
import TheBanner from '@/components/blocks/TheBanner.vue';
import TheHeading from '@/components/blocks/TheHeading.vue';
import Pagination from '@/components/blocks/Pagination.vue';
import { ref } from 'vue';
const currentTab = ref(0);


</script>
