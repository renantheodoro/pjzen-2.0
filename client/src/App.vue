<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | SITE_NAME` : `SITE_NAME`
    }}</template>
  </metainfo>

  <router-view @onOpenGetInTouchForm="openGetInTouchForm()"></router-view>

  <Modal ref="getInTouchForms" :hasButtonInside="true">
    <GetInTouchForm />
  </Modal>

  <Footer></Footer>
</template>

<script>
import GetInTouchForm from "@/presentation/modules/GetInTouchForm.vue";
import Modal from "@/presentation/components/Modal.vue";

export default {
  name: "App",

  methods: {
    openGetInTouchForm() {
      this.$refs.getInTouchForms.open();
    },
  },

  mounted() {
    // let recaptchaScript = document.createElement("script");
    // recaptchaScript.setAttribute("src", "//www.instagram.com/embed.js");
    // document.head.appendChild(recaptchaScript);
  },

  components: {
    Modal,
    GetInTouchForm,
  },
};
</script>
