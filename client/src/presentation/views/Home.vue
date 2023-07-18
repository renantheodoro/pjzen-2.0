<template>
  <Header />

  <main class="home page">
    <MainSection imageUrl="home-main_section">
      <h1>Contabilidade <br />digital especialista em profissionais PJ</h1>
      <p>
        Seu tempo é muito importante<br class="only-mobile" />
        para cuidar de tudo sozinho. <br />Deixe a burocracia com a gente
      </p>
    </MainSection>

    <section class="section-default characters-section">
      <div class="container">
        <h2 class="section-default__title">Pra quem é a PJzen</h2>

        <div class="characters-carousel">
          <carousel
            :items-to-show="isMobile ? 2.5 : 5"
            :autoplay="2000"
            :pauseAutoplayOnHover="true"
            :wrapAround="true"
          >
            <slide
              v-for="(character, index) in charactersCarousel"
              :key="index"
            >
              <img :src="$getSvgUrl(character.image)" :alt="character.text" />
              <h3>{{ character.text }}</h3>
            </slide>
          </carousel>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="container">
        <div class="section-default__card section-default__card--how-it-works">
          <h2 class="section-default__title">
            Como funciona a PJzen, na prática:
          </h2>

          <div class="content__row">
            <div class="content__column column--4 column-desktop--6">
              <h3>O que você faz</h3>

              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Requisitar notas fiscais e qualquer outra coisa que precise ;)
                </div>
              </div>
              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Resolver as suas dúvidas com nosso atendimento
                </div>
              </div>

              <img
                src="@/assets/images/svg/home-in_practice.svg"
                alt="Na prática"
                class="section-default__card__image only-desktop"
              />
            </div>

            <div class="divider only-mobile"></div>

            <div class="content__column column--4 column-desktop--6">
              <h3>O que nós fazemos</h3>

              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Cálculo de guias de imposto, folha de pagamento e pró-labore
                </div>
              </div>
              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Mantemos sua empresa em dia com todas as obrigações do governo
                  - IRPJ incluso
                </div>
              </div>
              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Fazemos e assinamos relatórios contábeis como balanço. DRE e
                  outros para você ficar sempre tranquilo
                </div>
              </div>
              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Atendimento rápido por diversos canais
                </div>
              </div>
              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">
                  Emissão de nota fiscal e boleto gratuito
                </div>
              </div>
              <div class="item-content">
                <div class="item-content__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-check_square.svg"
                    alt="icon check"
                  />
                </div>
                <div class="item-content__text">Sua contabilidade completa</div>
              </div>

              <img
                src="@/assets/images/svg/home-in_practice.svg"
                alt="Na prática"
                class="section-default__card__image only-mobile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="container">
        <h2 class="section-default__title">Nossos serviços</h2>

        <div class="our-services">
          <div class="our-services__content">
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-paper.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Obrigações Fiscais</h4>
              <p>Entrega e comunicação completa</p>
            </div>
          </div>

          <div class="our-services__content">
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-building.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>abertura de empresas</h4>
              <p>Grátis na cidade de São Paulo</p>
            </div>
          </div>

          <div class="our-services__content">
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-ballot-check.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Emissão de nota fiscal</h4>
              <p>Simples e fácil, quando solicitado</p>
            </div>
          </div>

          <div class="our-services__content">
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-user.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Imposto de Renda PF</h4>
              <p>Entrega anual da declaração</p>
            </div>
          </div>

          <div class="our-services__content">
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-shield-minus.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Controle de Certidão Negativa</h4>
              <p>Seus documentos organizados</p>
            </div>
          </div>

          <div class="our-services__content">
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-dollar-sign.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Contribuição ao INSS</h4>
              <p>De acordo com a necessidade da PF</p>
            </div>
          </div>

          <div
            class="our-services__content our-services__content--mobile-hidden"
            :class="{ open: isServicesOpened }"
          >
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-file-contract.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Declaração de Faturamento</h4>
              <p>Envio a terceiros quando solicitado</p>
            </div>
          </div>

          <div
            class="our-services__content our-services__content--mobile-hidden"
            :class="{ open: isServicesOpened }"
          >
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-chart-line-up.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Declaração de Rendimento</h4>
              <p>Envio a terceiros quando solicitado</p>
            </div>
          </div>

          <div
            class="our-services__content our-services__content--mobile-hidden"
            :class="{ open: isServicesOpened }"
          >
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-newspaper.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Gestão de Impostos</h4>
              <p>Controle dos pagamentos e dívidas</p>
            </div>
          </div>

          <div
            class="our-services__content our-services__content--mobile-hidden"
            :class="{ open: isServicesOpened }"
          >
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-ring-diamond.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Balanço Patrimonial</h4>
              <p>Envio anual ou quando solicitado</p>
            </div>
          </div>

          <div
            class="our-services__content our-services__content--mobile-hidden"
            :class="{ open: isServicesOpened }"
          >
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-eye.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Checagem de Protestos</h4>
              <p>Comunicação quando houver registro</p>
            </div>
          </div>

          <div
            class="our-services__content our-services__content--mobile-hidden"
            :class="{ open: isServicesOpened }"
          >
            <div class="our-services__content__icon">
              <img
                src="@/assets/images/svg/icons/icon-memo-pad.svg"
                alt="icon paper"
              />
            </div>
            <div class="our-services__content__text">
              <h4>Planejamento Tributário</h4>
              <p>Auxilio na escolha do menor imposto</p>
            </div>
          </div>
        </div>

        <a
          href="#"
          @click.prevent="isServicesOpened = !isServicesOpened"
          class="blue-link only-mobile"
        >
          <strong>Ver todos os serviços</strong>
        </a>
      </div>
    </section>

    <section class="section-default content-icon-columns">
      <div class="container">
        <h2 class="section-default__title">
          Veja como é fácil trazer sua empresa para a PJzen
        </h2>

        <div class="content__row">
          <div class="content__column column--4 column-desktop--4">
            <div class="content-icon-columns__item">
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon-phone.svg"
                  alt="icon phone"
                />
              </div>
              <div>
                <span class="content-icon-columns__item__step"> ETAPA 1 </span>
                <h3 class="content-icon-columns__item__title">PLANO</h3>
                <p class="content-icon-columns__item__text">
                  Escolha seu plano ideal
                </p>
              </div>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div class="content-icon-columns__item">
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon-phone-laptop.svg"
                  alt="chart pie"
                />
              </div>
              <div>
                <span class="content-icon-columns__item__step"> ETAPA 2 </span>
                <h3 class="content-icon-columns__item__title">DOCUMENTAÇÃO</h3>
                <p class="content-icon-columns__item__text">
                  Forneça os acessos necessários
                </p>
              </div>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--4">
            <div class="content-icon-columns__item">
              <div class="content-icon-columns__item__icon">
                <img
                  src="@/assets/images/svg/icons/icon-check-circle.svg"
                  alt="laugh squint"
                />
              </div>
              <div>
                <span class="content-icon-columns__item__step"> ETAPA 3 </span>
                <h3 class="content-icon-columns__item__title">TUDO PRONTO!</h3>
                <p class="content-icon-columns__item__text">
                  Feito! Agora é tudo conosco
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default section-default--plans">
      <div class="container">
        <h2 class="section-default__title">Planos e Preços</h2>

        <PlansList
          @onOpenGetInTouchForm="openGetInTouchForm()"
          :hasCustomPlan="true"
          :isInteractive="false"
        />

        <router-link :to="{ name: 'price-page' }" class="blue-link">
          Saber mais sobre os planos</router-link
        >
      </div>
    </section>

    <Testimonials />

    <CallToAction @onOpenGetInTouchForm="openGetInTouchForm()" />
  </main>

  <Footer />
