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
    }),

    updateLocation() {
      let delaytime = 0;
      if (
        this.location !== '/'
        && (this.current_location === 'home' || this.current_location === '/')
      ) delaytime = 1400;
      console.log('delaytime for ', this.location, delaytime);

      this.setCurrentLocation(this.location);
      setTimeout(() => this.$router.push(this.location), delaytime);
    },
  },
};
</script>
