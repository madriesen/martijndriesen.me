<template>
  <div id="bg-images" class="h-full flex">
    <div
      class="w-1/3 my-image z-0 relative bg-no-repeat
      bg-center bg-cover h-full"
      v-for="(image, title) in this.images"
      :key="title"
      :style="{
        'background-image': 'url(' + baseurl + image.title + '.jpg)',
      }"
      :class="[image.title, is_home]"
    >
      <div class="bg-secondary absolute top-0 right-0 w-full h-full z-10">
        <div
          class="w-11/12 text-center absolute bottom-0 mb-48 text-secondary leading-normal"
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
    };
  },

  computed: {
    ...mapGetters({
      current_location: 'current_location',
      locations: 'locations',
      navigate: false,
    }),

    images() {
      return this.locations.filter((item) => item.title !== 'home');
    },

    is_home() {
      const cl = this.current_location;
      if (cl === 'home' || cl === '/') return false;

      const array = [cl];
      this.locations.forEach((location) => {
        if (location.title !== cl && location.title !== 'home') {
          array.unshift(location.title);
        }
      });
      this.setHeight(array);
      return true;
    },
  },

  methods: {
    setHeight(locations = ['bar', 'webdev', 'sound'], i = 0) {
      setTimeout(() => {
        if (i < 2) {
          this.setHeightToNull(this.getElement(locations[0]));
          locations.shift();
        }
        if (i === 2) {
          this.setWidth(this.getElement(locations));
          return;
        }
        this.setHeight(locations, i + 1);
      }, 180);
    },

    getElement(location) {
      return this.$el.querySelector(`.${location}`);
    },
    setHeightToNull(element) {
      element.classList.remove('h-full');
      element.classList.add('image-no-height');
    },
    setWidth(element) {
      element.classList.remove('w-1/3');
      element.classList.add('w-1/5');
    },
  },
};
</script>
