<template>
  <div id="homepage" class="h-full">
    <div class="absolute w-full mt-32 z-20 flex items-center justify-center pointer-events-none">
      <logo
        :class="location !== 'home' ? 'opacity-0' : 'opacity-100'"
        class="transition-opacity duration-500e"
      />
    </div>
    <bg-images class="z-0" />
  </div>
</template>

<script>
import BgImages from '@/components/home/BgImages.vue';
import Logo from '@/components/home/Logo.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'home',
  components: { 'bg-images': BgImages, logo: Logo },

  computed: {
    ...mapGetters({
      location: 'current_location',
    }),
  },
};
</script>
