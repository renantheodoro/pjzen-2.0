<template lang="">
  <Header />
  <main class="page price-page">
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
                <th colspan="2"></th>
                <th>
                  <strong>Zen 1</strong>
                </th>
                <th>
                  <strong>Zen 2</strong>
                </th>
                <th>
                  <strong>Zen 3</strong>
                </th>
                <th>
                  <strong>Custom</strong>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colspan="2"></td>
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
                <td colspan="2"></td>
                <td>
                  <router-link
                    to=""
                    class="button button--primary button--orange"
                  >
                    Contratar
                  </router-link>
                </td>
                <td>
                  <router-link
                    to=""
                    class="button button--primary button--blue"
                  >
                    Contratar
                  </router-link>
                </td>
                <td>
                  <router-link
                    to=""
                    class="button button--primary button--blue-dark"
                  >
                    Contratar
                  </router-link>
                </td>
                <td>
                  <router-link
                    to=""
                    class="button button--primary button--blue-darkest"
                  >
                    Fale com a gente
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            class="table-prices table-prices--comparison start-with-purple-row"
          >
            <thead>
              <tr>
                <th colspan="2">
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
                <td colspan="2">Contabilidade completa</td>
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
                <td colspan="2">Processo de abertura grátis</td>
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
                <td colspan="2">Emissão de NFs pela PJZen</td>
                <td>5</td>
                <td>10</td>
                <td>15</td>
                <td>30</td>
              </tr>
              <tr>
                <td colspan="2">Pró-labore dos sócios</td>
                <td>até 2 sócios</td>
                <td>até 3 sócios</td>
                <td>até 5 sócios</td>
                <td>5 ou mais</td>
              </tr>
              <tr>
                <td colspan="2">Folha de pagamento</td>

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
                <th colspan="2">
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
                <td colspan="2">Atendimento via Whatsapp</td>
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
                <td colspan="2">Atendimento via E-mail</td>
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
                <td colspan="2">Atendimento via Telefone</td>
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
                <td colspan="2">Horário de atendimento</td>
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
                <th colspan="2">
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
                <td colspan="2">Regime tributário</td>
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
                <td colspan="2">Faturamento mensal</td>
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
                <th colspan="2">
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
                <td colspan="2">Taxa de abertura para <br />São Paulo/SP</td>
                <td>Grátis</td>
                <td>Grátis</td>
                <td>Grátis</td>
                <td>Grátis</td>
              </tr>
              <tr>
                <td colspan="2">Conta PJ gratuita</td>
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
                <td colspan="2">Certificado A1 Gratuito</td>
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

    <CallToAction />
  </main>

  <Footer />

  <Modal ref="testimonialsModal">
    <video controls>
      <source src="@/assets/videos/testimonial-example.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Modal>
</template>
<script>
import Header from "@/presentation/modules/Header.vue";
import Footer from "@/presentation/modules/Footer.vue";

import Modal from "@/presentation/components/Modal.vue";
import MainSection from "../modules/MainSection.vue";
import Testimonials from "../modules/Testimonials.vue";
import CallToAction from "../modules/CallToAction.vue";

import { reactive } from "vue";
import { Collapse } from "vue-collapsed";

export default {
  name: "app-price-page",

  data() {
    return {
      questions: reactive([
        {
          title: "Pergunta 01",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",
          isExpanded: false, // Initial value
        },
        {
          title: "Pergunta 02",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
        {
          title: "Pergunta 03",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
        {
          title: "Pergunta 04",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
        {
          title: "Pergunta 05",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
        {
          title: "Pergunta 06",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
        {
          title: "Pergunta 07",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
        {
          title: "Pergunta 08",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipisconsectetur adipisLorem ipsum dolor sit amet, consectetur adipisconsectetur adipis",

          isExpanded: false,
        },
      ]),
    };
  },

  methods: {
    handleAccordion(selectedIndex) {
      this.questions.forEach((_, index) => {
        this.questions[index].isExpanded =
          index === selectedIndex ? !this.questions[index].isExpanded : false;
        console.log("---", this.questions[selectedIndex]);
      });
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
  },

  components: {
    MainSection,
    Collapse,
    Testimonials,
    Modal,
    CallToAction,
    Header,
    Footer,
  },
};
</script>
<style lang=""></style>
