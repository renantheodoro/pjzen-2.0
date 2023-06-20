<template lang="">
  <Header />

  <main class="price-page page">
    <MainSection imageUrl="price-page-main_section">
      <h1>Fique tranquilo e deixe tudo conosco</h1>
      <p>Desde a Abertura até a Entrega do Imposto de Renda</p>
    </MainSection>

    <section class="section-default section-default--prices">
      <div class="eclipse eclipse--green"></div>

      <div class="container">
        <div class="section-default__card section-default__card--prices">
          <h2 class="section-default__title">Planos e Preços</h2>

          <table class="table-prices table-prices--plans">
            <thead>
              <tr>
                <th :colspan="isMobile ? '1' : '2'"></th>
                <th>
                  <strong>Zen I</strong>
                </th>
                <th>
                  <strong>Zen II</strong>
                </th>
                <th>
                  <strong>Zen III</strong>
                </th>
                <th>
                  <strong>Custom</strong>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td :colspan="isMobile ? '1' : '2'"></td>
                <td>
                  <span class="table-prices--plans__price-bold">R$99</span>
                  <span class="table-prices--plans__price-light">/mês</span>
                </td>
                <td>
                  <span class="table-prices--plans__price-bold">R$199</span>
                  <span class="table-prices--plans__price-light">/mês</span>
                </td>
                <td>
                  <span class="table-prices--plans__price-bold">R$299</span>
                  <span class="table-prices--plans__price-light">/mês</span>
                </td>
                <td>
                  <span class="table-prices--plans__price-light"
                    >Sob Consulta</span
                  >
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'"></td>
                <td>
                  <router-link
                    :to="{ name: 'price-page' }"
                    class="button button--primary button--orange"
                  >
                    Contratar
                  </router-link>
                </td>
                <td>
                  <router-link
                    :to="{ name: 'price-page' }"
                    class="button button--primary button--blue"
                  >
                    Contratar
                  </router-link>
                </td>
                <td>
                  <router-link
                    :to="{ name: 'price-page' }"
                    class="button button--primary button--blue-dark"
                  >
                    Contratar
                  </router-link>
                </td>
                <td>
                  <a
                    @click="openGetInTouchForm()"
                    class="button button--primary button--blue-darkest"
                  >
                    Fale com a gente
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            class="table-prices table-prices--comparison start-with-purple-row"
          >
            <thead>
              <tr>
                <th :colspan="isMobile ? '1' : '2'">
                  <div class="item-content">
                    <div class="item-content__icon">
                      <img
                        src="@/assets/images/svg/icons/icon-clock.svg"
                        alt="icon check"
                      />
                    </div>
                    <div class="item-content__text">Processos e Rotinas</div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Contabilidade <br class="only-mobile" />completa
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-orange.svg"
                    class="icon-check"
                    alt="check orange"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue.svg"
                    class="icon-check"
                    alt="check blue"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-dark.svg"
                    class="icon-check"
                    alt="check blue-dark"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Processo de <br class="only-mobile" />abertura grátis
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-orange.svg"
                    class="icon-check"
                    alt="check orange"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue.svg"
                    class="icon-check"
                    alt="check blue"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-dark.svg"
                    class="icon-check"
                    alt="check blue-dark"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Emissão de NFs <br class="only-mobile" />pela PJzen
                </td>
                <td>3</td>
                <td>5</td>
                <td>10</td>
                <td>15+</td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Pró-labore dos <br class="only-mobile" />sócios
                </td>
                <td>até 1 sócios</td>
                <td>até 2 sócios</td>
                <td>até 2 sócios</td>
                <td>2+</td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Folha de <br class="only-mobile" />pagamento
                </td>

                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-darkest"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-darkest"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-darkest"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <table class="table-prices table-prices--comparison">
            <thead>
              <tr>
                <th :colspan="isMobile ? '1' : '2'">
                  <div class="item-content">
                    <div class="item-content__icon">
                      <img
                        src="@/assets/images/svg/icons/icon-phone.svg"
                        alt="icon check"
                      />
                    </div>
                    <div class="item-content__text">Atendimento</div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Atendimento via <br class="only-mobile" />Whatsapp
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-orange.svg"
                    class="icon-check"
                    alt="check orange"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue.svg"
                    class="icon-check"
                    alt="check blue"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-dark.svg"
                    class="icon-check"
                    alt="check blue-dark"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Atendimento via <br class="only-mobile" />e-mail
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-orange.svg"
                    class="icon-check"
                    alt="check orange"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue.svg"
                    class="icon-check"
                    alt="check blue"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-dark.svg"
                    class="icon-check"
                    alt="check blue-dark"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Atendimento via <br class="only-mobile" />telefone
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-darkest"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-darkest"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-dark.svg"
                    class="icon-check"
                    alt="check blue-dark"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Horário de <br class="only-mobile" />atendimento
                </td>
                <td>9h - 18h</td>
                <td>9h - 18h</td>
                <td>9h - 18h</td>
                <td>9h - 18h</td>
              </tr>
            </tbody>
          </table>

          <table class="table-prices table-prices--comparison">
            <thead>
              <tr>
                <th :colspan="isMobile ? '1' : '2'">
                  <div class="item-content">
                    <div class="item-content__icon">
                      <img
                        src="@/assets/images/svg/icons/icon-file-contract.svg"
                        alt="icon check"
                      />
                    </div>
                    <div class="item-content__text">Regras e condições</div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Regime <br class="only-mobile" />tributário
                </td>
                <td>
                  MEI,<br />
                  Simples nacional
                </td>
                <td>
                  MEI,<br />
                  Simples nacional
                </td>
                <td>
                  MEI,<br />
                  Simples nacional
                </td>
                <td>
                  MEI,<br />
                  Simples nacional
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Faturamento <br class="only-mobile" />mensal
                </td>
                <td>até 25K</td>
                <td>25K - 50K</td>
                <td>50K - 100K</td>
                <td>100K - 300K</td>
              </tr>
            </tbody>
          </table>

          <table class="table-prices table-prices--comparison">
            <thead>
              <tr>
                <th :colspan="isMobile ? '1' : '2'">
                  <div class="item-content">
                    <div class="item-content__icon">
                      <img
                        src="@/assets/images/svg/icons/icon-heart.svg"
                        alt="icon check"
                      />
                    </div>
                    <div class="item-content__text">Benefícios</div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Taxa de <br class="only-mobile" />abertura para <br />São
                  Paulo/SP
                </td>
                <td>Grátis</td>
                <td>Grátis</td>
                <td>Grátis</td>
                <td>Grátis</td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">Conta PJ gratuita</td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-orange.svg"
                    class="icon-check"
                    alt="check orange"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue.svg"
                    class="icon-check"
                    alt="check blue"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-dark.svg"
                    class="icon-check"
                    alt="check blue-dark"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    class="icon-check"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
              <tr>
                <td :colspan="isMobile ? '1' : '2'">
                  Certificado A1 <br class="only-mobile" />Gratuito
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-minus"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-minus"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-minus.svg"
                    alt="check blue-minus"
                  />
                </td>
                <td>
                  <img
                    src="@/assets/images/svg/icons/icon-check-blue-darkest.svg"
                    alt="check blue-darkest"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-default section-default--faq">
      <div class="container">
        <h2>Perguntas frequentes</h2>

        <div class="content__row">
          <div class="content__column column--4 column-desktop--6">
            <div
              class="faq-collapse"
              :key="question.title"
              v-for="(question, index) in faqColumn1"
            >
              <button
                class="faq-collapse--faq__header"
                :class="{
                  isExpanded: questions[index].isExpanded,
                }"
                @click="handleAccordion(index)"
              >
                {{ question.title }}
              </button>
              <Collapse
                :when="questions[index].isExpanded"
                class="faq-collapse--faq__content v-collapse"
              >
                <p>
                  {{ question.answer }}
                </p>
              </Collapse>
            </div>
          </div>
          <div class="content__column column--4 column-desktop--6">
            <div
              class="faq-collapse"
              v-for="(question, index) in faqColumn2"
              :key="question.title"
            >
              <button
                class="faq-collapse--faq__header"
                :class="{
                  isExpanded: questions[baseIndexColumn2 + index].isExpanded,
                }"
                @click="handleAccordion(baseIndexColumn2 + index)"
              >
                {{ question.title }}
              </button>
              <Collapse
                :when="questions[baseIndexColumn2 + index].isExpanded"
                class="faq-collapse--faq__content v-collapse"
              >
                <p>
                  {{ question.answer }}
                </p>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Testimonials />

    <CallToAction @onOpenGetInTouchForm="openGetInTouchForm()" />
  </main>

  <Footer />
