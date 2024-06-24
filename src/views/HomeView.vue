<template>
  <div>
    <div class="flex flex-col gap-20">
      <BannerSlider />

      <section class="flex flex-col gap-10 items-center px-4">
        <TheTitle title="វីដេអូ" />
        <VideoSlider />
      </section>

      <section class="px-4">

        <div class="grid grid-cols-12 gap-10 max-w-screen-lg mx-auto">

          <div class="lg:col-span-8 col-span-12 flex flex-col gap-10">
            <div class="pb-4 border-b border-slate-200 flex">
              <TheTitle title="ឯកសារគត្តិយុត្ត ក.វ.ក" :has-description="false" />
            </div>

            <div class="grid 2 md:grid-cols-2 grid-cols-1 gap-6 max-w-screen-xl">
              <DocumentItem v-for="item in listDocumentkvk" :data="item" :key="item.id" />
            </div>
          </div>

          <div class="lg:col-span-4 col-span-12 flex flex-col gap-10 max-lg:mt-10">
            <div class="pb-4 border-b border-slate-200 flex">
              <TheTitle title="ឯកសារផ្សេងៗ" :has-description="false" />
            </div>

            <div class="grid grid-cols-1 gap-6 max-w-screen-xl">
              <DocumentItem v-for="item in listDocumentOhter" :data="item" :key="item.id" />
            </div>
          </div>
        </div>

      </section>

      <section class="flex flex-col gap-10 items-center px-4">
        <TheTitle title="ព័ត៌មានផ្សេងៗ" />

        <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-screen-lg">
          <BlogItem v-for="item in otherInfoPost" :key="item.id" :data="item"/>
        </div>
      </section>

      <section class="px-4 flex items-center justify-center py-20 bg-slate-50">
        <div class="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6 max-w-screen-lg">
          <div v-for="item in listService" :key="item.id" class="flex gap-6 bg-white rounded-lg shadow-lg p-4">
            <svg class="text-green-500 text-[80px] min-w-20" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M1 20v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20zm18 0v-3q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v3zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.062t-.7-.138q.675-.8 1.038-1.775T15 8t-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8" />
            </svg>

            <div class="text-sm">
              <b>{{ item.title }}</b>
              <p class="mt-2">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- <section class="px-4 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <img src="../assets/img/banner-3.png" class="rounded-lg" alt="" />

        <div class="flex flex-col gap-4">
          <span class="text-green-500 text-sm">Who we are</span>

          <h1 class="text-2xl font-bold">
            We are a strong and strategically driving and influential force
            behind the local government sector
          </h1>

          <p class="text-slate-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis ipsum dolor sit amet.
          </p>

          <div>
            <span>Our role is to:</span>
            <ul class="text-sm list-disc list-inside">
              <li v-for="i in 5">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem
              </li>
            </ul>
          </div>
        </div>
      </section> -->

      <section class="px-4 flex items-center gap-10 max-w-screen-lg mx-auto">
        <ul class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 p-6 rounded-2xl border border-slate-200">
          <li v-for="item in listNumberCity" :key="item.id"
            class="text-center pr-10 border-r border-slate-200 last:border-none last:pr-0 max-lg:border-none max-lg:pr-0">
            <h1 class="text-4xl font-bold"> {{ formatNumber(item.number) }}</h1>
            <span class="mt-2 inline-flex">{{ item.name  }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerSlider from "@/components/blocks/BannerSlider.vue";
import BlogItem from "@/components/blocks/BlogItem.vue";
import TheTitle from "@/components/blocks/TheTitle.vue";
import VideoSlider from "@/components/blocks/VideoSlider.vue";
import DocumentItem from "@/components/blocks/DocumentItem.vue";
import { ref, computed } from 'vue';

const formatNumber = computed(() => {
  return (value: number) => value.toLocaleString('en-US');
} );


let listNumberCity = [
  { id: 1, name: "ស្រុកទាំងអស់", number: Math.floor(Math.random() * 10000000) },
  { id: 2, name: "ស្រុកជ័យលេភី", number: Math.floor(Math.random() * 10000000) },
  { id: 3, name: "ថវិការសរុប", number: Math.floor(Math.random() * 10000000) }, 
  { id: 4, name: "ចំនួនគម្រោងសរុប", number: 8336817 }
];

let listDocumentkvk = [
    {
      id: 1,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/pdf.png",
      category: "otherdoc",
      datetime: "ថ្ងៃទី១ ខែ​មីនា ២០២៤",
      description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ other",
    },
    {
      id: 2,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/pdf.png",
      category: "otherdoc",
      datetime: "ថ្ងៃទី១ ខែ​មីនា ២០២៤",
      description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ other",
    },
    {
      id: 3,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/pdf.png",
      category: "otherdoc",
      datetime: "ថ្ងៃទី១ ខែ​មីនា ២០២៤",
      description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ other",
    },
    {
      id: 4,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/pdf.png",
      category: "otherdoc",
      datetime: "ថ្ងៃទី១ ខែ​មីនា ២០២៤",
      description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ other",
    },
    {
      id: 5,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/pdf.png",
      category: "otherdoc",
      datetime: "ថ្ងៃទី១ ខែ​មីនា ២០២៤",
      description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ other",
    },
    {
      id: 6,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/pdf.png",
      category: "otherdoc",
      datetime: "ថ្ងៃទី១ ខែ​មីនា ២០២៤",
      description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ other",
    }, 
  ];
  let listDocumentOhter  = [
  {
    id: 1,
    title: "សេចក្តីជូនដំណឹង",
    image: "/../assets/img/pdf.png",
    category: "kvkdoc",
    datetime: "ថ្ងៃទី១៥ ខែ​មីនា ២០២៤",
    description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ",
  },
  {
    id: 2,
    title: "សេចក្តីជូនដំណឹង",
    image: "../../assets/img/pdf.png",
    category: "kvkdoc",
    datetime: "ថ្ងៃទី១៥ ខែ​មីនា ២០២៤",
    description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ",
  },
  {
    id: 3,
    title: "សេចក្តីជូនដំណឹង",
    image: "../../assets/img/pdf.png",
    category: "kvkdoc",
    datetime: "ថ្ងៃទី១៥ ខែ​មីនា ២០២៤",
    description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ",
  },
  
];

let otherInfoPost = [
    {
      id: 1,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/sd1.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 2,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/sd2.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 3,
      title: "សេចក្តីជូនដំណឹង",
      image: "/../../assets/img/sd3.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 4,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/sd7.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 5,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/sd8.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },
    {
      id: 6,
      title: "សេចក្តីជូនដំណឹង",
      image: "../../assets/img/sd6.jpeg",
      category: "kvkdoc",
      datetime: "ថ្ងៃទី ០៣ ខែ មេសា ឆ្នាំ ២០២៤",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល ដែលប្រព្រឹត្តទៅនៅថ្ងៃទី១២ ខែកញ្ញា ឆ្នាំ២០២៣ នៅសណ្ឋាគារភ្នំពេញ។",
    },

];

let listService = [
    {
      id: 1,
      title: "សេវាផ្ទៀងផ្ទាត់តម្លៃគិតពន្ធគយ",
      image: "../../assets/img/sd6.jpeg",
      category: "kvkdoc",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល។",
    },
    {
      id: 2,
      title: "សេវាទទួលលិខិតប្រកាសពន្ធសត្តឃាត",
      image: "../../assets/img/sd6.jpeg",
      category: "kvkdoc",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល។",
    },
    {
      id: 3,
      title: "សេវាផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រដើមកំណើតទំនិញ",
      image: "../../assets/img/sd6.jpeg",
      category: "kvkdoc",
      description: "វគ្គបណ្ដុះបណ្ដាលស្ដីពីការដកស្រង់បទពិសោធន៍នៃការអនុវត្តនីតិវិធីហិរញ្ញវត្ថុរបស់គ្រឹះស្ថានសាធារណៈរដ្ឋបាល។",
    }
]
</script>
