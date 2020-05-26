<template>
  <div class="flex flex-row h-64">
    <a
      class="w-1/6 hover:w-4/6 h-full block transition-all duration-300"
      v-for="image in images"
      :key="image.name"
      :href="image.url"
      target="_blank"
    >
      <div
        class="h-full w-full bg-center bg-no-repeat bg-cover border-l-2 border-r-2 border-white"
        :style="{
          'background-image':
            'url(' + baseURL + image.name + '.' + image.ext + ')',
        }"
      ></div>
    </a></div
></template>
<script>
export default {
  name: 'vue-instagram',
  data() {
    return {
      images: [
        {
          name: 'a&h_lommel',
          ext: 'jpg',
          url:
            'https://www.instagram.com/p/Brqs4X_FTa0/?utm_source=ig_web_copy_link',
        },
        {
          name: 'compact_pelt',
          ext: 'jpg',
          url:
            'https://www.instagram.com/p/BrzjUueFJO7/?utm_source=ig_web_copy_link',
        },
        {
          name: 'mackie_genk',
          ext: 'jpg',
          url:
            'https://www.instagram.com/p/Bueb6xqHVcm/?utm_source=ig_web_copy_link',
        },
        {
          name: 'midas_brussel',
          ext: 'jpg',
          url:
            'https://www.instagram.com/p/BwxHUSmHZ1d/?utm_source=ig_web_copy_link',
        },
        {
          name: 'x32_sofa',
          ext: 'jpg',
          url:
            'https://www.instagram.com/p/Buwsb5iHASO/?utm_source=ig_web_copy_link',
        },
        {
          name: 'yamaha_yap',
          ext: 'jpg',
          url:
            'https://www.instagram.com/p/BsOnhSjFJEJ/?utm_source=ig_web_copy_link',
        },
      ],
      baseURL: '/images/sound/instagram/',
    };
  },
};
</script>
