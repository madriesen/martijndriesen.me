<template>
  <li class="p-4 text-3xl">
    <my-router-link :location="this.route">
      <slot></slot>
    </my-router-link>
  </li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['route'],
};
</script>