</template>
<script>
import Header from "@/presentation/modules/Header.vue";
import Footer from "@/presentation/modules/Footer.vue";

import MainSection from "../modules/MainSection.vue";
import Testimonials from "../modules/Testimonials.vue";
import CallToAction from "../modules/CallToAction.vue";

import { reactive } from "vue";
import { Collapse } from "vue-collapsed";

import faqContentList from "@/commons/consts/faq-const";

export default {
  name: "app-price-page",

  data() {
    return {
      questions: reactive(faqContentList),
    };
  },

  methods: {
    handleAccordion(selectedIndex) {
      this.questions.forEach((_, index) => {
        this.questions[index].isExpanded =
          index === selectedIndex ? !this.questions[index].isExpanded : false;
      });
    },

    openGetInTouchForm() {
      this.$emit("onOpenGetInTouchForm");
    },
  },

  computed: {
    baseIndexColumn2() {
      return this.questions.length / 2;
    },
    faqColumn1() {
      return this.questions.slice(0, this.baseIndexColumn2);
    },
    faqColumn2() {
      return this.questions.slice(this.baseIndexColumn2, this.questions.length);
    },

    isMobile() {
      if (window.screen.width <= 767) {
        return true;
      } else {
        return false;
      }
    },
  },

  components: {
    MainSection,
    Collapse,
    Testimonials,
    CallToAction,
    Header,
    Footer,
  },
};
</script>
<style lang=""></style>
