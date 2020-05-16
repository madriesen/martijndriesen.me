<template>
  <div>
    <div v-if="this.location === 'bar'"><bar-content /></div>
    <div v-else-if="this.location === 'webdev'"><webdev-content /></div>
    <div v-else-if="this.location === 'sound'"><sound-content /></div>
    <div v-else></div>
  </div>
</template>

<script>
import Bar from '@/components/detail/content/Bar.vue';
import Sound from '@/components/detail/content/Sound.vue';
import Webdev from '@/components/detail/content/Webdev.vue';

export default {
  name: 'content',

  props: ['location'],

  components: {
    'bar-content': Bar,
    'sound-content': Sound,
    'webdev-content': Webdev,
  },
};
</script>
