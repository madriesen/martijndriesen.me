<template>
  <my-router-link :location="this.location">
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
  </my-router-link>
</template>

<script>
export default {
  name: 'home-link',
  props: ['location'],
};
</script>
