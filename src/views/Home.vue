<template>
  <div id="homepage" class="h-full">
    <div class="absolute w-full mt-32 z-20 flex items-center justify-center">
      <logo />
    </div>
    <bg-images class="z-0" />
  </div>
</template>

<script>
import BgImages from '@/components/home/BgImages.vue';
import Logo from '@/components/home/Logo.vue';

export default {
  name: 'home',
  components: { 'bg-images': BgImages, logo: Logo },
};
</script>
