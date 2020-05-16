<template>
  <li class="p-4 text-3xl">
    <my-router-link
      class="transition-all duration-300"
      :location="this.route"
      :class="current ? 'underline text-4xl' : ''"
    >
      <slot></slot>
    </my-router-link>
  </li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['route', 'current'],
};
</script>
