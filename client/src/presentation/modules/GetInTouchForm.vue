<template lang="">
  <form class="form">
    <div class="form-container">
      <h2>Preencha o formulário e aguarde nosso contato ;)</h2>

      <div class="input-field">
        <label for="">Nome completo</label>
        <input
          type="text"
          placeholder="Seu nome"
          v-model="form.name.value"
          @blur="
            visit('name');
            validateInputs();
          "
        />
        <span
          v-if="form.name.isValid === false"
          class="helper-text helper-text--error"
          >{{ form.name.errorMessage }}</span
        >
      </div>

      <div class="input-field">
        <label for="">E-mail</label>
        <input
          type="text"
          placeholder="Seu e-mail"
          v-model="form.email.value"
          @blur="
            visit('email');
            validateInputs();
          "
        />
        <span
          v-if="form.email.isValid === false"
          class="helper-text helper-text--error"
          >{{ form.email.errorMessage }}</span
        >
      </div>

      <div class="input-field">
        <label for="">Telefone</label>
        <input
          type="text"
          placeholder="Digite seu telefone"
          v-model="form.phone.value"
          v-mask="['(##) ####-####', '(##) #####-####']"
          @blur="
            visit('phone');
            validateInputs();
          "
        />
        <span
          v-if="form.phone.isValid === false"
          class="helper-text helper-text--error"
          >{{ form.phone.errorMessage }}</span
        >
      </div>

      <div class="input-columns">
        <div
          class="input-field"
          :class="{
            'input-field--error': form.uf.isValid === false,
          }"
        >
          <label for="uf">UF</label>
          <div class="input-field__select-area">
            <select
              class="input-field__select-area__select"
              name="uf"
              id="uf"
              ref="uf"
              v-model="form.uf.value"
              @change="
                selectState(form.uf.value);
                visit('uf');
                validateInputs();
              "
            >
              <option value="-1" disabled>Digite seu estado</option>
              <option
                v-for="(option, index) in stateList"
                :key="index"
                :value="option.id"
                :selected="form.uf.value === option.id"
              >
                {{ option.name }}
              </option>
            </select>
            <span
              v-if="form.uf.isValid === false"
              class="helper-text helper-text--error"
              >{{ form.uf.errorMessage }}</span
            >
          </div>
        </div>

        <div
          class="input-field"
          :class="{
            'input-field--error': form.city.isValid === false,
          }"
        >
          <label for="city">Cidade</label>
          <div class="input-field__select-area">
            <select
              class="input-field__select-area__select"
              name="city"
              id="city"
              ref="city"
              v-model="form.city.value"
              :disabled="cityList.length <= 0"
              @change="
                visit('city');
                validateInputs();
              "
            >
              <option value="-1" disabled>Digite sua cidade</option>
              <option
                v-for="(option, index) in cityList"
                :key="index"
                :value="option.value"
              >
                {{ option.value }}
              </option>
            </select>
            <span
              v-if="form.city.isValid === false"
              class="helper-text helper-text--error"
              >{{ form.city.errorMessage }}</span
            >
          </div>
        </div>
      </div>

      <div class="input-field">
        <label for="how-can-we-help-you">Como podemos te ajudar?</label>
        <div class="input-field__select-area">
          <select
            class="input-field__select-area__select"
            name="how-can-we-help-you"
            id="how-can-we-help-you"
            ref="howCanWeHelpYou"
            v-model="form.howCanWeHelpYou.value"
            @change="
              visit('howCanWeHelpYou');
              validateInputs();
            "
          >
            <option value="-1" selected>Escolher</option>
            <option value="Abrir minha empresa">Abrir minha empresa</option>
            <option value="Trocar de contador">Trocar de contador</option>
          </select>
          <span
            v-if="form.howCanWeHelpYou.isValid === false"
            class="helper-text helper-text--error"
            >{{ form.howCanWeHelpYou.errorMessage }}</span
          >
        </div>
      </div>

      <button
        @click.prevent="submit()"
        type="submit"
        class="button button--primary button--full"
      >
        Solicitar
      </button>
    </div>
  </form>
</template>
<script>
import { mask } from "vue-the-mask";

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

import states from "@/commons/content/states.json";
import cities from "@/commons/content/cities.json";

export default {
  name: "app-get-in-touch-form",

  directives: { mask },

  data() {
    return {
      stateList: states,
      cityList: [],

      form: {
        isValid: false,
        success: false,
        fail: false,

        name: {
          value: null,
          isValid: null,
          errorMessage: "",
          isVisited: false,
        },
        email: {
          value: null,
          isValid: null,
          errorMessage: "",
          isVisited: false,
        },
        phone: {
          value: null,
          isValid: null,
          errorMessage: "",
          isVisited: false,
        },
        city: {
          value: "-1",
          isValid: null,
          errorMessage: "",
          isVisited: false,
        },
        uf: {
          value: "-1",
          isValid: null,
          errorMessage: "",
          isVisited: false,
        },
        howCanWeHelpYou: {
          value: "-1",
          isValid: null,
          errorMessage: "",
          isVisited: false,
        },
      },
    };
  },

  methods: {
    selectState(stateId) {
      const cityList = Object.entries(cities)
        .filter(([id]) => id.startsWith(stateId))
        .map((city) => {
          return {
            id: city[0],
            value: city[1],
          };
        });

      console.log(cityList);

      this.cityList = cityList;
    },

    showError(errorMessage) {
      toast(errorMessage, {
        autoClose: 3000,
        type: "error",
      });
    },

    checkForm() {
      if (
        !this.form.name.isValid ||
        !this.form.email.isValid ||
        !this.form.phone.isValid ||
        !this.form.city.isValid ||
        !this.form.uf.isValid ||
        !this.form.companyActivity.isValid
      ) {
        this.form.isValid = false;
        return;
      }

      this.form.isValid = true;
    },

    visit(field) {
      this.form[field].isVisited = true;
    },

    validateNotEmpty(value) {
      return value !== null && value !== "";
    },

    validateEmail(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },

    validatePhone(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return new RegExp(
        /(\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{3,4})|([0-9]{10,11})|([0-9]{2}\s?[0-9]{8,9})/
      ).test(value);
    },

    validateUF(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return value.length === 2;
    },

    validateSelect(value) {
      return value !== "" && value !== "-1" && value != "0";
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
      const invalidEmail = "Este campo deve ter um endereço de e-mail válido";
      const invalidPhone = "Telefone inválido";
      const requiredSelectedMessage = "Selecione uma opção para continuar";

      this.validateField({
        reference: this.form.name,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.email,
        validateFunction: this.validateEmail,
        errorMessage: invalidEmail,
      });

      this.validateField({
        reference: this.form.phone,
        validateFunction: this.validatePhone,
        errorMessage: invalidPhone,
      });

      // this.validateField({
      //   reference: this.form.city,
      //   validateFunction: this.validateNotEmpty,
      //   errorMessage: requiredMessage,
      // });

      this.validateField({
        reference: this.form.howCanWeHelpYou,
        validateFunction: this.validateSelect,
        errorMessage: requiredSelectedMessage,
      });
    },

    async submit() {
      this.isBusy = true;

      this.isBusy = false;
    },
  },
};
</script>
<style lang=""></style>
