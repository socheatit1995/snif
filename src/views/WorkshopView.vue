<template>
  <div>
    <TheBanner title="សិក្ខាសាលា" />

    <section class="max-w-screen-lg mx-auto mt-20 flex flex-col gap-10">

      <TheHeading title="សិក្ខាសាលា">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M22 9L12 5L2 9l10 4zv6" />
              <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
            </g>
          </svg>
        </template>
      </TheHeading>

      <div class="grid grid-cols-2 gap-6">
        <RouterLink class="flex gap-6" v-for="item in listworkshop" :to="`/workshop/${item.id}?item=${item.category}`">
          <div class="rounded-lg overflow-hidden w-64 h-44">
            <img :src="item.image" class="w-full h-full" alt="">
          </div>
          <div class="flex flex-col gap-4 flex-1">
            <h1 class="font-bold">{{ item.title  }}</h1>
            <span class="text-sm text-slate-600">{{ item.datetime  }}</span>
          </div>
        </RouterLink>
      </div>

      <!-- <Pagination /> -->

    </section>

  </div>
</template>

<script setup lang="ts">
import TheBanner from '@/components/blocks/TheBanner.vue';
import TheHeading from '@/components/blocks/TheHeading.vue';
import Pagination from '@/components/blocks/Pagination.vue';



let listworkshop = [
    {
      id: 1,
      title: "សិក្ខាសាលាផ្សព្វផ្សាយគោលការណ៍ណែនាំស្តីពី ការវាយតម្លៃសមិទ្ធកម្មប្រចាំឆ្នាំសម្រាប់រដ្ឋបាលក្រុង ស្រុកទីតាំង​:​ សណ្ឋាគារ LBN ខេត្តកំពង់ចាម",
      image: "../src/assets/img/kps/kps1/act1.jpeg",
      category: "kbs1",
      datetime: "ថ្ងៃទី០៥ ខែកុម្ភៈ ឆ្នាំ២០២៤",
      description: "",
    },
    {
      id: 2,
      title: "សកម្មភាពសិក្ខាសាលាផ្សព្វផ្សាយគោលការណ៍ណែនាំស្តីពី ការវាយតម្លៃសមិទ្ធកម្មប្រចាំឆ្នាំសម្រាប់រដ្ឋបាលក្រុង ស្រុកទីតាំង​:​ សណ្ឋាគារ ស៊ីប្រ៊ីស ខេត្តព្រះសីហនុ",
      image: "../src/assets/img/kps/kps2/act1.jpeg",
      category: "kbs2",
      datetime: "ថ្ងៃទី០៥ ខែកុម្ភៈ ឆ្នាំ២០២៤",
      description: "",
    },
    // {
    //   id: 3,
    //   title: "សេចក្តីជូនដំណឹង",
    //   image: "/../src/assets/img/sd3.jpeg",
    //   category: "kvkdoc",
    //   datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
    //   description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    // },
    // {
    //   id: 4,
    //   title: "សេចក្តីជូនដំណឹង",
    //   image: "../src/assets/img/sd4.jpeg",
    //   category: "kvkdoc",
    //   datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
    //   description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    // },
    // {
    //   id: 5,
    //   title: "សេចក្តីជូនដំណឹង",
    //   image: "../src/assets/img/sd8.jpeg",
    //   category: "kvkdoc",
    //   datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
    //   description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    // },
    // {
    //   id: 6,
    //   title: "សេចក្តីជូនដំណឹង",
    //   image: "../src/assets/img/sd6.jpeg",
    //   category: "kvkdoc",
    //   datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
    //   description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    // },
];

</script>
