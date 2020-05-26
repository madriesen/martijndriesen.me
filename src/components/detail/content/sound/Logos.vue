<template>
  <div class="pb-16 grid grid-cols-5 h-48">
    <div
      v-for="brand in brands"
      :key="brand"
      class="flex align-middle items-center justify-around h-full mx-4"
    >
      <brand-logo :brand="brand" />
    </div>
  </div>
</template>
<script>
import brandLogo from '@/components/detail/content/sound/BrandLogos.vue';

export default {
  name: 'sound-brand-logos',
  components: { 'brand-logo': brandLogo },
  data() {
    return {
      brands: ['behringer', 'midas', 'allen-heath', 'yamaha', 'mackie'],
    };
  },
};
</script>
