<template>
  <div
    class="h-full w-64 z-0 relative h-full bg-no-repeat bg-center bg-cover"
    :style="{
      'background-image': 'url(' + baseurl + location + '.jpg)',
    }"
  >
    <div
      class="bg-secondary
              absolute
              top-0 right-0
              w-full h-full z-10 pt-12"
    >
      <div class="mx-auto w-24 z-20">
        <my-router-link location="/">
          <img src="/images/logo/icon_White.png" alt="logo" />
        </my-router-link>
      </div>
      <side-nav class="text-center" />
    </div>
  </div>
</template>
<script>
import SideNav from '@/components/detail/SideNav.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'aside-bar',
  components: { 'side-nav': SideNav },

  data() {
    return {
      baseurl: '/images/background/',
    };
  },

  computed: {
    ...mapGetters({
      location: 'current_location',
    }),
  },
};
</script>
