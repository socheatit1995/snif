<template>
    <div>
      <TheBanner title="សេចក្តីជូនដំណឹង" />
  
      <section class="max-w-screen-lg mx-auto mt-20 flex flex-col gap-10">
        <TheHeading title="សេចក្តីជូនដំណឹង">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
              <path fill="currentColor"
                d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z" />
              <path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z" />
            </svg>
          </template>
        </TheHeading>
  
        <div class="grid grid-cols-1 gap-6" id="plankvk" >
        <RouterLink class="flex bg-slate-50 rounded-e-lg overflow-hidden shadow" v-for="i in 5" :to="`/about-kvk/${i}`">
            <div
            class="overflow-hidden w-36 rounded-s-lg flex justify-center border border-primary-200 bg-primary-50">
            <!-- <h1 class="text-lg font-bold text-center text-primary-800">10 Dec 2024</h1> -->
            <img src="../../src/assets/img/newimage.jpg" alt="" />
            </div>
            <div class="flex flex-col gap-4 flex-1 p-6">
            <div class="flex flex-col gap-2">
                <h1 class="font-bold">ឯកជនក្នុងវិស័យ ហេដ្ឋារចនាសម្ព័ន្ធ</h1>
                <span class="text-sm text-slate-600">យោងតាមអនុក្រឹត្យលេខ ៤៣ អនក្រ.បក របស់រាជរដ្ឋាភិបាលកម្ពុជា ចុះថ្ងៃទី២៨ ខែកុម្ភៈ ឆ្នាំ២០២២ ស្ដីពីការរៀបចំ និងការប្រព្រឹត្តទៅនៃក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ ក្រសួងសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ បំពេញមុខងារជាសេនាធិការឱ្យរាជរដ្ឋាភិបាល លើបេសកកម្មដឹកនាំ និងគ្រប់គ្រងលើវិស័យសេដ្ឋកិច្ចនិងហិរញ្ញវត្ថុ នៃព្រះរាជាណាចក្រកម្ពុជា ក្នុងគោលដៅអភិវឌ្ឍសេដ្ឋកិច្ច និងលើកតម្កើងជីវភាពប្រជាជន ដោយឈរលើគោលការណ៍សេដ្ឋកិច្ចទីផ្សារ និងសមធម៌សង្គម។</span>
            </div>
            <span class="gap-0"> <b class="text-sm text-slate-600">ថ្ងៃទី១៥ ខែ​មីនា ២០២៤</b></span>
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
  