<template>
  <div
    class="title-div w-full h-32 bg-primary
        flex items-center content-center justify-start  pl-24"
  >
    <h1
      id="contenttitle"
      class="relative text-white text-6xl pt-3 overflow-hidden"
    >
      <slot />
      <div
        class="top-0 right-0 bottom-0
          absolute h-full bg-primary"
        :class="update_page ? 'detail-header-hide' : 'detail-header'"
      ></div>
    </h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'content-title',
  props: ['update'],

  computed: {
    ...mapGetters({
      update_page: 'update_detail_page',
    }),
  },
};
</script>
