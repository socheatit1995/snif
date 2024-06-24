<template>
  <div class="relative max-w-screen-lg w-full">

    <swiper-container :init="false" class="video-slider">
      <swiper-slide>
        <div class="flex gap-6 max-md:flex-col">
          <div class="flex-1">
            <!-- <img src="../../assets/img/video-1.png" alt=""> -->
              <video
                class="w-full lg:h-[340px] object-cover rounded-md shadow-md"
                controls
                src="../../assets/img/video1.mp4"
              ></video>
          </div>

          <div class="flex-1">

            <div class="flex flex-col gap-4">
              <h1 class="text-lg font-bold">Presidential Elections 2016</h1>
              <p class="text-sm text-slate-600 line-clamp-3">ទូរទស្សន៍បាយ័នបានរាយការណ៍អំពីកិច្ចប្រជុំក្រុមប្រឹក្សាភិបាលលើកទី៣នៃមូលនិធិវិនិយោគរដ្ឋបាលថ្នាក់ក្រោមជាតិនៅល្ងាចថ្ងៃនេះ។</p>
              <div class="flex items-center gap-2 text-slate-600">
                <img src="../../assets/icons/calendar.svg" alt="">
                <span class="text-sm">4 May, 2016</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex gap-6 max-md:flex-col">
          <div class="flex-1 lg:h-[340px]">
            <img src="../../assets/img/sd4.jpeg" alt="">
          </div>

          <div class="flex-1">

            <div class="flex flex-col gap-4">
              <h1 class="text-lg font-bold">Presidential Elections 2016</h1>
              <p class="text-sm text-slate-600 line-clamp-3">
                Lorem Ipsum is simply dummy text of the printing and
                typesettingindustry.LoremIpsum has been the industry's
                standard dummy text ever since the 1500s.</p>
              <div class="flex items-center gap-2 text-slate-600">
                <img src="../../assets/icons/calendar.svg" alt="">
                <span class="text-sm">4 May, 2016</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="flex gap-6 max-md:flex-col">
          <div class="flex-1 lg:h-[340px]">
            <img src="../../assets/img/sd5.jpeg" alt="">
          </div>

          <div class="flex-1">

            <div class="flex flex-col gap-4">
              <h1 class="text-lg font-bold">Presidential Elections 2016</h1>
              <p class="text-sm text-slate-600 line-clamp-3">Lorem Ipsum is simply dummy text of the printing and
                typesetting
                industry.
                Lorem
                Ipsum has been the industry's
                standard dummy text ever since the 1500s.</p>
              <div class="flex items-center gap-2 text-slate-600">
                <img src="../../assets/icons/calendar.svg" alt="">
                <span class="text-sm">4 May, 2016</span>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    <!-- Custom Navigation -->
    <div class="md:flex hidden items-center gap-6 absolute bottom-0 right-0 z-10">
      <button
        class="video-prev rotate-90 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        <svg class="text-2xl text-slate-50" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
          viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m6 9l6 6l6-6" />
        </svg>
      </button>

      <button
        class="video-next -rotate-90 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed">
        <svg class="text-2xl text-slate-50" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
          viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m6 9l6 6l6-6" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { register } from 'swiper/element/bundle';
import type { SwiperContainer } from 'swiper/element/bundle';
import type { SwiperOptions } from 'swiper/types';

onMounted(() => {
  register()

  const swiperEl = document.querySelector<SwiperContainer>('.video-slider');
  if (!swiperEl) return

  const options: SwiperOptions = {
    spaceBetween: 24,
    navigation: {
      nextEl: '.video-next',
      prevEl: '.video-prev',
    }
  };

  Object.assign(swiperEl, options);
  swiperEl?.initialize();


})

</script>
