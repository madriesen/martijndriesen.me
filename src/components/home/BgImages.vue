<template>
  <div id="bg-images" class="h-full grid grid-cols-3">
    <div
      class="z-0 relative h-full bg-no-repeat bg-center bg-cover"
      v-for="(image, title) in this.images"
      :key="title"
      :style="{
        'background-image': 'url(' + baseurl + image.title + '.jpg)',
      }"
      :class="
        location != 'home'
          ? // && location != image.title
            image.title + ' makeSmall'
          : [location != 'home']
          ? image.title
          : image.title + ' makeSmall'
      "
    >
      <div class="bg-secondary absolute top-0 right-0 w-full h-full z-10">
        <div
          class="w-full text-center absolute bottom-0 mb-48 text-secondary leading-normal"
        >
          <home-link :location="image.title">{{ image.text }}</home-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeLink from '@/components/home/HomeLink.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'bg-images',
  components: { 'home-link': homeLink },

  data() {
    return {
      baseurl: '/images/background/',
      // images: [
      //   {
      //     title: 'bar',
      //     text: 'Waiter / Bartender',
      //   },
      //   {
      //     title: 'webdev',
      //     text: 'Web Developer',
      //   },
      //   {
      //     title: 'sound',
      //     text: 'Sound Engineer',
      //   },
      // ],
    };
  },

  computed: {
    ...mapGetters({
      location: 'current_location',
      locations: 'locations',
    }),

    images() {
      return this.locations.filter((item) => item.title !== 'home');
    },
  },
};
</script>
