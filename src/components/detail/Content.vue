<template>
  <div>
    <transition name="fade">
      <div v-if="!page_update">
        <div v-if="this.location === 'bar'"><bar-content /></div>
        <div v-else-if="this.location === 'webdev'"><webdev-content /></div>
        <div v-else-if="this.location === 'sound'"><sound-content /></div>
        <div v-else></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Bar from '@/components/detail/content/Bar.vue';
import Sound from '@/components/detail/content/Sound.vue';
import Webdev from '@/components/detail/content/Webdev.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'my-content',

  props: ['location'],

  components: {
    'bar-content': Bar,
    'sound-content': Sound,
    'webdev-content': Webdev,
  },

  computed: {
    ...mapGetters({
      page_update: 'update_detail_page',
    }),
  },
};
</script>

<style lang="scss" scope>
.fade-leave-active {
  transition: opacity 500ms;
}

.fade-enter-active {
  animation: show 2000ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