</template>
<script>
import { Carousel, Slide } from "vue3-carousel";

import Header from "@/presentation/modules/Header.vue";
import Footer from "@/presentation/modules/Footer.vue";
import PlansList from "@/presentation/modules/PlansList.vue";

import MainSection from "@/presentation/modules/MainSection.vue";
import Testimonials from "@/presentation/modules/Testimonials.vue";
import CallToAction from "@/presentation/modules/CallToAction.vue";

export default {
  name: "app-home",

  data() {
    return {
      charactersCarousel: [
        {
          image: "character-doctor",
          text: "Médicos",
        },
        {
          image: "character-designers",
          text: "Designers",
        },
        {
          image: "character-devs",
          text: "Devs",
        },
        {
          image: "character-actors",
          text: "Atores",
        },
        {
          image: "character-beauty",
          text: "Beleza",
        },
        {
          image: "character-brokers",
          text: "Corretores",
        },
        {
          image: "character-lawyers",
          text: "Advogados",
        },
        {
          image: "character-engineers",
          text: "Engenheiros",
        },
        {
          image: "character-fitness",
          text: "Fitness",
        },
        {
          image: "character-more",
          text: "Você",
        },
      ],
      isServicesOpened: false,
    };
  },

  methods: {
    openFormNav(event) {
      this.$emit("openFormNav", event);
    },

    openGetInTouchForm() {
      this.$emit("onOpenGetInTouchForm");
    },
  },

  computed: {
    isMobile() {
      if (window.screen.width <= 767) {
        return true;
      } else {
        return false;
      }
    },
  },

  components: {
    Carousel,
    Slide,
    MainSection,
    Testimonials,
    CallToAction,
    Header,
    Footer,
    PlansList,
  },
};
</script>
