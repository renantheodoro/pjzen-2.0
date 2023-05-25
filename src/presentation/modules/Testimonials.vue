<template lang="">
  <div class="section-default section-default--testimonials">
    <div class="eclipse eclipse--pink"></div>
    <div class="eclipse eclipse--green"></div>
    <div class="eclipse eclipse--purple"></div>

    <div class="container">
      <div class="section-default__card section-default__card--testimonials">
        <div class="section-default__card--testimonials__header">
          <h2 class="section-default__title">
            Veja o <strong>depoimento</strong> dos membros que ganharam mais
            tempo no dia a dia
          </h2>

          <router-link to="" class="button button--outline only-desktop">
            Ver mais histórias
          </router-link>
        </div>

        <div class="testimonials">
          <div @click="openModal()" class="testimonials__card">
            <img src="@/assets/images/jpg/testimonial-example.jpeg" alt="" />
          </div>
          <div @click="openModal()" class="testimonials__card">
            <img src="@/assets/images/jpg/testimonial-example.jpeg" alt="" />
          </div>
          <div @click="openModal()" class="testimonials__card">
            <img src="@/assets/images/jpg/testimonial-example.jpeg" alt="" />
          </div>
          <div @click="openModal()" class="testimonials__card">
            <img src="@/assets/images/jpg/testimonial-example.jpeg" alt="" />
          </div>
        </div>

        <router-link to="" class="button button--outline only-mobile">
          Ver mais histórias
        </router-link>
      </div>
    </div>
  </div>

  <Modal ref="testimonialsModal">
    <source src="@/assets/videos/testimonial-example.mp4" type="video/mp4" />
  </Modal>
</template>
<script>
import Modal from "@/presentation/components/Modal.vue";

export default {
  name: "app-testimonials",

  methods: {
    openModal() {
      this.$refs.testimonialsModal.open();
    },
  },

  components: {
    Modal,
  },
};
</script>
<style lang=""></style>
