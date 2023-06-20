<template lang="">
  <div class="section-default section-default--testimonials">
    <div class="eclipse eclipse--pink"></div>
    <div class="eclipse eclipse--green"></div>
    <div class="eclipse eclipse--purple"></div>

    <div  class="container">
      <div class="section-default__card section-default__card--testimonials">
        <div  class="section-default__card--testimonials__header">
          <h2 class="section-default__title">
            Veja o <strong>depoimento</strong> dos membros que ganharam mais
            tempo no dia a dia
          </h2>

          <a
            href="https://www.instagram.com/vcpjzen/reels/"
            target="_blank"
            class="button button--outline only-desktop"
          >
            Ver mais histórias
          </a>
        </div>

        <div  class="testimonials">
          <div @click="openModal(0)" class="testimonials__card">
            <img
              src="@/assets/images/jpg/testimonial-dayane_beatriz.jpg"
              alt="Dayane Beatriz"
            />
          </div>
          <div @click="openModal(1)" class="testimonials__card">
            <img
              src="@/assets/images/jpg/testimonial-tiago_pascoaltti.jpg"
              alt="Tiago Pascoaletti"
            />
          </div>
          <div @click="openModal(2)" class="testimonials__card">
            <img
              src="@/assets/images/jpg/testimonial-aline_jones.jpg"
              alt="Aline Jones"
            />
          </div>
          <div @click="openModal(3)" class="testimonials__card">
            <img
              src="@/assets/images/jpg/testimonial-jessica.jpg"
              alt="Jessica Hernandes"
            />
          </div>
        </div>

        <a
          href="https://www.instagram.com/vcpjzen/reels/"
          target="_blank"
          class="button button--outline only-mobile"
        >
          Ver mais histórias
        </a>
      </div>
    </div>
  </div>

  <Modal ref="testimonialsModal">
    <Loader v-if="modalIsBusy" />

    <iframe
      v-if="!modalIsBusy && currentVideoIndex != -1"
      width="885"
      height="498"
      :src="testimonialsVideosList[currentVideoIndex].link"
      :title="testimonialsVideosList[currentVideoIndex].title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </Modal>
</template>

<script>
import Modal from "@/presentation/components/Modal.vue";
import Loader from "@/presentation/components/Loader.vue";
import testimonialsContent from "@/commons/content/testimonials-videos.json";

export default {
  name: "app-testimonials",

  data() {
    return {
      testimonialsVideosList: testimonialsContent,
      currentVideoIndex: -1,
      modalIsBusy: false,
    };
  },

  methods: {
    openModal(index) {
      this.currentVideoIndex = index;

      this.modalIsBusy = true;
      setTimeout(() => (this.modalIsBusy = false), 1000);

      this.$refs.testimonialsModal.open();
    },

    closeModal() {
      this.currentVideoIndex = -1;
      this.$refs.testimonialsModal.close();
    },
  },

  components: {
    Modal,
    Loader,
  },
};
</script>
<style lang=""></style>
