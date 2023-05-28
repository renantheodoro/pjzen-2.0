<template lang="">
  <main class="payment-flow">
    <div v-if="form.succeeded" class="container payment-flow__success">
      <div class="eclipse eclipse--green"></div>

      <header class="payment-flow__header">
        <router-link to="" class="payment-flow__header__logo">
          <img
            src="@/assets/images/svg/icons/logo-header-alternative.svg"
            alt="PJ Zen"
          />
        </router-link>
      </header>

      <img
        src="@/assets/images/svg/flow-payment-sucess_image.svg"
        alt="Success"
        class="payment-flow__success-image"
      />

      <h2>Pronto!</h2>

      <p>
        Contratação realizada com sucesso. <br />
        Agora deixe tudo com a gente.
      </p>

      <router-link :to="{ name: 'home' }" class="button button--primary">
        Voltar para o site
      </router-link>
    </div>

    <div v-else class="container">
      <header class="payment-flow__header">
        <router-link to="" class="payment-flow__header__logo">
          <img
            src="@/assets/images/svg/icons/logo-header-alternative.svg"
            alt="PJ Zen"
          />
        </router-link>

        <h1 class="payment-flow__header__title">{{ $route.meta.title }}</h1>
      </header>

      <ul ref="breadcrumb" class="breadcrumb">
        <div
          class="breadcrumb__fill"
          :class="{
            'breadcrumb__fill--second-step': activeSection === 2,
            'breadcrumb__fill--third-step': activeSection === 3,
          }"
        ></div>

        <li
          @click="activeSection = 1"
          class="breadcrumb__item"
          :class="{
            active: activeSection >= 1,
            activeMobile: activeSection === 1,
          }"
        >
          <div class="breadcrumb__item__icon">
            <svg
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.375 0.25H2.625C1.14844 0.25 0 1.45312 0 2.875V22.125C0 23.6016 1.14844 24.75 2.625 24.75H25.375C26.7969 24.75 28 23.6016 28 22.125V2.875C28 1.45312 26.7969 0.25 25.375 0.25ZM12.6875 22.125H2.95312C2.73438 22.125 2.625 22.0156 2.625 21.7969V14.6875H12.6875V22.125ZM12.6875 12.0625H2.625V4.625H12.6875V12.0625ZM25.0469 22.125H15.3125V14.6875H25.375V21.7969C25.375 22.0156 25.2109 22.125 25.0469 22.125ZM25.375 12.0625H15.3125V4.625H25.375V12.0625Z"
              />
            </svg>
          </div>

          <span class="breadcrumb__item__text">1. A EMPRESA</span>
        </li>

        <li
          @click="activeSection = 2"
          class="breadcrumb__item"
          :class="{
            active: activeSection >= 2,
            activeMobile: activeSection === 2,
          }"
        >
          <div class="breadcrumb__item__icon">
            <svg
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.375 0.25H2.625C1.14844 0.25 0 1.45312 0 2.875V22.125C0 23.6016 1.14844 24.75 2.625 24.75H25.375C26.7969 24.75 28 23.6016 28 22.125V2.875C28 1.45312 26.7969 0.25 25.375 0.25ZM12.6875 22.125H2.95312C2.73438 22.125 2.625 22.0156 2.625 21.7969V14.6875H12.6875V22.125ZM12.6875 12.0625H2.625V4.625H12.6875V12.0625ZM25.0469 22.125H15.3125V14.6875H25.375V21.7969C25.375 22.0156 25.2109 22.125 25.0469 22.125ZM25.375 12.0625H15.3125V4.625H25.375V12.0625Z"
              />
            </svg>
          </div>

          <span class="breadcrumb__item__text">2. PLANOS</span>
        </li>
        <li
          @click="activeSection = 3"
          class="breadcrumb__item"
          :class="{
            active: activeSection === 3,
            activeMobile: activeSection === 3,
          }"
        >
          <div class="breadcrumb__item__icon">
            <svg
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.375 0.25H2.625C1.14844 0.25 0 1.45312 0 2.875V22.125C0 23.6016 1.14844 24.75 2.625 24.75H25.375C26.7969 24.75 28 23.6016 28 22.125V2.875C28 1.45312 26.7969 0.25 25.375 0.25ZM12.6875 22.125H2.95312C2.73438 22.125 2.625 22.0156 2.625 21.7969V14.6875H12.6875V22.125ZM12.6875 12.0625H2.625V4.625H12.6875V12.0625ZM25.0469 22.125H15.3125V14.6875H25.375V21.7969C25.375 22.0156 25.2109 22.125 25.0469 22.125ZM25.375 12.0625H15.3125V4.625H25.375V12.0625Z"
              />
            </svg>
          </div>

          <span class="breadcrumb__item__text">3. PAGAMENTO</span>
        </li>
      </ul>

      <form class="payment-flow__section__form" action="">
        <section
          v-if="activeSection === 1"
          class="payment-flow__section payment-flow__section--company"
        >
          <div
            v-if="$route.meta.view === 'open-company'"
            class="payment-flow__section--payment__column__content"
          >
            <div class="input-field">
              <label for="company-activity"
                >Qual a atividade da sua empresa?</label
              >
              <div class="input-field__select-area">
                <select
                  class="input-field__select-area__select"
                  name="company-activity"
                  id="company-activity"
                >
                  <option value="1" disabled>Selecione a opção</option>
                  <option value="1">Option 1</option>
                  <option value="1">Option 2</option>
                  <option value="1">Option 3</option>
                  <option value="1">Option 4</option>
                  <option value="1">Option 5</option>
                </select>
              </div>
            </div>

            <div class="divider"></div>

            <h3>Endereço da empresa</h3>

            <div class="input-field">
              <label for=""
                >Deseja abrir sua empresa com seu endereço, ou prefere um
                endereço fiscal PJZen?</label
              >

              <label
                class="input-field__radio-item input-field__radio-item--filled"
              >
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="address-option"
                    value="HTML"
                    class="input-field__radio-item__input"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text"
                    >Quero um endereço fiscal PJzen</span
                  >
                </div>

                <span
                  class="input-field__radio-item__more-info input-field__radio-item__more-info--green"
                >
                  Abertura em 7 dias
                </span>
              </label>

              <label
                class="input-field__radio-item input-field__radio-item--filled"
              >
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="address-option"
                    value="HTML"
                    class="input-field__radio-item__input"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text"
                    >Quero um endereço meu</span
                  >
                </div>
              </label>

              <label
                class="input-field__radio-item input-field__radio-item--filled input-field__radio-item--highlight"
              >
                <span class="input-field__radio-item__text"
                  >O seu CNPJ será registrado em São Paulo/SP</span
                >

                <span
                  class="input-field__radio-item__more-info input-field__radio-item__more-info--white"
                >
                  Mostrar endereço
                </span>
              </label>
            </div>

            <div class="divider"></div>

            <h3>Sócios</h3>

            <div class="input-field">
              <label for="">Quantos sócios tem a empresa</label>

              <div class="input-field__range-number">
                <button
                  class="input-field__range-number__button input-field__range-number__button--minus"
                  @click.prevent="decreasePartner()"
                >
                  -
                </button>

                <input
                  type="number"
                  class="input-field__range-number__input"
                  v-model="form.partnerQtd.value"
                />

                <button
                  @click.prevent="increasePartner()"
                  class="input-field__range-number__button input-field__range-number__button--plus"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div
            v-if="$route.meta.view === 'change-counter'"
            class="payment-flow__section--payment__column__content"
          >
            <h3 class="no-mgn-b">A empresa</h3>

            <p>
              Agora precisamos do seu CNPJ para consultar sua empresa e saber se
              ja podemos te atendr
            </p>

            <div class="input-field">
              <label for="">CPNJ</label>
              <input
                type="text"
                v-mask="['##.###.###/####-##']"
                placeholder="00.000.000/0000-00"
              />
            </div>

            <div class="divider"></div>

            <h3>Resultado da busca</h3>

            <div class="result-info">
              <div class="result-info__item">
                <div class="result-info__item__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-store.svg"
                    alt="icon store"
                  />
                </div>

                <div class="result-info__item__text">
                  <h4>Razão Social</h4>
                  <p>FRAMEFY SOLUÇÕES EM TECNOLOGIA LTDA</p>
                </div>
              </div>

              <div class="result-info__item">
                <div class="result-info__item__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-location-pin.svg"
                    alt="icon location  pin"
                  />
                </div>

                <div class="result-info__item__text">
                  <h4>Município</h4>
                  <p>SÃO PAULO - SP</p>
                </div>
              </div>
            </div>

            <p>Faturamento mensal</p>

            <div class="input-field">
              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="colaborators-number"
                    value="HTML"
                    class="input-field__radio-item__input"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text">0 - 25k</span>
                </div>
              </label>

              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="colaborators-number"
                    value="HTML"
                    class="input-field__radio-item__input"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text">25k - 50k</span>
                </div>
              </label>

              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="colaborators-number"
                    value="HTML"
                    class="input-field__radio-item__input"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text">50k - 100k</span>
                </div>
              </label>

              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="colaborators-number"
                    value="HTML"
                    class="input-field__radio-item__input"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text"
                    >100k ou mais</span
                  >
                </div>
              </label>
            </div>

            <div class="input-field colaborators-field">
              <p>Quantidade de funcionários</p>
              <div class="input-field__range-number">
                <button
                  class="input-field__range-number__button input-field__range-number__button--minus"
                  @click.prevent="decreasePartner()"
                >
                  -
                </button>

                <input
                  type="number"
                  class="input-field__range-number__input"
                  v-model="form.partnerQtd.value"
                />

                <button
                  @click.prevent="increasePartner()"
                  class="input-field__range-number__button input-field__range-number__button--plus"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          v-if="activeSection === 2"
          class="payment-flow__section payment-flow__section--plans"
        >
          <div class="plans-section">
            <div
              @click="selectPlan('zen1')"
              :class="{ active: form.selectedPlan.value === 'zen1' }"
              class="plans-section__card plans-section__card--orange"
            >
              <h3>Zen 1</h3>
              <h4>R$99</h4>
              <legend>POR MÊS</legend>

              <router-link
                :to="{ name: 'price-page' }"
                class="button button--primary button--orange"
              >
                COMECE AGORA
              </router-link>

              <div class="divider"></div>

              <ul class="plans-section__card__list">
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Contabilidade completa</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Processo de abertura gratis</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Emissão de NFs pela PJZen</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 2 sócios (Pró-Labore)</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 25k de faturamento/mês</span>
                </li>
              </ul>
            </div>

            <div
              @click="selectPlan('zen2')"
              :class="{ active: form.selectedPlan.value === 'zen2' }"
              class="plans-section__card plans-section__card--blue"
            >
              <h3>Zen 2</h3>
              <h4>R$199</h4>
              <legend>POR MÊS</legend>

              <router-link
                :to="{ name: 'price-page' }"
                class="button button--primary button--blue"
              >
                COMECE AGORA
              </router-link>

              <div class="divider"></div>

              <ul class="plans-section__card__list">
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Contabilidade completa</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Processo de abertura gratis</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Emissão de NFs pela PJZen</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 2 sócios (Pró-Labore)</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 25k de faturamento/mês</span>
                </li>
              </ul>
            </div>

            <div
              @click="selectPlan('zen3')"
              :class="{ active: form.selectedPlan.value === 'zen3' }"
              class="plans-section__card plans-section__card--blue-dark"
            >
              <h3>Zen 3</h3>
              <h4>R$299</h4>
              <legend>POR MÊS</legend>

              <router-link
                :to="{ name: 'price-page' }"
                class="button button--primary button--blue-dark"
              >
                COMECE AGORA
              </router-link>

              <div class="divider"></div>

              <ul class="plans-section__card__list">
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Contabilidade completa</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Processo de abertura gratis</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Emissão de NFs pela PJZen</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 2 sócios (Pró-Labore)</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 25k de faturamento/mês</span>
                </li>
              </ul>
            </div>

            <div
              @click="selectPlan('custom')"
              :class="{ active: form.selectedPlan.value === 'custom' }"
              class="plans-section__card plans-section__card--blue-darkest"
            >
              <h3>Custom</h3>
              <h5>On-Demand</h5>
              <legend>POR MÊS</legend>

              <router-link
                to=""
                class="button button--primary button--blue-darkest"
              >
                FALE COM A GENTE
              </router-link>

              <div class="divider"></div>

              <ul class="plans-section__card__list">
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Contabilidade completa</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Processo de abertura gratis</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Emissão de NFs pela PJZen</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 2 sócios (Pró-Labore)</span>
                </li>
                <li>
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>Até 25k de faturamento/mês</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          v-if="activeSection === 3"
          @click="activeSection = 3"
          class="payment-flow__section payment-flow__section--payment"
        >
          <div class="payment-flow__section--payment__column">
            <div class="payment-flow__section--payment__column__content">
              <div class="input-field">
                <label for="company-activity"
                  >Qual a atividade da sua empresa?</label
                >
                <div class="input-field__select-area">
                  <select
                    class="input-field__select-area__select"
                    name="company-activity"
                    id="company-activity"
                  >
                    <option value="1" disabled>Selecione a opção</option>
                    <option value="1">Option 1</option>
                    <option value="1">Option 2</option>
                    <option value="1">Option 3</option>
                    <option value="1">Option 4</option>
                    <option value="1">Option 5</option>
                  </select>
                </div>
              </div>

              <div class="divider"></div>

              <h3>Pagamento com cartão</h3>

              <div class="input-field">
                <label
                  class="input-field__radio-item input-field__radio-item--filled"
                >
                  <div class="input-field__radio-item__option">
                    <input
                      type="radio"
                      name="address-option"
                      value="HTML"
                      class="input-field__radio-item__input"
                    />
                    <span class="input-field__radio-item__radio"></span>
                    <span class="input-field__radio-item__text"
                      >Cartão de crédito</span
                    >
                  </div>

                  <span
                    class="input-field__radio-item__more-info input-field__radio-item__more-info--green"
                  >
                    Recomendado
                  </span>
                </label>

                <label
                  class="input-field__radio-item input-field__radio-item--filled"
                >
                  <div class="input-field__radio-item__option">
                    <input
                      type="radio"
                      name="address-option"
                      value="HTML"
                      class="input-field__radio-item__input"
                    />
                    <span class="input-field__radio-item__radio"></span>
                    <span class="input-field__radio-item__text"
                      >Cartão de débito</span
                    >
                  </div>
                </label>

                <label
                  class="input-field__radio-item input-field__radio-item--filled"
                >
                  <div class="input-field__radio-item__option">
                    <input
                      type="radio"
                      name="address-option"
                      value="HTML"
                      class="input-field__radio-item__input"
                    />
                    <span class="input-field__radio-item__radio"></span>
                    <span class="input-field__radio-item__text">Boleto</span>
                  </div>
                </label>

                <label
                  class="input-field__radio-item input-field__radio-item--filled"
                >
                  <div class="input-field__radio-item__option">
                    <input
                      type="radio"
                      name="address-option"
                      value="HTML"
                      class="input-field__radio-item__input"
                    />
                    <span class="input-field__radio-item__radio"></span>
                    <span class="input-field__radio-item__text">PIX</span>
                  </div>
                </label>
              </div>

              <div class="divider"></div>

              <h3>DADOS DO CARTÃO</h3>

              <div class="input-columns">
                <div class="input-field">
                  <label for="">Número do cartão</label>
                  <input type="text" />
                </div>
                <div class="input-field">
                  <label for="">Nome no cartão</label>
                  <input type="text" />
                </div>
              </div>

              <div class="input-columns">
                <div class="input-field">
                  <label for="">Data de Validade</label>
                  <input type="text" />
                </div>
                <div class="input-field">
                  <label for="">CVC</label>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>

          <div
            class="payment-flow__section--payment__column payment-flow__section--payment__column--resume"
          >
            <div class="payment-flow__section--payment__column__content">
              <h3>Seu plano</h3>

              <p class="resume-text">
                <span class="resume-text__content">Plano Zen</span>
                <span class="resume-text__price">R$ 89,90</span>
              </p>

              <div class="divider"></div>

              <p class="resume-text">
                <span class="resume-text__content">Resumo do pedido</span>
              </p>

              <p class="resume-text">
                <span class="resume-text__content">Plano</span>
                <span class="resume-text__price">R$ 89,90</span>
              </p>

              <p class="resume-text">
                <span class="resume-text__content">Cupom de desconto</span>
                <span class="resume-text__price">R$ 0,00</span>
              </p>
            </div>

            <div class="payment-flow__section--payment__column__footer">
              <p class="resume-text">
                <span class="resume-text__content"
                  >Total a pagar na primeira <br />
                  mensalidade</span
                >
                <span class="resume-text__price">R$ 89,90</span>
              </p>
            </div>

            <p class="terms-text">
              Ao clicar em Finalizar, você esta declarando que leu e concordou
              com nosso
              <router-link to="">Contrato de Prestação</router-link> de Serviço
              e com o <router-link to="">Plano Contratado</router-link>
            </p>

            <div class="flex-right">
              <button type="submit" class="button button--primary">
                Finalizar Pagamento
              </button>
            </div>
          </div>
        </section>
      </form>

      <footer
        v-if="activeSection !== 3"
        :class="`payment-flow__footer ${
          $route.meta.view === 'open-company' ? 'flex-between' : 'flex-right'
        }`"
      >
        <p
          v-if="$route.meta.view !== 'change-counter'"
          class="payment-flow__footer__link"
        >
          Precisa de ajuda?
          <router-link to="">Fale com a gente pelo Whatsapp</router-link>
        </p>

        <div class="payment-flow__footer__buttons">
          <a
            href="#"
            @click.prevent="prevStep()"
            class="button button--outline"
          >
            Voltar
          </a>
          <a
            href="#"
            @click.prevent="nextStep()"
            class="button button--primary"
          >
            Avançar
          </a>
        </div>
      </footer>
    </div>
  </main>
</template>
<script>
import { mask } from "vue-the-mask";

export default {
  name: "app-payment-flow",

  directives: { mask },

  data() {
    return {
      activeSection: 1,
      form: {
        partnerQtd: {
          value: 1,
        },
        selectedPlan: {
          value: "zen1", // zen1 || zen2 || zen3 || custom
        },
        succeeded: null,
      },
    };
  },

  methods: {
    scrollUp() {
      window.scrollTo(0, this.$refs.breadcrumb.offsetTop - 50);
    },
    nextStep() {
      this.scrollUp();
      if (this.activeSection === 3) {
        return;
      } else {
        this.activeSection++;
      }
    },
    prevStep() {
      this.scrollUp();
      if (this.activeSection === 1) {
        return;
      } else {
        this.activeSection--;
      }
    },
    increasePartner() {
      this.form.partnerQtd.value++;
    },
    decreasePartner() {
      if (this.form.partnerQtd.value === 0) {
        return;
      } else {
        this.form.partnerQtd.value--;
      }
    },
    selectPlan(plan) {
      this.form.selectedPlan.value = plan;
    },
  },
};
</script>
<style lang=""></style>
