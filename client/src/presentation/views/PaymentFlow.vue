<template lang="">
  <Loader v-if="isBusy" :text="loaderMessage" />

  <main class="payment-flow">
    <div v-if="form.succeeded" class="container payment-flow__success">
      <div class="eclipse eclipse--green"></div>

      <header class="payment-flow__header">
        <router-link :to="{ name: 'home' }" class="payment-flow__header__logo">
          <img src="@/assets/images/svg/icons/logo.svg" alt="PJ Zen" />
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
        <router-link :to="{ name: 'home' }" class="payment-flow__header__logo">
          <img src="@/assets/images/svg/icons/logo.svg" alt="PJ Zen" />
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

        <!-- @click="jumpStep(1)" -->
        <li
          class="breadcrumb__item"
          :class="{
            active: activeSection >= 1,
            activeMobile: activeSection === 1,
          }"
        >
          <div class="breadcrumb__item__icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6875 8.5625H6.5625C5.79688 8.5625 5.25 8.01562 5.25 7.25C5.25 6.53906 5.79688 5.9375 6.5625 5.9375H12.6875C13.3984 5.9375 14 6.53906 14 7.25C14 8.01562 13.3984 8.5625 12.6875 8.5625ZM17.9375 11.1875C18.6484 11.1875 19.25 11.7891 19.25 12.5C19.25 13.2656 18.6484 13.8125 17.9375 13.8125H6.5625C5.79688 13.8125 5.25 13.2656 5.25 12.5C5.25 11.7891 5.79688 11.1875 6.5625 11.1875H17.9375ZM9.1875 19.0625H6.5625C5.79688 19.0625 5.25 18.5156 5.25 17.75C5.25 17.0391 5.79688 16.4375 6.5625 16.4375H9.1875C9.89844 16.4375 10.5 17.0391 10.5 17.75C10.5 18.5156 9.89844 19.0625 9.1875 19.0625ZM21 0.25C22.9141 0.25 24.5 1.83594 24.5 3.75V21.25C24.5 23.2188 22.9141 24.75 21 24.75H3.5C1.53125 24.75 0 23.2188 0 21.25V3.75C0 1.83594 1.53125 0.25 3.5 0.25H21ZM21 2.875H3.5C3.00781 2.875 2.625 3.3125 2.625 3.75V21.25C2.625 21.7422 3.00781 22.125 3.5 22.125H21C21.4375 22.125 21.875 21.7422 21.875 21.25V3.75C21.875 3.3125 21.4375 2.875 21 2.875Z"
                fill="#5956FE"
              />
            </svg>
          </div>

          <span class="breadcrumb__item__text">1. DADOS</span>
        </li>

        <!-- @click="jumpStep(2)" -->
        <li
          class="breadcrumb__item"
          :class="{
            active: activeSection >= 2,
            activeMobile: activeSection === 2,
          }"
        >
          <div class="breadcrumb__item__icon">
            <svg
              width="25"
              height="29"
              viewBox="0 0 25 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9375 22.8125C10.6641 22.8125 10.5 22.6484 10.5 22.375V20.625C10.5 20.4062 10.6641 20.1875 10.9375 20.1875H18.8125C19.0312 20.1875 19.25 20.4062 19.25 20.625V22.375C19.25 22.6484 19.0312 22.8125 18.8125 22.8125H10.9375ZM6.125 23.25C5.63281 23.25 5.25 22.8672 5.25 22.375V20.625C5.25 20.1875 5.63281 19.75 6.125 19.75H7.875C8.3125 19.75 8.75 20.1875 8.75 20.625V22.375C8.75 22.8672 8.3125 23.25 7.875 23.25H6.125ZM6.125 16.25C5.63281 16.25 5.25 15.8672 5.25 15.375V13.625C5.25 13.1875 5.63281 12.75 6.125 12.75H7.875C8.3125 12.75 8.75 13.1875 8.75 13.625V15.375C8.75 15.8672 8.3125 16.25 7.875 16.25H6.125ZM10.9375 15.8125C10.6641 15.8125 10.5 15.6484 10.5 15.375V13.625C10.5 13.4062 10.6641 13.1875 10.9375 13.1875H18.8125C19.0312 13.1875 19.25 13.4062 19.25 13.625V15.375C19.25 15.6484 19.0312 15.8125 18.8125 15.8125H10.9375ZM6.125 9.25C5.63281 9.25 5.25 8.86719 5.25 8.375V6.625C5.25 6.1875 5.63281 5.75 6.125 5.75H7.875C8.3125 5.75 8.75 6.1875 8.75 6.625V8.375C8.75 8.86719 8.3125 9.25 7.875 9.25H6.125ZM10.9375 8.8125C10.6641 8.8125 10.5 8.64844 10.5 8.375V6.625C10.5 6.40625 10.6641 6.1875 10.9375 6.1875H18.8125C19.0312 6.1875 19.25 6.40625 19.25 6.625V8.375C19.25 8.64844 19.0312 8.8125 18.8125 8.8125H10.9375ZM22.75 0.5C23.6797 0.5 24.5 1.32031 24.5 2.25V26.75C24.5 27.7344 23.6797 28.5 22.75 28.5H1.75C0.765625 28.5 0 27.7344 0 26.75V2.25C0 1.32031 0.765625 0.5 1.75 0.5H22.75ZM21.875 25.875V3.125H2.625V25.875H21.875Z"
                fill="#5956FE"
              />
            </svg>
          </div>

          <span class="breadcrumb__item__text">2. PLANOS</span>
        </li>

        <!-- @click="jumpStep(3)" -->
        <li
          class="breadcrumb__item"
          :class="{
            active: activeSection === 3,
            activeMobile: activeSection === 3,
          }"
        >
          <div class="breadcrumb__item__icon">
            <svg
              width="18"
              height="29"
              viewBox="0 0 18 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5391 13.7891C15.4375 14.6094 17.2969 17.6172 16.5312 20.6797C15.9297 23.3047 13.4141 25 10.7344 25H10.625V27.625C10.625 28.1172 10.1875 28.5 9.75 28.5H8C7.50781 28.5 7.125 28.1172 7.125 27.625V25H6.96094C5.21094 25 3.57031 24.4531 2.20312 23.4141C1.82031 23.0859 1.76562 22.4844 2.14844 22.1016L3.40625 20.8438C3.67969 20.5703 4.17188 20.5156 4.5 20.7344C5.21094 21.2266 6.08594 21.5 6.96094 21.5H11.0078C12.3203 21.5 13.4141 20.2969 13.1953 18.9297C13.0859 18.0547 12.375 17.3438 11.5 17.125L5.15625 15.2656C2.25781 14.4453 0.398438 11.4375 1.16406 8.375C1.76562 5.75 4.28125 4 6.96094 4H7.125V1.375C7.125 0.9375 7.50781 0.5 8 0.5H9.75C10.1875 0.5 10.625 0.9375 10.625 1.375V4H10.7344C12.4844 4 14.125 4.60156 15.4922 5.64062C15.875 5.96875 15.9297 6.57031 15.5469 6.95312L14.2891 8.21094C14.0156 8.48438 13.5234 8.53906 13.1953 8.32031C12.4844 7.77344 11.6094 7.5 10.7344 7.5H6.74219C5.375 7.5 4.28125 8.70312 4.5 10.125C4.66406 11 5.32031 11.7109 6.19531 11.9297L12.5391 13.7891Z"
                fill="#4B4B4B"
              />
            </svg>
          </div>

          <span class="breadcrumb__item__text">3. PAGAMENTO</span>
        </li>
      </ul>

      <form class="form payment-flow__section__form">
        <section
          v-show="activeSection === 1"
          class="payment-flow__section payment-flow__section--data"
        >
          <div class="payment-flow__section--payment__column__content">
            <h3>Dados pessoais</h3>

            <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalData.name.isValid === false,
                }"
              >
                <label for="">Nome completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  v-model="form.personalData.name.value"
                  @blur="
                    visit('personalData', 'name');
                    validateInputs();
                  "
                />

                <span
                  v-if="form.personalData.name.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalData.name.errorMessage }}</span
                >
              </div>

              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalData.email.isValid === false,
                }"
              >
                <label for="">E-mail</label>
                <input
                  type="text"
                  placeholder="Seu e-mail"
                  v-model="form.personalData.email.value"
                  @blur="
                    visit('personalData', 'email');
                    validateInputs();
                  "
                />

                <span
                  v-if="form.personalData.email.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalData.email.errorMessage }}</span
                >
              </div>
            </div>

            <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalData.email.isValid === false,
                }"
              >
                <label for="">Telefone</label>
                <input
                  type="text"
                  placeholder="Seu telefone"
                  v-model="form.personalData.phone.value"
                  v-mask="['(##) ####-####', '(##) #####-####']"
                  @blur="
                    visit('personalData', 'phone');
                    validateInputs();
                  "
                />

                <span
                  v-if="form.personalData.phone.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalData.phone.errorMessage }}</span
                >
              </div>

              <div
                class="input-field"
                :class="{
                  'input-field--error': form.personalData.cpf.isValid === false,
                }"
              >
                <label for="">CPF</label>
                <input
                  type="text"
                  placeholder="Seu CPF"
                  v-mask="['###.###.###-##']"
                  v-model="form.personalData.cpf.value"
                  @blur="
                    visit('personalData', 'cpf');
                    validateInputs();
                  "
                /><span
                  v-if="form.personalData.cpf.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalData.cpf.errorMessage }}</span
                >
              </div>
            </div>

            <!-- <h3>Endereço</h3> -->

            <!-- <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalAddress.zipcode.isValid === false,
                }"
              >
                <label for="">CEP</label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  v-mask="['#####-###']"
                  v-model="form.personalAddress.zipcode.value"
                  @blur="
                    visit('personalAddress', 'zipcode');
                    validateInputs();
                  "
                />

                <span
                  v-if="form.personalAddress.zipcode.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalAddress.zipcode.errorMessage }}</span
                >
              </div>
            </div>

            <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalAddress.street.isValid === false,
                }"
              >
                <label for="">Logradouro</label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  v-model="form.personalAddress.street.value"
                  @blur="
                    visit('personalAddress', 'street');
                    validateInputs();
                  "
                  disabled
                />

                <span
                  v-if="form.personalAddress.street.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalAddress.street.errorMessage }}</span
                >
              </div>

              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalAddress.number.isValid === false,
                }"
              >
                <label for="">Número</label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  v-model="form.personalAddress.number.value"
                  @blur="
                    visit('personalAddress', 'number');
                    validateInputs();
                  "
                />

                <span
                  v-if="form.personalAddress.number.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalAddress.number.errorMessage }}</span
                >
              </div>
            </div>

            <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalAddress.neighborhood.isValid === false,
                }"
              >
                <label for="">Bairro</label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  v-model="form.personalAddress.neighborhood.value"
                  @blur="
                    visit('personalAddress', 'neighborhood');
                    validateInputs();
                  "
                  disabled
                />

                <span
                  v-if="form.personalAddress.neighborhood.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalAddress.neighborhood.errorMessage }}</span
                >
              </div>
            </div>

            <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalAddress.city.isValid === false,
                }"
              >
                <label for="">Cidade</label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  v-model="form.personalAddress.city.value"
                  @blur="
                    visit('personalAddress', 'city');
                    validateInputs();
                  "
                  disabled
                />

                <span
                  v-if="form.personalAddress.city.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalAddress.city.errorMessage }}</span
                >
              </div>
            </div>

            <div class="input-columns">
              <div
                class="input-field"
                :class="{
                  'input-field--error':
                    form.personalAddress.uf.isValid === false,
                }"
              >
                <label for="">UF</label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  v-model="form.personalAddress.uf.value"
                  @blur="
                    visit('personalAddress', 'uf');
                    validateInputs();
                  "
                  disabled
                />

                <span
                  v-if="form.personalAddress.uf.isValid === false"
                  class="helper-text helper-text--error"
                  >{{ form.personalAddress.uf.errorMessage }}</span
                >
              </div>
            </div> -->
          </div>

          <!-- ABRIR EMPRESA -->
          <div
            v-if="$route.meta.view === 'open-company'"
            class="payment-flow__section--payment__column__content"
          >
            <div class="divider"></div>

            <h3>Dados da empresa</h3>

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
                endereço fiscal PJzen?</label
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
              ja podemos te atender
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
                    value="0k até 25k de faturamento/mês"
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
                    value="25k até 50k de faturamento/mês"
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
                    value="50k até 100k de faturamento/mês"
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
                    value="100k ou mais de faturamento/mês"
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
          v-show="activeSection === 2"
          class="payment-flow__section payment-flow__section--plans"
        >
          <PlansList
            ref="plansList"
            @onSelectPlan="selectPlan"
            :isInteractive="true"
          />
        </section>

        <section
          v-show="activeSection === 3"
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
                    <span
                      class="input-field__radio-item__radio input-field__radio-item__radio--checked"
                    ></span>
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
                    'input-field--error':
                      form.payment.cardInfo.document.isValid === false,
                  }"
                >
                  <label for="">CPF/CNPJ</label>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    v-mask="['###.###.###-##', '##.###.###/####-##']"
                    v-model="form.payment.cardInfo.document.value"
                    @blur="
                      visitPayment('payment', 'cardInfo', 'document');
                      validateInputs();
                    "
                  /><span
                    v-if="form.payment.cardInfo.document.isValid === false"
                    class="helper-text helper-text--error"
                    >{{ form.payment.cardInfo.document.errorMessage }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="payment-flow__section--payment__column payment-flow__section--payment__column--resume"
          >
            <div
              v-if="selectedPlan"
              class="payment-flow__section--payment__column__content"
            >
              <h3>Seu plano</h3>

              <p class="resume-text">
                <span class="resume-text__content">{{
                  selectedPlan.plan_items[0].product.name
                }}</span>
                <span
                  class="resume-text__price"
                  v-if="
                    selectedPlan.plan_items[0].product.pricing_schema
                      .short_format
                  "
                >
                  {{
                    selectedPlan.plan_items[0].product.pricing_schema
                      .short_format
                  }}</span
                >
                <span class="resume-text__price" v-else>{{
                  selectedPlan.plan_items[0].product.pricing_schema.short_format
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
                <span
                  v-if="
                    selectedPlan.plan_items[0].product.pricing_schema
                      .short_format
                  "
                  class="resume-text__price"
                  >{{
                    selectedPlan.plan_items[0].product.pricing_schema
                      .short_format
                  }}</span
                >
                <span v-else class="resume-text__price">{{
                  selectedPlan.plan_items[0].product.pricing_schema.short_format
                }}</span>
              </p>
            </div>

            <!-- <div class="payment-flow__section--payment__column__footer">
              <p class="resume-text">
                <span class="resume-text__content"
                  >Total a pagar na primeira <br />
                  mensalidade</span
                >
                <span class="resume-text__price">{{
                  selectedPlan.plan_items[0].product.pricing_schema.short_format
                }}</span>
              </p>
            </div> -->

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
        v-show="activeSection !== 3"
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

import formValidationMixin from "@/commons/mixins/form-validation";
import PlansList from "@/presentation/modules/PlansList.vue";
import Loader from "@/presentation/components/Loader.vue";

import { companyActivityOptions } from "@/commons/consts/consts";

// import cnpjMock from "@/commons/content/cnpj-response.json";
import CNPJInfo from "@/services/get/search-cnpj-data-service.js";

import CustomerService from "@/services/post/register-customer-service";
import PaymentProfileService from "@/services/post/register-payment-profile-service";
import SubscriptionService from "@/services/post/create-subscription-service";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "app-payment-flow",

  directives: { mask },

  mixins: [formValidationMixin],

  data() {
    return {
      isBusy: false,

      loaderMessage: "",

      activeSection: 1,

      plansList: [],

      selectedPlan: null,

      companyActivityOptions: companyActivityOptions,

      cnpjData: {},
    };
  },

  methods: {
    scrollUp() {
      window.scrollTo(0, this.$refs.breadcrumb.offsetTop - 50);
    },

    showError(errorMessage) {
      toast(errorMessage, {
        autoClose: 3000,
        type: "error",
      });
    },

    async nextStep() {
      if (this.activeSection === 3) {
        return;
      }

      // STEP 1
      if (this.activeSection === 1) {
        let canGo = false;

        canGo = this.checkGroupForm(this.form.personalData, [
          "name",
          "email",
          "phone",
          "cpf",
        ]);

        // canGo = this.checkGroupForm(this.form.personalAddress, [
        //   "zipcode",
        //   "street",
        //   "number",
        //   "neighborhood",
        //   "city",
        //   "uf",
        // ]);

        if (this.$route.meta.view === "open-company") {
          canGo = this.checkGroupForm(this.form.openCompany, [
            "companyActivity",
            "addressType",
          ]);
        }

        if (this.$route.meta.view === "change-counter") {
          canGo = this.checkGroupForm(this.form.changeCounter, [
            "cnpj",
            "monthlyBilling",
          ]);
        }

        if (!canGo) {
          this.form.fail = true;
          this.validateInputs();
          this.showError(
            "Preencha todos os campos corretamente para continuar"
          );
          return;
        } else {
          this.form.fail = false;
          this.validateInputs();
        }
      }

      this.activeSection++;
      this.scrollUp();
    },

    prevStep() {
      this.scrollUp();
      if (this.activeSection === 1) {
        return;
      } else {
        this.activeSection--;
      }
    },

    jumpStep(step) {
      this.activeSection =
        step === this.activeSection + 1 || step == this.activeSection - 1
          ? step
          : this.activeSection;
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

    selectPlan(plan) {
      this.selectedPlan = plan;
    },

    async searchCNPJInfo() {
      if (!this.form.changeCounter.cnpj.isValid) return;

      this.isBusy = true;

      // // TODO: remover mock
      // this.cnpjData = cnpjMock;
      // setTimeout(() => (this.isBusy = false), 1000);

      // const searchCNPJInfoService = new CNPJInfo();

      const response = await CNPJInfo.search(
        this.form.changeCounter.cnpj.value
      );

      if (response.data) {
        this.cnpjData = response.data;
      }

      if (response.error) {
        console.error(
          "Houve um problema inesperado ao buscar os dados do CNPJ",
          response
        );
      }

      this.isBusy = false;
    },

    async registerCustomer() {
      const name = this.form.personalData.name.value.trim();
      const email = this.form.personalData.email.value.trim();
      const phone = `55${this.form.personalData.phone.value
        .trim()
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")
        .replaceAll("-", "")}`;
      const cpf = this.form.personalData.cpf.value
        .trim()
        .replaceAll(".", "")
        .replaceAll("-", "");
      // const zipcode = this.form.personalAddress.zipcode.value.trim();
      // const street = this.form.personalAddress.street.value.trim();
      // const number = this.form.personalAddress.number.value.trim();
      // const neighborhood = this.form.personalAddress.neighborhood.value.trim();
      // const city = this.form.personalAddress.city.value.trim();
      // const uf = this.form.personalAddress.uf.value.trim();

      const userData = {
        name: name,
        email: email,
        phone: phone,
        cpf: cpf,
        // address: {
        //   street: street,
        //   number: number,
        //   zipcode: zipcode,
        //   neighborhood: neighborhood,
        //   city: city,
        //   uf: uf,
        // },
      };

      let companyData = {};
      companyData.contractMethod = this.$route.meta.view;

      if (this.$route.meta.view === "open-company") {
        companyData.companyActivity =
          this.form.openCompany.companyActivity.value;
        companyData.addressType = this.form.openCompany.addressType.value;
        companyData.partnersNumber = this.form.openCompany.partnersNumber.value;
      }

      if (this.$route.meta.view === "change-counter") {
        companyData.cnpj = this.form.changeCounter.cnpj.value;
        companyData.monthlyBilling =
          this.form.changeCounter.monthlyBilling.value;
        companyData.colaboratorsNumber =
          this.form.changeCounter.colaboratorsNumber.value;
      }

      this.loaderMessage = "Registrando usuário...";

      const response = await CustomerService.registerCustomer(
        userData,
        companyData
      );

      if (response.error) {
        this.form.fail = true;

        this.showError(
          "Ocorreu um erro ao registrar usuário. Entre em contato ou tente novamente mais tarde."
        );

        console.log(
          "API ERROR -> Houve um erro ao cadastrar o usuário.",
          response.error
        );

        this.loaderMessage = "";
        return;
      }

      this.loaderMessage = "";
      return response.data.data.customer;
    },

    async registerPaymentProfile(customerId) {
      const holderName = this.form.payment.cardInfo.name.value.trim();
      const cardExpirationDate =
        this.form.payment.cardInfo.expirationDate.value;
      const cardNumber = this.form.payment.cardInfo.number.value.replaceAll(
        " ",
        ""
      );
      const securityCode = this.form.payment.cardInfo.cvc.value;

      const paymentData = {
        holderName: holderName,
        cardExpirationDate: cardExpirationDate,
        cardNumber: cardNumber,
        securityCode: securityCode,
        userId: customerId,
      };

      this.loaderMessage = "Registrando perfil de pagamento...";

      const response = await PaymentProfileService.registerPaymentProfile({
        paymentData: paymentData,
      });

      if (response.error) {
        this.form.fail = true;

        this.showError(
          "Ocorreu um erro ao registrar pagamento. Entre em contato ou tente novamente mais tarde."
        );

        console.log(
          "API ERROR -> Houve um erro ao cadastrar o perfil de pagamento.",
          response.error
        );
        this.loaderMessage = "";
        return;
      }

      this.loaderMessage = "";
      return response.data.data.payment_profile;
    },

    async createSubscription(planId, customerId, productId) {
      const subscriptionData = {
        planId,
        customerId,
        productId,
      };

      this.loaderMessage = "Criando assinatura...";

      const response = await SubscriptionService.createSubscription({
        subscriptionData: subscriptionData,
      });

      if (response.error) {
        this.form.fail = true;

        this.showError(
          "Ocorreu um erro ao registrar assinatura. Entre em contato ou tente novamente mais tarde."
        );

        console.log(
          "API ERROR -> Houve um erro ao criar a assinatura.",
          response.error
        );
        this.loaderMessage = "";
        return;
      }
      this.loaderMessage = "";
      return response;
    },

    async submit() {
      this.isBusy = true;

      if (!this.form.isValid) {
        this.showError(
          "Termine de preencher todos os campos antes de realizar a operação."
        );
        this.validateInputs();
        this.isBusy = false;
        return;
      }

      // // register user
      const customerRegistered = await this.registerCustomer();

      const customerId = customerRegistered.id;

      // register payment profile
      await this.registerPaymentProfile(customerId);

      const planId = this.selectedPlan.id;
      const productId = this.selectedPlan.plan_items[0].product.id;

      // // create subscription
      await this.createSubscription(planId, customerId, productId);

      this.form.succeeded = true;

      this.isBusy = false;
      this.scrollUp();
    },
  },

  components: { Loader, PlansList },
};
</script>
<style lang=""></style>
