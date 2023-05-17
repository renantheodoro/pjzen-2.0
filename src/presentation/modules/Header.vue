<template>
  <header class="header header--desktop only-desktop">
    <div class="container">
      <div class="content__row content__row--align-center">
        <div class="content__column column-desktop--2">
          <router-link :to="{ name: 'home' }" class="header__logo">
            <img src="@/assets/images/svg/icons/logo.svg" alt="PJZen" />
          </router-link>
        </div>

        <div class="content__column column-desktop--8">
          <nav>
            <router-link :to="{}">QUANTO CUSTA?</router-link>
          </nav>
        </div>

        <div class="content__column column-desktop--2">
          <a href="#" class="button button--primary">Login</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header",

  computed: {
    isMobile() {
      if (window.screen.width <= 767) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
