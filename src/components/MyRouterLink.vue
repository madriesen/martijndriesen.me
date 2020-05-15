<template>
  <router-link to="#" @click.native.prevent="updateLocation">
    <slot></slot>
  </router-link>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'my-router-link',

  props: ['to', 'location'],

  methods: {
    ...mapActions({
      setCurrentLocation: 'setCurrentLocation',
    }),

    updateLocation() {
      console.log('this.location', this.location);
      this.setCurrentLocation(this.location);
      this.$router.push(this.location);
    },
  },
};
</script>
