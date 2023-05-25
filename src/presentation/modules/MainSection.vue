<template lang="">
  <section class="main-section">
    <div class="eclipse eclipse--orange"></div>
    <div class="eclipse eclipse--green"></div>

    <div class="container">
      <div class="content__row content__row--align-center">
        <div class="content__column column--4 column-desktop--7">
          <slot />
          <div class="content__row">
            <router-link to="" class="button button--outline">
              Trocar de contador
            </router-link>
            <router-link to="" class="button button--primary">
              Abra sua empresa grátis
            </router-link>
          </div>
        </div>
        <div class="content__column column--4 column-desktop--5">
          <img :src="$getSvgUrl(imageUrl)" alt="Home main section" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "app-main-section",

  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
