<template>
  <div>
    <TheBanner title="ឯកសារគត្តិយុត្ត" />

    <section class="max-w-screen-lg mx-auto mt-20 flex flex-col gap-10">
      <TheHeading title="ឯកសារគត្តិយុត្ត">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
            <path fill="currentColor"
              d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z" />
            <path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z" />
          </svg>
        </template>
      </TheHeading>


      <div class="flex items-center gap-4">
        <span>Filter:</span>
        <button class="p-2 rounded-lg border border-primary-200 "  :class="currentTab === 1 ? 'bg-primary-50 text-primary-800' : ''"  @click="currentTab = 1">ឯកសារគត្តិយុត្ត​
          កវក</button>
        <button class="p-2 rounded-lg border border-slate-200" :class="currentTab === 2 ? 'bg-primary-50 text-primary-800' : ''" @click="currentTab = 2">ឯកសារផ្សេងៗ</button>
      </div>

      <div class="grid grid-cols-2 gap-6 max-w-screen-xl">
        <DocumentItem v-for="item in listDocumentkvk" :data="item" :key="item.id" v-if="currentTab === 1"/>
        <DocumentItem v-for="item in listDocumentOhter" :data="item" :key="item.id" v-if="currentTab === 2"/>
      </div>

      <Pagination />

    </section>

  </div>
</template>

<script setup lang="ts">
import TheBanner from '@/components/blocks/TheBanner.vue';
import TheHeading from '@/components/blocks/TheHeading.vue';
import DocumentItem from '@/components/blocks/DocumentItem.vue';
import Pagination from '@/components/blocks/Pagination.vue';
import { ref } from 'vue'
const currentTab = ref(1);
let listDocumentkvk = [
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
  {
    id: 4,
    title: "សេចក្តីជូនដំណឹង",
    image: "../../assets/img/pdf.png",
    category: "kvkdoc",
    datetime: "ថ្ងៃទី១៥ ខែ​មីនា ២០២៤",
    description: "សេចក្តីជូនដំណឹង ស្តីពី ការជ្រើសរើសបុគ្គលិកជាប់កិច្ចសន្យា ដើម្បីចូលបម្រើការងារ នៅក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ",
  },
  
]

let listDocumentOhter = [
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
  ]




</script>
