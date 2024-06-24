<template>
  <header class="bg-primary-800 py-2 px-4 flex items-center justify-between gap-10 sticky top-0 z-50">

    <RouterLink to="/" class="flex items-center gap-4 ">
      <img src="../../assets/img/logo.png" class="bg-white rounded-full" alt="">
      <span class="text-slate-50 md:block hidden">
        ក្រុមប្រឹក្សាភិបាលគ្រប់គ្រងមូលនិធិវិនិយោគរដ្ឋបាលថ្នាក់ក្រោមជាតិ <br />
        លេខាធិការដ្ឋាន ក.វ.ក
      </span>
    </RouterLink>

    <ul class="text-slate-50 items-center gap-4 whitespace-nowrap lg:flex hidden">
      <li>
        <RouterLink to="/" class="hover:text-[#d9c8c8]" :class="[isActive('/') ? 'text-[#d9c8c8]' : '', 'nav-link']">ទំព័រដើម​</RouterLink>

      </li>
      <li>
        <li class="relative group hover:text-[#d9c8c8]" :class="[isActive('/about') || isActive('/about-kvk-structure') || isActive('/about-kvk-structure-management') ? 'text-[#d9c8c8]' : '', 'nav-link']">
        <div class="flex items-center gap-2 cursor-pointer" >
          <span>អំពី ក.វ.ក</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m6 9l6 6l6-6" />
          </svg>
        </div>

        <div class="absolute top-full left-0 pt-4">
          <ul class="whitespace-nowrap group-hover:block hidden p-4 rounded-lg shadow-lg bg-white text-black">
            <li>
              <RouterLink class="py-2 hover:text-[#027828]" to="/about" :class="[isActive('/about') ? 'text-[#027828]' : '', 'nav-link']">សេចក្តីសង្ខេប អំពី ក.វ.ក</RouterLink>
            </li>
            <li class="border-t pt-2 mt-2">
              <RouterLink class="py-2 hover:text-[#027828]" to="/about-kvk-structure" :class="[isActive('/about-kvk-structure') ? 'text-[#027828]' : '', 'nav-link']">រចនាសម្ព័ន្ធស្ថាប័ន</RouterLink>
            </li>
            <li class="border-t pt-2 mt-2">
              <RouterLink class="py-2 hover:text-[#027828]" to="/about-kvk-structure-management" :class="[isActive('/about-kvk-structure-management') ? 'text-[#027828]' : '', 'nav-link']">រចនាសម្ព័ន្ធនៃការគ្រប់គ្រង</RouterLink>
            </li>
          </ul>
        </div>

      </li>

        <!-- <RouterLink to="/about" class="hover:text-[#d9c8c8]" :class="[isActive('/about') ? 'text-[#d9c8c8]' : '', 'nav-link']" >អំពី ក.វ.ក​</RouterLink> -->
      </li>
      <li>
        <RouterLink to="/document" class="hover:text-[#d9c8c8]" :class="[isActive('/document') ? 'text-[#d9c8c8]' : '', 'nav-link']">ឯកសារគត្តិយុត្ត</RouterLink>
      </li>
      <li class="relative group hover:text-[#d9c8c8]" :class="[isActive('/workshop') || isActive('/training') ? 'text-[#d9c8c8]' : '', 'nav-link']">
        <div class="flex items-center gap-2 cursor-pointer" >
          <span>សកម្មភាពនានា</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m6 9l6 6l6-6" />
          </svg>
        </div>

        <div class="absolute top-full left-0 pt-4">
          <ul class="whitespace-nowrap group-hover:block hidden p-4 rounded-lg shadow-lg bg-white text-black">
            <li>
              <RouterLink class="py-2 hover:text-[#027828]" to="/workshop" :class="[isActive('/workshop') ? 'text-[#027828]' : '', 'nav-link']">សិក្ខាសាលា​</RouterLink>
            </li>
            <li class="border-t pt-2 mt-2">
              <RouterLink class="py-2 hover:text-[#027828]" to="/training" :class="[isActive('/training') ? 'text-[#027828]' : '', 'nav-link']">បណ្ដុះបណ្ដាលផ្សេងៗ</RouterLink>
            </li>
          </ul>
        </div>

      </li>

      <li class="relative group hover:text-[#d9c8c8]" :class="[isActive('/about-kvk') ? 'text-[#d9c8c8]' : '', 'nav-link']">
        <div class="flex items-center gap-2  cursor-pointer">
          <span>គម្រោងផ្សេងៗ</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m6 9l6 6l6-6" />
          </svg>
        </div>


        <div class="absolute top-full left-0 pt-4">
          <ul
            class="whitespace-nowrap group-hover:block hidden p-4 rounded-lg shadow-lg bg-white text-black">
            <li>
              <RouterLink class="py-2 hover:text-[#027828]"  to="https://www.adb.org/projects/41392-023/main" target="_blank">ADB</RouterLink>
            </li>
            <li class="border-t pt-2 mt-2">
              <RouterLink class="py-2 hover:text-[#027828]" :class="[isActive('/about-kvk') ? 'text-[#027828]' : '', 'nav-link']" to="/about-kvk" >គម្រោង ក.វ.ក</RouterLink>
            </li>
          </ul>
        </div>

      </li>
      <li>
        <RouterLink to="/news" class="hover:text-[#d9c8c8]" :class="[isActive('/news') ? 'text-[#d9c8c8]' : '', 'nav-link']" >សេចក្តីជូនដំណឹង​</RouterLink>
      </li>
    </ul>

    <!-- Menu -->
    <div class="lg:hidden flex items-center gap-4">
      <RouterLink to="/contact-us" class="py-2.5 px-6 rounded-full whitespace-nowrap text-slate-50 bg-green-500">Contact Us</RouterLink>

      <button @click="() => isOpen = !isOpen">

        <svg v-if="isOpen" class="text-3xl text-slate-50" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
          viewBox="0 0 15 15">
          <path fill="currentColor"
            d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" />
        </svg>

        <svg v-else class="text-3xl text-slate-50" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
          viewBox="0 0 24 24">
          <g fill="none">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor"
              d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
          </g>
        </svg>

      </button>
    </div>

    <!-- Dropdown Menu -->
    <div v-if="isOpen"
      class="absolute top-full left-0 bg-white w-full p-4 flex flex-col gap-4 shadow-lg max-h-96 overflow-auto">

      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">Menu</h1>

        <ul class="flex flex-col gap-2">
          <li>
            <RouterLink to="/">ទំព័រដើម​</RouterLink>
          </li>
          <li>
            <RouterLink to="/about-kvk">អំពី ក.វ.ក​</RouterLink>
          </li>
          <li>
            <RouterLink to="/workshop">ឯកសារគត្តិយុត្ត</RouterLink>
          </li>
          <li class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span>សកម្មភាពនានា</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m6 9l6 6l6-6" />
              </svg>
            </div>

            <ul class="flex flex-col gap-2 list-disc list-inside">
              <li>
                <RouterLink to="">សិក្ខាសាលា​</RouterLink>
              </li>
              <li>
                <RouterLink to="">បណ្ដុះបណ្ដាលផ្សេងៗ</RouterLink>
              </li>
            </ul>
          </li>
          <li class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <span>គម្រោងផ្សេងៗ</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m6 9l6 6l6-6" />
              </svg>
            </div>

            <ul class="flex flex-col gap-2 list-disc list-inside">
              <li>
                <RouterLink to="https://www.adb.org/projects/41392-023/main" target="_blank">ADB</RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">Languages</h1>

        <div class="flex items-center gap-4 flex-wrap">
          <RouterLink to="" class="flex items-center gap-4">
            <img src="../../assets/icons/kh-flag.svg" alt="">
            <span>ភាសាខ្មែរ</span>
          </RouterLink>

          <RouterLink to="" class="flex items-center gap-4">
            <img src="../../assets/icons/en-flag.svg" alt="">
            <span>English</span>
          </RouterLink>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="text-xl font-bold">Get in Touch</h1>

        <div class="flex items-center gap-4 flex-wrap">
          <RouterLink to="" class="flex items-center gap-2">
            <img src="../../assets/icons/email.svg" alt="">
            <span>snif@gmail.com</span>
          </RouterLink>

          <RouterLink to="" class="flex items-center gap-2">
            <img src="../../assets/icons/phone.svg" alt="">
            <span>+855 888 999</span>
          </RouterLink>

          <RouterLink to="" class="flex items-center gap-2">
            <img src="../../assets/icons/fb.svg" alt="">
            <span>https//facebook.com</span>
          </RouterLink>
        </div>
      </div>

    </div>

  </header>
</template>

<script setup lang=ts>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const isOpen = ref(false)
const route = useRoute();

function isActive(to: string) {
  return route.path === to;
}

function wp_nav_menu() { }

</script>
<style>
/* .nav-link {
  @apply text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out;
} */


</style>
