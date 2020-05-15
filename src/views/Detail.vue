<template>
  <div class="flex h-full">
    <div
      class="h-full w-56 z-0 relative h-full bg-no-repeat bg-center bg-cover"
      :style="{
        'background-image': 'url(' + baseurl + location + '.jpg)',
      }"
    >
      <div
        class="bg-secondary
              absolute
              top-0 right-0
              w-full h-full z-10 pt-24"
      >
        <div class="mx-auto w-24 z-20">
          <router-link to="/">
            <img src="/images/logo/icon_White.png" alt="logo" />
          </router-link>
        </div>
        <side-nav class="text-center" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

import SideNav from '@/components/detail/SideNav.vue';

export default {
  name: 'detail',

  components: { 'side-nav': SideNav },

  data() {
    return {
      baseurl: '/images/background/',
    };
  },

  computed: {
    ...mapGetters({
      location: 'location',
    }),
  },

  methods: {
    ...mapActions({
      setLocation: 'setLocation',
    }),
  },

  created() {
    this.setLocation(this.$route.name);
  },
};
</script>
