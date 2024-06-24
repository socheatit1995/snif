<template>
  <div class="relative">
    <swiper-container :init="false" class="banner-slider">
      <swiper-slide>
        <img src="../../assets/img/slider1.png" class="w-full" alt="">
      </swiper-slide>

      <swiper-slide>
        <img src="../../assets/img/slider-2.jpeg" class="w-full" alt="">
      </swiper-slide>

      <swiper-slide>
        <img src="../../assets/img/slider3.png" class="w-full" alt="">
      </swiper-slide>
    </swiper-container>

    <!-- Custom Bullet -->
    <div class="bullet flex gap-2 absolute bottom-4 left-1/2 -translate-x-1/2 z-10 p-2 rounded-full bg-white"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { register } from 'swiper/element/bundle';
import type { SwiperContainer } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

onMounted(() => {
  register()

  const swiperEl = document.querySelector<SwiperContainer>('.banner-slider');
  if (!swiperEl) return

  const options: SwiperOptions = {
    pagination: {
      clickable: true,
      enabled: true,
      bulletClass: 'w-2 h-2 rounded-full bg-green-300',
      bulletActiveClass: '!bg-green-500',
      el: '.bullet',
    },
    spaceBetween: 24,
  };

  Object.assign(swiperEl, options);
  swiperEl?.initialize();
})

</script>
