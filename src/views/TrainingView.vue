<template>
  <div>
    <TheBanner title="បណ្តុះបណ្តាលផ្សេងៗ" />

    <section class="max-w-screen-lg mx-auto mt-20 flex flex-col gap-10">

      <TheHeading title="បណ្តុះបណ្តាលផ្សេងៗ">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-width="2"
              d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z" />
          </svg>
        </template>
      </TheHeading>

      <div class="grid grid-cols-2 gap-6">
        <RouterLink class="flex flex-col gap-6" v-for="item in listTraining" :to="`/training/${item.id}`">
          <div class="rounded-lg overflow-hidden h-48">
            <img :src="item.image" class="w-full h-full object-cover" alt="">
          </div>
          <div class="flex flex-col gap-4 flex-1">
            <h1 class="font-bold">{{ item.description }}</h1>
            <span class="text-sm text-slate-600">{{ item.datetime }}</span>
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

let listTraining = [
    {
      id: 1,
      title: "សេចក្តីជូនដំណឹង",
      image: "../src/assets/img/banner-1.png",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 2,
      title: "សេចក្តីជូនដំណឹង",
      image: "../src/assets/img/banner-2.png",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 3,
      title: "សេចក្តីជូនដំណឹង",
      image: "/../src/assets/img/banner-3.png",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 4,
      title: "សេចក្តីជូនដំណឹង",
      image: "../src/assets/img/sd1.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 5,
      title: "សេចក្តីជូនដំណឹង",
      image: "../src/assets/img/sd2.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 6,
      title: "សេចក្តីជូនដំណឹង",
      image: "../src/assets/img/sd4.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
  ];



</script>
