<template>
  <a :href="`https://www.thomann.de/be/${brand}.html`" target="_blank" class="h-full w-full">
    <div
      class="bg-center bg-no-repeat bg-contain h-full w-full"
      :style="{
        'background-image': 'url(/images/sound/' + brand + '-vector-logo.svg)',
      }"
    ></div>
  </a>
</template>

<script>
export default {
  name: 'logoImage',
  props: ['brand'],
};
</script>
