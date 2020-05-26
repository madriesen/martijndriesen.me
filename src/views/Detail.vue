<template>
  <div class="flex h-screen">
    <aside-bar />
    <!-- content -->
    <div class="w-full h-full">
      <div class="pt-12 w-full h-full flex flex-col ">
        <content-title
          :update="current_title.title"
          :content="current_title.text"
        >
          {{ current_title.text }}
        </content-title>

        <div class="detail-content px-24 pt-16 flex-1">
          <transition name="fade">
            <router-view class="h-full"></router-view>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AsideBar from '@/components/detail/AsideBar.vue';
import Title from '@/components/detail/Title.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'detail',
  components: {
    'aside-bar': AsideBar,
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

<style lang="scss" scope>
.fade-leave-active {
  transition: opacity 500ms;
}
.fade-enter-active {
  animation: show 2000ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
