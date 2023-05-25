<template lang="">
  <div
    :class="{ active: isModalOpen }"
    class="modal-overlay"
    @click="close()"
  ></div>
  <div :class="{ active: isModalOpen }" class="modal">
    <a class="modal__close-button" @click="close()">
      <img src="@/assets/images/svg/icons/icon-times.svg" alt="Icon times" />
    </a>
    <video v-if="isModalOpen" ref="video" controls autoplay>
      <slot />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
<script>
export default {
  name: "app-modal",

  data() {
    return {
      isModalOpen: false,
    };
  },

  methods: {
    open() {
      this.isModalOpen = true;
    },
    close() {
      this.isModalOpen = false;
    },
  },
};
</script>
<style lang=""></style>
