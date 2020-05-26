<template>
  <section id="content-sound" class="flex flex-col h-full">
    <instafoto class="flex-1 mb-5" />
    <logos />
  </section>
</template>

<script>
import logos from '@/components/detail/content/sound/Logos.vue';
import instafoto from '@/components/detail/content/sound/instagram/Image.vue';

export default {
  name: 'sound-content',
  components: { logos, instafoto },
};
</script>
