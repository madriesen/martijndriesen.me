<template>
  <div class="flex h-full">
    <div
      class="h-full w-56 z-0 relative h-full bg-no-repeat bg-center bg-cover"
      :style="{
        'background-image': 'url(' + baseurl + location + '.jpg)',
      }"
    >
      <div
        class="bg-secondary absolute top-0 right-0 w-full h-full z-10 text-center"
      >
        <div class="mt-16 mx-auto w-24 z-20">
          <router-link to="/">
            <img src="/images/logo/icon_White.png" alt="logo" />
          </router-link>
        </div>
        <div class="text-white">[navbar]</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'detail',

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
