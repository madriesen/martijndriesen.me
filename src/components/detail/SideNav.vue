<template>
  <div class="text-primary">
    <ul class="mt-12">
      <list-item
        v-for="(location, title) in navItems"
        :key="title"
        :route="`/detail/${location.title}`"
        :current="location.title === current_location"
      >
        {{ location.text }}
      </list-item>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ListItem from '@/components/detail/SideNavListItem.vue';

export default {
  name: 'side-nav',

  components: { 'list-item': ListItem },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      current_location: 'current_location',
      locations: 'locations',
    }),
    navItems() {
      return this.locations.filter((item) => item.title !== 'home');
    },
  },
};
</script>
