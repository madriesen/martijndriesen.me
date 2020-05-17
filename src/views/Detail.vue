<template>
  <div class="flex h-full">
    <aside-bar />
    <!-- content -->
    <div class="mt-12 w-full">
      <content-title
        :update="current_title.title"
        :content="current_title.text"
      >
        {{ current_title.text }}
      </content-title>

      <div class="detail-content pl-24 pt-16 w-2/3">
        <my-content :location="current_title.title" />
      </div>
    </div>
  </div>
</template>
<script>
import AsideBar from '@/components/detail/AsideBar.vue';
import Content from '@/components/detail/Content.vue';
import Title from '@/components/detail/Title.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'detail',
  components: {
    'aside-bar': AsideBar,
    'my-content': Content,
    'content-title': Title,
  },

  computed: {
    ...mapGetters({
      title: 'current_location_name',
    }),

    current_title() {
      return this.title[0];
    },
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
