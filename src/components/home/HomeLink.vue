<template>
  <router-link to="#" @click.native.prevent="updateLocation">
    <h1
      class="home-link
      hover:text-primary
      text-3xl
      hover:underline
      transition
      duration-500
      ease-in-out"
    >
      <slot></slot>
    </h1>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'home-link',
  props: ['location'],

  methods: {
    ...mapActions({
      setLocation: 'setLocation',
    }),

    updateLocation() {
      this.setLocation(this.location);
      this.$router.push(this.location);
    },
  },
};
</script>
