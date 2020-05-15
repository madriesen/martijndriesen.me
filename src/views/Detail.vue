<template>
  <div class="flex h-full">
    <aside-bar />
    <!-- content -->
    <div class="mt-12 w-full">
      <div
        class="title-div w-full h-32 bg-primary
        flex items-center content-center justify-start pl-24"
      >
        <h1 class="detail-content text-white text-6xl pt-3">{{ this.title[0].text }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import AsideBar from '@/components/detail/AsideBar.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'detail',
  components: { 'aside-bar': AsideBar },

  computed: {
    ...mapGetters({
      title: 'current_location_name',
    }),
  },

  methods: {
    ...mapActions({
      setLocation: 'setCurrentLocation',
    }),
  },

  created() {
    this.setLocation(this.$route.name);
  },
};
</script>
