<template lang="">
  <Loader v-if="isBusy" />

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
          <!-- ABRIR EMPRESA -->
          <div
            v-if="$route.meta.view === 'open-company'"
            class="payment-flow__section--payment__column__content"
          >
            <div
              class="input-field"
              :class="{
                'input-field--error':
                  form.openCompany.companyActivity.isValid === false,
              }"
            >
              <label for="company-activity"
                >Qual a atividade da sua empresa?</label
              >
              <div class="input-field__select-area">
                <select
                  class="input-field__select-area__select"
                  name="company-activity"
                  id="company-activity"
                  ref="companyActivity"
                  v-model="form.openCompany.companyActivity.value"
                  @change="
                    visit('openCompany', 'companyActivity');
                    validateInputs();
                  "
                >
                  <option value="-1" selected>Escolher</option>
                  <option
                    v-for="(option, index) in companyActivityOptions"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.content }}
                  </option>
                </select>
                <span
                  v-if="form.openCompany.companyActivity.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.openCompany.companyActivity.errorMessage }}</span
                >
              </div>
            </div>

            <div class="divider"></div>

            <h3>Endereço da empresa</h3>

            <div class="input-field input-field--error">
              <label for=""
                >Deseja abrir sua empresa com seu endereço, ou prefere um
                endereço fiscal PJZen?</label
              >

              <label
                class="input-field__radio-item input-field__radio-item--filled"
                :class="{
                  'input-error': form.openCompany.addressType.isValid === false,
                }"
              >
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="address-option"
                    value="pjzen-address"
                    class="input-field__radio-item__input"
                    v-model="form.openCompany.addressType.value"
                    @change="
                      visit('openCompany', 'addressType');
                      validateInputs();
                    "
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
                :class="{
                  'input-error': form.openCompany.addressType.isValid === false,
                }"
              >
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="address-option"
                    value="self-address"
                    class="input-field__radio-item__input"
                    v-model="form.openCompany.addressType.value"
                    @change="
                      visit('openCompany', 'addressType');
                      validateInputs();
                    "
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text"
                    >Quero um endereço meu</span
                  >
                </div>
              </label>

              <div
                v-if="form.openCompany.addressType.isValid === false"
                class="helper-text helper-text--error"
              >
                {{ form.openCompany.addressType.errorMessage }}
              </div>

              <label
                class="input-field__radio-item input-field__radio-item--filled input-field__radio-item--highlight"
                v-if="form.openCompany.addressType.value === 'pjzen-address'"
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
                  v-model="form.openCompany.partnersNumber.value"
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

          <!-- TROCAR CONTADOR -->
          <div
            v-if="$route.meta.view === 'change-counter'"
            class="payment-flow__section--payment__column__content"
          >
            <h3 class="no-mgn-b">A empresa</h3>

            <p>
              Agora precisamos do seu CNPJ para consultar sua empresa e saber se
              ja podemos te atendr
            </p>

            <div
              class="input-field"
              :class="{
                'input-field--error': form.changeCounter.cnpj.isValid === false,
              }"
            >
              <label for="">CNPJ</label>
              <input
                type="text"
                v-mask="['##.###.###/####-##']"
                placeholder="00.000.000/0000-00"
                v-model="form.changeCounter.cnpj.value"
                @blur="
                  visit('changeCounter', 'cnpj');
                  validateInputs();
                  searchCNPJInfo();
                "
              />
              <div
                v-if="form.changeCounter.cnpj.isValid === false"
                class="helper-text helper-text--error"
              >
                {{ form.changeCounter.cnpj.errorMessage }}
              </div>
            </div>

            <div class="divider"></div>

            <h3 v-if="cnpjData">Resultado da busca</h3>

            <div
              v-if="cnpjData && cnpjData.data && !cnpjData.data.error"
              class="result-info"
            >
              <div class="result-info__item">
                <div class="result-info__item__icon">
                  <img
                    src="@/assets/images/svg/icons/icon-store.svg"
                    alt="icon store"
                  />
                </div>

                <div class="result-info__item__text">
                  <h4>Razão Social</h4>
                  <p>{{ cnpjData.data["RAZAO SOCIAL"] }}</p>
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
                  <p>
                    {{ cnpjData.data["MUNICIPIO"] }} - {{ cnpjData.data["UF"] }}
                  </p>
                </div>
              </div>
            </div>

            <div
              v-if="cnpjData && cnpjData.data && cnpjData.data.error"
              class="result-info"
            >
              <div class="helper-text helper-text--error">
                Não foram encontrados dados com o CNPJ informado.
              </div>
            </div>

            <p>Faturamento mensal</p>

            <div class="input-field">
              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="monthly-billing"
                    value="0-25"
                    class="input-field__radio-item__input"
                    v-model="form.changeCounter.monthlyBilling.value"
                    checked
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text">0 - 25k</span>
                </div>
              </label>

              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="monthly-billing"
                    value="25-50"
                    class="input-field__radio-item__input"
                    v-model="form.changeCounter.monthlyBilling.value"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text">25k - 50k</span>
                </div>
              </label>

              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="monthly-billing"
                    value="50-100"
                    class="input-field__radio-item__input"
                    v-model="form.changeCounter.monthlyBilling.value"
                  />
                  <span class="input-field__radio-item__radio"></span>
                  <span class="input-field__radio-item__text">50k - 100k</span>
                </div>
              </label>

              <label class="input-field__radio-item">
                <div class="input-field__radio-item__option">
                  <input
                    type="radio"
                    name="monthly-billing"
                    value="100 ou mais"
                    class="input-field__radio-item__input"
                    v-model="form.changeCounter.monthlyBilling.value"
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
                  @click.prevent="decreaseColaborator()"
                >
                  -
                </button>

                <input
                  type="number"
                  class="input-field__range-number__input"
                  v-model="form.changeCounter.colaboratorsNumber.value"
                />

                <button
                  @click.prevent="increaseColaborator()"
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
              v-for="(plan, index) in plansList"
              :key="index"
              @click="selectPlan(plan)"
              :class="[
                { active: selectedPlan.id === plan.id },
                `plans-section__card plans-section__card--${plan.color}`,
              ]"
            >
              <h3>{{ plan.name }}</h3>
              <h4 v-if="plan.price !== null">R${{ plan.price }}</h4>
              <h5 v-if="plan.priceText">{{ plan.priceText }}</h5>
              <legend>{{ plan.frequency }}</legend>

              <a
                href="#"
                @click.prevent
                :to="{ name: 'price-page' }"
                :class="`button button--primary button--${plan.color}`"
              >
                SELECIONAR PLANO
              </a>

              <div class="divider"></div>

              <ul class="plans-section__card__list">
                <li v-for="(included, index) in plan.included" :key="index">
                  <img
                    src="@/assets/images/svg/icons/icon-check.svg"
                    alt="Icon check"
                  />
                  <span>{{ included }}</span>
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
              <h3>Pagamento com cartão</h3>

              <div class="input-field">
                <label
                  class="input-field__radio-item input-field__radio-item--filled"
                >
                  <div class="input-field__radio-item__option">
                    <input
                      type="radio"
                      name="address-option"
                      value="credit-card"
                      class="input-field__radio-item__input"
                      checked
                      disabled
                    />
                    <span class="input-field__radio-item__radio"></span>
                    <span class="input-field__radio-item__text"
                      >Cartão de crédito</span
                    >
                  </div>

                  <!-- <span
                    class="input-field__radio-item__more-info input-field__radio-item__more-info--green"
                  >
                    Recomendado
                  </span> -->
                </label>

                <!-- <label
                  class="input-field__radio-item input-field__radio-item--filled"
                >
                  <div class="input-field__radio-item__option">
                    <input
                      type="radio"
                      name="address-option"
                      value="debit-card"
                      class="input-field__radio-item__input"
                      v-model="form.payment.paymentMethod.value"
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
                      value="ticket"
                      class="input-field__radio-item__input"
                      v-model="form.payment.paymentMethod.value"
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
                      value="pix"
                      class="input-field__radio-item__input"
                      v-model="form.payment.paymentMethod.value"
                    />
                    <span class="input-field__radio-item__radio"></span>
                    <span class="input-field__radio-item__text">PIX</span>
                  </div>
                </label> -->
              </div>

              <div class="divider"></div>

              <h3>DADOS DO CARTÃO</h3>

              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.payment.cardInfo.number.isValid === false,
                }"
              >
                <label for="">Número do cartão</label>
                <input
                  type="text"
                  v-mask="['#### #### #### ####']"
                  placeholder="Digite aqui"
                  v-model="form.payment.cardInfo.number.value"
                  @blur="
                    visitPayment('payment', 'cardInfo', 'number');
                    validateInputs();
                  "
                />

                <span
                  v-if="form.payment.cardInfo.number.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.payment.cardInfo.number.errorMessage }}</span
                >
              </div>

              <div class="input-columns">
                <div
                  class="input-field"
                  :class="{
                    'input-field--error':
                      form.payment.cardInfo.expirationDate.isValid === false,
                  }"
                >
                  <label for="">Vencimento</label>
                  <input
                    type="text"
                    v-mask="['##/##']"
                    placeholder="MM/AA"
                    v-model="form.payment.cardInfo.expirationDate.value"
                    @blur="
                      visitPayment('payment', 'cardInfo', 'expirationDate');
                      validateInputs();
                    "
                  />
                  <span
                    v-if="
                      form.payment.cardInfo.expirationDate.isValid === false
                    "
                    class="helper-text helper-text--error"
                    >{{
                      form.payment.cardInfo.expirationDate.errorMessage
                    }}</span
                  >
                </div>
                <div
                  class="input-field"
                  :class="{
                    'input-field--error':
                      form.payment.cardInfo.cvc.isValid === false,
                  }"
                >
                  <label for="">Código de Segurança</label>
                  <input
                    type="text"
                    v-mask="['###']"
                    placeholder="123"
                    v-model="form.payment.cardInfo.cvc.value"
                    @blur="
                      visitPayment('payment', 'cardInfo', 'cvc');
                      validateInputs();
                    "
                  /><span
                    v-if="form.payment.cardInfo.cvc.isValid === false"
                    class="helper-text helper-text--error"
                    >{{ form.payment.cardInfo.cvc.errorMessage }}</span
                  >
                </div>
              </div>

              <div class="input-columns">
                <div
                  class="input-field"
                  :class="{
                    'input-field--error':
                      form.payment.cardInfo.name.isValid === false,
                  }"
                >
                  <label for="">Nome impresso no cartão</label>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    v-model="form.payment.cardInfo.name.value"
                    @blur="
                      visitPayment('payment', 'cardInfo', 'name');
                      validateInputs();
                    "
                  /><span
                    v-if="form.payment.cardInfo.name.isValid === false"
                    class="helper-text helper-text--error"
                    >{{ form.payment.cardInfo.name.errorMessage }}</span
                  >
                </div>

                <div
                  class="input-field"
                  :class="{
                    'info-field--error':
                      form.payment.cardInfo.cpf.isValid === false,
                  }"
                >
                  <label for="">CPF</label>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    v-mask="['###.###.###-##']"
                    v-model="form.payment.cardInfo.cpf.value"
                    @blur="
                      visitPayment('payment', 'cardInfo', 'cpf');
                      validateInputs();
                    "
                  /><span
                    v-if="form.payment.cardInfo.cpf.isValid === false"
                    class="helper-text helper-text--error"
                    >{{ form.payment.cardInfo.cpf.errorMessage }}</span
                  >
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
                <span class="resume-text__content">{{
                  selectedPlan.name
                }}</span>
                <span class="resume-text__price" v-if="selectedPlan.price"
                  >R$ {{ selectedPlan.price }},00</span
                >
                <span class="resume-text__price" v-else>{{
                  selectedPlan.priceText
                }}</span>
              </p>

              <div class="divider"></div>

              <p class="resume-text">
                <span class="resume-text__content"
                  ><strong>Resumo do pedido</strong></span
                >
              </p>

              <p class="resume-text">
                <span class="resume-text__content">Plano</span>
                <span v-if="selectedPlan.price" class="resume-text__price"
                  >R$ {{ selectedPlan.price }},00</span
                >
                <span v-else class="resume-text__price">{{
                  selectedPlan.priceText
                }}</span>
              </p>
            </div>

            <div class="payment-flow__section--payment__column__footer">
              <p class="resume-text">
                <span class="resume-text__content"
                  >Total a pagar na primeira <br />
                  mensalidade</span
                >
                <span v-if="selectedPlan.price" class="resume-text__price"
                  >R$ {{ selectedPlan.price }},00</span
                >
                <span v-else class="resume-text__price">{{
                  selectedPlan.priceText
                }}</span>
              </p>
            </div>

            <p class="terms-text">
              Ao clicar em Finalizar, você esta declarando que leu e concordou
              com nosso
              <router-link to="">Contrato de Prestação</router-link> de Serviço
              e com o <router-link to="">Plano Contratado</router-link>
            </p>

            <div class="flex-right">
              <button
                @click.prevent="submit()"
                type="submit"
                class="button button--primary"
              >
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

