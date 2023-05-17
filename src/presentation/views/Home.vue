<template>
  <main class="home">
    <section class="main-section">
      <div class="eclipse eclipse--orange"></div>
      <div class="eclipse eclipse--green"></div>

      <div class="container">
        <div class="content__row content__row--align-center">
          <div class="content__column column--4 column-desktop--7">
            <h1>Contabilidade digital especialista em profissionais PJ</h1>
            <p>
              Seu tempo é muito importante para cuidar de tudo sozinho.
              <br />Deixe a burocracia com a gente
            </p>
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
            <img
              src="@/assets/images/svg/home-main_section.svg"
              alt="Home main section"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "app-home",

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },
  },

  components: {},
};
</script>
