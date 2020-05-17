<template>
  <router-link to="#" @click.native.prevent="updateLocation">
    <slot></slot>
  </router-link>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'my-router-link',

  props: ['to', 'location'],

  computed: {
    ...mapGetters({
      current_location: 'current_location',
    }),
  },

  methods: {
    ...mapActions({
      setCurrentLocation: 'setCurrentLocation',
      updateDetailPage: 'updateDetailPage',
    }),

    updateLocation() {
      let delaytime = 1000;

      if (this.location === '/') delaytime = 0;

      if (this.current_location !== 'home' && this.current_location !== '/') {
        if (this.location !== '/') {
          this.updateDetailPage(true);
          this.$router.push(this.location);
          setTimeout(() => {
            this.setCurrentLocation(this.location);
            this.updateDetailPage(false);
          }, 500);
          return;
        }
      }
      setTimeout(() => this.$router.push(this.location), delaytime);
      this.setCurrentLocation(this.location);
    },
  },
};
</script>
