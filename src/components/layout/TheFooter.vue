<template>
  <footer class="bg-primary-800 py-10 mt-20 px-4 text-white">

    <div class="max-w-screen-xl mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">

      <div class="flex flex-col gap-6">
        <RouterLink to="/" class="flex items-center gap-4">
          <img src="../../assets/img/logo.png" class="w-20 bg-white rounded-full" alt="">
        </RouterLink>
        <p>អាសយដ្ឋាន៖ ផ្លូវលេខ៩២ សង្កាត់វត្តភ្នំ ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ
          លេខទំនាក់ទំនង៖+855 23 890 666
        </p>
        <ul class="flex items-center gap-2 ">
          <li v-for="i in 3">
            <a href="#">
              <svg class="text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <nav>
        <h1 class="text-lg font-bold">Quick link</h1>
        <ul class="flex flex-col gap-4 mt-6">
          <li v-for="(item, index) in listQuickLink" :key="item.id">
            <a :href="item.link" class="flex items-center gap-2">
                {{ item.name  }}
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <h1 class="text-lg font-bold">Get in touch</h1>
        <ul class="flex flex-col gap-4 mt-6 marker:top-[10px] marker:absolute">
          <li v-for="(item, index) in listIntouch" :key="item.id" class="list-image-[url(../../src/assets/img/tel.svg)] ">
           
            <a :href="item.link" class="flex items-center gap-2 relative top-[-6px]" target="_blank">
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- <nav>
        <h1 class="text-lg font-bold">Newsletter</h1>
        <p class="mt-4">Sign up for our weekly councils newsletter</p>
      </nav> -->

    </div>

    <div class="max-w-screen-xl mx-auto">
      <hr class="my-6 flex">
      <span class="text-center block">© 2024 - SNIF</span>
    </div>

  </footer>
</template>

<script setup lang="ts">
   let listIntouch = [
      {id: 1, name:"Ministry of Economy and Finance", link: "https://mef.gov.kh/about-ministry"},
      {id: 2, name:"National Committee for Sub-National Democratic Development", link: "https://ncdd.gov.kh/"},
      {id: 3, name:"Climate-Resilient Rice Commercialization Sector Development Program", link: "https://www.ricesdp.org/"},
      {id: 4, name:"Public Financial Management Reform Program", link: "https://pfm.gov.kh/index.php/en/"},
   ];

   let listQuickLink = [
      {id: 1, name:"ទំព័រដើម", link: "/"},
      {id: 2, name:"អំពី ក.វ.ក​", link: "/about"},
      {id: 3, name:"ឯកសារគត្តិយុត្ត", link: "/document"},
      {id: 4, name:"សិក្ខាសាលា", link: "/workshop"},
   ];

   let get

</script>
<style>

</style>