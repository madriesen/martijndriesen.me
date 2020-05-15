<template>
  <div class="flex h-full">
    <aside-bar />
    <!-- content -->
    <div class="mt-12 w-full">
      <div
        class="w-full h-32 bg-primary flex items-center content-center justify-start pl-24"
      >
        <h1 class="text-white text-6xl pt-3">Locatie</h1>
      </div>
    </div>
  </div>
</template>
<script>
import AsideBar from '@/components/detail/AsideBar.vue';

export default {
  name: 'detail',
  components: { 'aside-bar': AsideBar },
};
</script>
