<template>
    <div>
      <TheBanner title="បណ្តុះបណ្តាលផ្សេងៗ" />
      <section class="max-w-screen-md mx-auto mt-20 flex flex-col gap-10">
  
        <div class="flex flex-col gap-4">
          <TheHeading title="បណ្តុះបណ្តាលផ្សេងៗ" sub-title="សេចក្តីជូនដំណឹងស្ដីអំពីសិក្ខាសាលាផ្សព្វផ្សាយស្តីពី ">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-width="2"
                  d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z" />
              </svg>
            </template>
          </TheHeading>
          <span class="text-slate-600">ថ្ងៃទី១៥ ខែ​មីនា ២០២៤</span>
        </div>
  
        <p>
          កិច្ចសិក្សាអំពីភាពជាដៃគូរវាងរដ្ឋ និងឯកជនក្នុងវិស័យ ហេដ្ឋារចនាសម្ព័ន្ធនៅប្រទេសអូស្ត្រាលី
  
          From January 29 to February 5, 2024, H.E. Om Macthearith, Director General of Public-Private Partnerships
          (GDPPP) and
          colleagues of GDPPP, accompanied H.E. Meas Soksensan, Secretary of State of the Ministry of Economy and Finance,
          on a
          study tour on Public-Private Partnerships in infrastructure in Australia at the invitation of the Australian
          Embassy
          in Cambodia under the Partnerships for Infrastructure (P4I) Program along with the participation of
          representatives
          from the Ministry of Public Works and Transport, Ministry of Commerce, and Ministry of Industry, Science,
          Technology
          and Innovation.
        </p>
  
        <ul class="grid grid-cols-3 gap-6">
          <li v-for="i in 6">
            <img src="../assets/img/banner-1.png" alt="">
          </li>
        </ul>
  
      </section>
  
    </div>
  </template>
  
  <script setup lang="ts">
  import TheBanner from '@/components/blocks/TheBanner.vue';
  import TheHeading from '@/components/blocks/TheHeading.vue';
  
  </script>
  