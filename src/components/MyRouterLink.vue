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
    next_location() {
      if (this.location.indexOf('/detail/') === -1) return this.location;
      return this.location.substr(8);
    },
  },

  methods: {
    ...mapActions({
      setCurrentLocation: 'setCurrentLocation',
      updateDetailPage: 'updateDetailPage',
    }),

    updateLocation() {
      console.log('this.location', this.next_location);
      let delaytime = 1000;

      if (this.next_location === '/') delaytime = 0;

      if (this.current_location !== 'home' && this.current_location !== '/') {
        if (this.next_location !== '/') {
          this.updateDetailPage(true);
          this.$router.push(this.next_location);
          setTimeout(() => {
            this.setCurrentLocation(this.next_location);
            this.updateDetailPage(false);
          }, 500);
          return;
        }
      }
      setTimeout(() => this.$router.push(this.next_location), delaytime);
      this.setCurrentLocation(this.next_location);
    },
  },
};
</script>
