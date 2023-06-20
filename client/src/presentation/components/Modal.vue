<template lang="">
  <div
    :class="{ active: isModalOpen }"
    class="modal-overlay"
    @click="close()"
  ></div>
  <div
    :key="modalKey"
    :class="{ active: isModalOpen }"
    ref="modal"
    class="modal"
    :style="overflowStyle"
  >
    <a
      :class="`modal__close-button ${
        hasButtonInside ? 'modal__close-button--inside' : ''
      }`"
      @click="close()"
    >
      <!-- <img src="@/assets/images/svg/icons/icon-times.svg" alt="Icon times" /> -->
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.7539 9.75L19.082 16.0781C19.4336 16.4297 19.4336 17.0742 19.082 17.4258L17.6172 18.8906C17.2656 19.2422 16.6211 19.2422 16.2695 18.8906L10 12.5625L3.67188 18.8906C3.32031 19.2422 2.67578 19.2422 2.32422 18.8906L0.859375 17.4258C0.507812 17.0742 0.507812 16.4297 0.859375 16.0781L7.1875 9.75L0.859375 3.48047C0.507812 3.12891 0.507812 2.48438 0.859375 2.13281L2.32422 0.667969C2.67578 0.316406 3.32031 0.316406 3.67188 0.667969L10 6.99609L16.2695 0.667969C16.6211 0.316406 17.2656 0.316406 17.6172 0.667969L19.082 2.13281C19.4336 2.48438 19.4336 3.12891 19.082 3.48047L12.7539 9.75Z"
        />
      </svg>
    </a>

    <slot></slot>
  </div>
</template>
<script>
// import TestimonialVideo from "@/presentation/components/TestimonialVideo.vue";

export default {
  name: "app-modal",

  props: {
    hasButtonInside: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    overflowStyle() {
      if (this.hasButtonInside) {
        return {
          overflowY: "auto",
        };
      }

      return {};
    },
  },

  data() {
    return {
      isModalOpen: false,
      modalKey: 0,
    };
  },

  methods: {
    open() {
      this.isModalOpen = true;
    },

    close() {
      this.modalKey++;
      this.isModalOpen = false;
    },
  },

  components: {
    // TestimonialVideo
  },
};
</script>
<style lang=""></style>
