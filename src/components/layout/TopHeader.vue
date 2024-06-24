<template>
  <header class="py-2 px-4 lg:flex hidden items-center justify-between gap-4 bg-slate-50">

    <div class="flex items-center gap-4">
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


    <div class="flex items-center gap-4">

      <RouterLink to="">
        <img src="../../assets/icons/search.svg" alt="">
      </RouterLink>

      <RouterLink to="/contact-us" class="py-2.5 px-6 rounded-full text-slate-50 bg-primary-800">Contact Us</RouterLink>

      <RouterLink to="" class="flex items-center gap-4">
        <img src="../../assets/icons/kh-flag.svg" alt="">
        <span>ភាសាខ្មែរ</span>
      </RouterLink>

      <RouterLink to="" class="flex items-center gap-4">
        <img src="../../assets/icons/en-flag.svg" alt="">
        <span>English</span>
      </RouterLink>

    </div>

  </header>
</template>

<script setup lang="ts">

</script>
