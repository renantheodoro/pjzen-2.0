<template>
  <footer class="footer">
    <div class="container">
      <div class="content__row">
        <!--  COLUNA 1 -->
        <div class="content__column column--2 column-desktop--5">
          <img
            src="@/assets/images/svg/icons/logo-footer.svg"
            alt="Logo footer"
            class="footer__logo"
          />

          <h2>Você tranquilo, <br /><strong>zen.</strong></h2>

          <p class="legend only-desktop">
            COPYRIGHT © 2022 | TODOS OS DIREITOS RESERVADOS | PJzen <br />
            APOIO ADMINISTRATIVO LTDA | CNPJ: 46.138.201/0001-50
          </p>
        </div>

        <!--  COLUNA 2 -->
        <div class="content__column column--2 column-desktop--3">
          <h3 class="link link--title">Páginas</h3>

          <router-link :to="{ name: 'home' }" class="link">Home</router-link>
          <router-link :to="{ name: 'price-page' }" class="link"
            >Quanto custa</router-link
          >
        </div>

        <div class="content__column column--4 lets-talk only-mobile">
          <router-link to="" class="link link--underline"
            >Vamos conversar
            <img
              src="@/assets/images/svg/icons/icon-arrow_right.svg"
              alt="Arrow right"
          /></router-link>

          <router-link to="">
            <img
              src="@/assets/images/svg/icons/icon-chat-circle.svg"
              alt="chat circle"
            />
          </router-link>
        </div>

        <!--  COLUNA 3 -->
        <div class="last-column content__column column--4 column-desktop--4">
          <div class="social-buttons">
            <a
              href="https://www.instagram.com/vcpjzen/"
              target="_blank"
              class="button button--social"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 5.60938C14.4531 5.60938 16.8906 8.04688 16.8906 11C16.8906 14 14.4531 16.3906 11.5 16.3906C8.5 16.3906 6.10938 14 6.10938 11C6.10938 8.04688 8.5 5.60938 11.5 5.60938ZM11.5 14.5156C13.4219 14.5156 14.9688 12.9688 14.9688 11C14.9688 9.07812 13.4219 7.53125 11.5 7.53125C9.53125 7.53125 7.98438 9.07812 7.98438 11C7.98438 12.9688 9.57812 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 6.125 17.7812 6.6875 17.0781 6.6875C16.375 6.6875 15.8125 6.125 15.8125 5.42188C15.8125 4.71875 16.375 4.15625 17.0781 4.15625C17.7812 4.15625 18.3438 4.71875 18.3438 5.42188ZM21.9062 6.6875C22 8.42188 22 13.625 21.9062 15.3594C21.8125 17.0469 21.4375 18.5 20.2188 19.7656C19 20.9844 17.5 21.3594 15.8125 21.4531C14.0781 21.5469 8.875 21.5469 7.14062 21.4531C5.45312 21.3594 4 20.9844 2.73438 19.7656C1.51562 18.5 1.14062 17.0469 1.04688 15.3594C0.953125 13.625 0.953125 8.42188 1.04688 6.6875C1.14062 5 1.51562 3.5 2.73438 2.28125C4 1.0625 5.45312 0.6875 7.14062 0.59375C8.875 0.5 14.0781 0.5 15.8125 0.59375C17.5 0.6875 19 1.0625 20.2188 2.28125C21.4375 3.5 21.8125 5 21.9062 6.6875ZM19.6562 17.1875C20.2188 15.8281 20.0781 12.5469 20.0781 11C20.0781 9.5 20.2188 6.21875 19.6562 4.8125C19.2812 3.92188 18.5781 3.17188 17.6875 2.84375C16.2812 2.28125 13 2.42188 11.5 2.42188C9.95312 2.42188 6.67188 2.28125 5.3125 2.84375C4.375 3.21875 3.67188 3.92188 3.29688 4.8125C2.73438 6.21875 2.875 9.5 2.875 11C2.875 12.5469 2.73438 15.8281 3.29688 17.1875C3.67188 18.125 4.375 18.8281 5.3125 19.2031C6.67188 19.7656 9.95312 19.625 11.5 19.625C13 19.625 16.2812 19.7656 17.6875 19.2031C18.5781 18.8281 19.3281 18.125 19.6562 17.1875Z"
                  fill="white"
                />
              </svg>

              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/pjzen/"
              target="_blank"
              class="button button--social"
            >
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 0.5C20.2969 0.5 21 1.20312 21 2.04688V20C21 20.8438 20.2969 21.5 19.5 21.5H1.45312C0.65625 21.5 0 20.8438 0 20V2.04688C0 1.20312 0.65625 0.5 1.45312 0.5H19.5ZM6.32812 18.5V8.51562H3.23438V18.5H6.32812ZM4.78125 7.10938C5.76562 7.10938 6.5625 6.3125 6.5625 5.32812C6.5625 4.34375 5.76562 3.5 4.78125 3.5C3.75 3.5 2.95312 4.34375 2.95312 5.32812C2.95312 6.3125 3.75 7.10938 4.78125 7.10938ZM18 18.5V13.0156C18 10.3438 17.3906 8.23438 14.25 8.23438C12.75 8.23438 11.7188 9.07812 11.2969 9.875H11.25V8.51562H8.29688V18.5H11.3906V13.5781C11.3906 12.2656 11.625 11 13.2656 11C14.8594 11 14.8594 12.5 14.8594 13.625V18.5H18Z"
                  fill="white"
                />
              </svg>

              Linkedin
            </a>
          </div>

          <div class="lets-talk only-desktop">
            <router-link to="" class="link link--underline"
              >Vamos conversar
              <img
                src="@/assets/images/svg/icons/icon-arrow_right.svg"
                alt="Arrow right"
            /></router-link>
          </div>

          <p class="legend only-mobile">
            COPYRIGHT © 2022 | TODOS OS DIREITOS RESERVADOS | PJzen <br />
            APOIO ADMINISTRATIVO LTDA | CNPJ: 46.138.201/0001-50
          </p>
        </div>
      </div>
    </div>
  </footer>

  <router-link to="" class="lets-talk-chat-link">
    <img
      src="@/assets/images/svg/icons/icon-chat-circle.svg"
      alt="chat circle"
    />
  </router-link>
</template>
<script>
export default {
  name: "app-footer",

  methods: {},
};
</script>
