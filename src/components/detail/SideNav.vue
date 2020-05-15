<template>
  <div class="text-primary">
    <ul class="mt-8">
      <list-item v-for="(location, title) in navItems" :key="title" :route="location.title">
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
    return {
      locations: [
        { title: 'bar', text: 'Waiter / Bartender' },
        { title: 'webdev', text: 'Web Development' },
        { title: 'sound', text: 'Sound Engineer' },
        // { title: 'contact', text: 'Contact' },
      ],
    };
  },

  computed: {
    ...mapGetters({
      location: 'location',
    }),
    navItems() {
      return this.locations.filter((item) => {
        console.log('item.title', item.title);
        return item.title !== this.location;
      });
    },
  },
};
</script>