import plansList from "@/content/plans.json";
import cnpjMock from "@/content/cnpj-response.json";

import Loader from "@/presentation/components/Loader.vue";

export default {
  name: "app-payment-flow",

  directives: { mask },

  data() {
    return {
      isBusy: false,

      activeSection: 1,

      plansList: plansList,

      selectedPlan: plansList[0],

      companyActivityOptions: [
        {
          value: "pj-in-a-company",
          content: "PJ em uma empresa",
        },
        {
          value: "it-services",
          content: "Serviços de TI",
        },
        {
          value: "management-services",
          content: "Serviços Administrativos",
        },
        {
          value: "design",
          content: "Design",
        },
        {
          value: "commerce",
          content: "Comércio",
        },
        {
          value: "health",
          content: "Saúde / Medicina",
        },
        {
          value: "psico",
          content: "Psicologia",
        },
        {
          value: "marketing",
          content: "Marketing / Publicidade",
        },
        {
          value: "engineering",
          content: "Engenharia / Arquitetura",
        },
        {
          value: "education",
          content: "Educação",
        },
        {
          value: "advocacy",
          content: "Advocacia",
        },
        {
          value: "consultancy",
          content: "Consultoria",
        },
        {
          value: "commercial-representation",
          content: "Representação Comercial",
        },
        {
          value: "not-listed",
          content: "Minha atividade não está listada",
        },
      ],

      cnpjData: {},

      form: {
        isValid: false,
        success: false,
        fail: false,

        openCompany: {
          companyActivity: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          addressType: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          partnersNumber: {
            value: 1,
          },
        },

        changeCounter: {
          cnpj: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          monthlyBilling: {
            value: "",
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          colaboratorsNumber: {
            value: 1,
          },
        },

        payment: {
          paymentMethod: {
            value: "credit-card",
          },
          cardInfo: {
            number: {
              value: "",
              isValid: null,
              errorMessage: "",
              isVisited: false,
            },
            expirationDate: {
              value: "",
              isValid: null,
              errorMessage: "",
              isVisited: false,
            },
            cvc: {
              value: "",
              isValid: null,
              errorMessage: "",
              isVisited: false,
            },
            name: {
              value: "",
              isValid: null,
              errorMessage: "",
              isVisited: false,
            },
            cpf: {
              value: "",
              isValid: null,
              errorMessage: "",
              isVisited: false,
            },
          },
        },
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
      this.form.openCompany.partnersNumber.value++;
    },
    decreasePartner() {
      if (this.form.openCompany.partnersNumber.value === 0) {
        return;
      } else {
        this.form.openCompany.partnersNumber.value--;
      }
    },
    increaseColaborator() {
      this.form.changeCounter.colaboratorsNumber.value++;
    },
    decreaseColaborator() {
      if (this.form.changeCounter.colaboratorsNumber.value === 0) {
        return;
      } else {
        this.form.changeCounter.colaboratorsNumber.value--;
      }
    },
    getPJZenPlans() {
      const vindiPJZenUrlBase = "https://app.vindi.com.br/api/";
      const urlPlans = "v1/plans";

      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };

      const auth = {
        username: "pwXftu00F82jmHxP7ltw0hxXRBESZ1oIbP4LMZWpDiw",
        password: null,
      };

      this.axios
        .get(`${vindiPJZenUrlBase}${urlPlans}`, {
          headers,
          auth,
          params: {
            page: 1,
            per_page: 25,
            sort_by: "created_at",
            sort_order: "asc",
          },
        })
        .then((response) => {
          console.log(response);

          this.plansList = response.data;
        });
    },

    checkForm() {
      if (this.form.openCompany.companyActivity.isValid) {
        this.form.isValid = true;
      } else {
        this.form.isValid = false;
      }
    },

    visit(group, field) {
      this.form[group][field].isVisited = true;
    },

    visitPayment(group, subgroup, field) {
      this.form[group][subgroup][field].isVisited = true;
    },

    validateNotEmpty(value) {
      return value !== null && value !== "";
    },

    validateSelect(value) {
      return value !== "" && value !== "-1" && value != "0";
    },

    validateCNPJOrCPF(value) {
      return new RegExp(
        /(([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}))/
      ).test(value);
    },

    validateCardNumber(value) {
      const ccNum = value.replaceAll(" ", "");

      let visa = /^4[0-9]{12}(?:[0-9]{3,4})?$/;
      let visa_local = /^4[19658][7684][0785][04278][128579](?:[0-9]{10})$/;
      let mastercard =
        /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;
      let mastercard_local =
        /^(?:5[13]99|55[35][19]|514[36])(?:11|4[10]|23|83|88)(?:[0-9]{10})$/;
      let verve = /^(?:50[067][180]|6500)(?:[0-9]{15})$/;
      let american_exp = /^3[47](?:[0-9]{13})$/;
      let diners_club = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
      let maestro =
        /^(5899|5018|5020|5038|6304|6703|6708|6759|676[1-3])[06][19](?:[0-9]{10})$/;
      let discover = /^6(?:011|4[4-9]3|222|5[0-9]{2})[0-9]{12}$/;
      let laser = /^(6706|6771|6709)[0-9]{11,15}$/;
      let hipercard = /^(384100|384140|384160|606282|637095|637568|60(?!11))/;
      let jcb = /^(?:2131|1800|35\d{3})\d{11}$/;

      if (visa.test(ccNum)) {
        return true;
      }
      if (visa_local.test(ccNum)) {
        return true;
      }
      if (mastercard.test(ccNum)) {
        return true;
      }
      if (mastercard_local.test(ccNum)) {
        return true;
      }
      if (verve.test(ccNum)) {
        return true;
      }
      if (american_exp.test(ccNum)) {
        return true;
      }
      if (diners_club.test(ccNum)) {
        return true;
      }
      if (maestro.test(ccNum)) {
        return true;
      }
      if (discover.test(ccNum)) {
        return true;
      }
      if (laser.test(ccNum)) {
        return true;
      }
      if (hipercard.test(ccNum)) {
        return true;
      }
      if (jcb.test(ccNum)) {
        return true;
      }

      return false;
    },

    validateExpirationDate(value) {
      const mm = value.split("/")[0];
      const yy = value.split("/")[1];

      if (mm <= 0) {
        return false;
      } else if (mm > 12) {
        return false;
      } else if (yy < new Date().getFullYear().toString().substring(2, 4)) {
        return false;
      }

      return true;
    },

    validateSecurityCode(value) {
      return value.length === 3;
    },

    validateField({ reference, validateFunction, errorMessage }) {
      if (reference.isVisited) {
        if (validateFunction(reference.value)) {
          reference.isValid = true;
        } else {
          reference.isValid = false;
          reference.errorMessage = errorMessage;
        }
      }
    },

    validateInputs() {
      const requiredMessage = "Este campo é obrigatório";
      const requiredSelectedMessage = "Seleciona uma opção para continuar";
      const invalidCardNumber = "O número do cartão é inválido";
      const invalidCNPJMessage = "CNPJ inválido";
      const invalidCPFMessage = "CPF inválido";
      const invalidExpirationDateMessage = "Data de vencimento inválida";
      const invalidCodeNumber = "Código de segurança inválido";

      this.validateField({
        reference: this.form.openCompany.companyActivity,
        validateFunction: this.validateSelect,
        errorMessage: requiredSelectedMessage,
      });

      this.validateField({
        reference: this.form.openCompany.addressType,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredSelectedMessage,
      });

      this.validateField({
        reference: this.form.changeCounter.cnpj,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.changeCounter.cnpj,
        validateFunction: this.validateCNPJOrCPF,
        errorMessage: invalidCNPJMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.number,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.number,
        validateFunction: this.validateCardNumber,
        errorMessage: invalidCardNumber,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.expirationDate,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.expirationDate,
        validateFunction: this.validateExpirationDate,
        errorMessage: invalidExpirationDateMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.cvc,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.cvc,
        validateFunction: this.validateSecurityCode,
        errorMessage: invalidCodeNumber,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.name,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.cpf,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.cpf,
        validateFunction: this.validateCNPJOrCPF,
        errorMessage: invalidCPFMessage,
      });
    },

    searchCNPJInfo() {
      if (!this.form.changeCounter.cnpj.isValid) return;

      this.isBusy = true;

      // TEMP
      this.cnpjData = cnpjMock;
      setTimeout(() => (this.isBusy = false), 1000);

      // const cnpj = this.form.changeCounter.cnpj.value
      //   .replaceAll(".", "")
      //   .replaceAll("/", "")
      //   .replaceAll("-", "");

      // const receitaUrl = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`;

      // this.axios
      //   .get(receitaUrl)
      //   .then((response) => {
      //     console.log(response);

      //     this.cnpjData = response;
      //     this.isBusy = false;
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   })
      //   .finally(() => (this.isBusy = false));
    },
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
    submit() {
      console.log(this.form);
    },
  },

  created() {
    this.getPJZenPlans();
  },

  components: { Loader },
};
</script>
<style lang=""></style>
