import ZipcodeService from "@/services/get/validate-cep-service";

export default {
  data() {
    return {
      form: {
        isValid: false,
        success: false,
        fail: false,

        personalData: {
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
          cpf: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
        },

        personalAddress: {
          zipcode: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          street: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          number: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          neighborhood: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          city: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
          uf: {
            value: null,
            isValid: null,
            errorMessage: "",
            isVisited: false,
          },
        },

        openCompany: {
          companyActivity: {
            value: "-1",
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
            value: 0,
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
            value: "0-25",
            isValid: true,
            errorMessage: "",
            isVisited: false,
          },
          colaboratorsNumber: {
            value: 0,
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
            document: {
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
    checkForm() {
      // Personal Data
      if (
        !this.form.personalData.name.isValid ||
        !this.form.personalData.email.isValid ||
        !this.form.personalData.phone.isValid ||
        !this.form.personalData.cpf.isValid
      ) {
        this.form.isValid = false;
        return;
      }

      // Open Company
      if (this.$route.meta.view === "open-company") {
        if (
          !this.form.openCompany.companyActivity.isValid ||
          !this.form.openCompany.addressType.isValid
        ) {
          this.form.isValid = false;
          return;
        }
      }

      // Change Counter
      if (this.$route.meta.view === "change-counter") {
        if (
          !this.form.changeCounter.cnpj.isValid ||
          !this.form.changeCounter.monthlyBilling.isValid
        ) {
          this.form.isValid = false;
          return;
        }
      }

      // Payment
      if (
        !this.form.payment.cardInfo.number.isValid ||
        !this.form.payment.cardInfo.expirationDate.isValid ||
        !this.form.payment.cardInfo.cvc.isValid ||
        !this.form.payment.cardInfo.document.isValid
      ) {
        this.form.isValid = false;
        return;
      }

      this.form.isValid = true;
    },

    checkGroupForm(group, fields) {
      let isInvalid = 0;

      for (let index = 0; index < fields.length; index++) {
        const field = fields[index];

        if (!group[field].isValid) {
          isInvalid++;
          group[field].isVisited = true;
        }
      }

      return isInvalid > 0 ? false : true;
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

    validateEmail(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },

    validateNumberOnly(value) {
      if (!this.validateNotEmpty(value)) {
        return false;
      }
      return new RegExp(/^\d+$/).test(value);
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

    async validateZipcode(value) {
      this.isBusy = true;

      const response = await ZipcodeService.validateZipcode(value);

      if (response.error) {
        return false;
      }

      const data = response.data;

      const neighborhood = data.bairro;
      const zipcode = data.cep;
      const city = data.localidade;
      const street = data.logradouro;
      const uf = data.uf;

      this.form.personalAddress.zipcode.value = zipcode;
      this.form.personalAddress.street.value = street;
      this.form.personalAddress.neighborhood.value = neighborhood;
      this.form.personalAddress.city.value = city;
      this.form.personalAddress.uf.value = uf;

      this.visit("personalAddress", "zipcode");
      this.visit("personalAddress", "street");
      this.visit("personalAddress", "neighborhood");
      this.visit("personalAddress", "city");
      this.visit("personalAddress", "uf");

      this.validateInputs();

      this.isBusy = false;

      return true;
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
      const invalidEmail = "Este campo deve ter um endereço de e-mail válido";
      const invalidPhone = "Telefone inválido";
      const requiredSelectedMessage = "Seleciona uma opção para continuar";
      const invalidCardNumber = "O número do cartão é inválido";
      const invalidCNPJMessage = "CNPJ inválido";
      const invalidCPFMessage = "CPF inválido";
      const documentMessage = "Documento inválido";
      const invalidExpirationDateMessage = "Data de vencimento inválida";
      const invalidCodeNumber = "Código de segurança inválido";

      // PERSONAL DATA
      this.validateField({
        reference: this.form.personalData.name,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.personalData.email,
        validateFunction: this.validateEmail,
        errorMessage: invalidEmail,
      });

      this.validateField({
        reference: this.form.personalData.phone,
        validateFunction: this.validatePhone,
        errorMessage: invalidPhone,
      });

      this.validateField({
        reference: this.form.personalData.cpf,
        validateFunction: this.validateCNPJOrCPF,
        errorMessage: invalidCPFMessage,
      });

      // PERSONAL ADDRESS
      // this.validateField({
      //   reference: this.form.personalAddress.zipcode,
      //   validateFunction: this.validateZipcode,
      //   errorMessage: requiredMessage,
      // });

      // this.validateField({
      //   reference: this.form.personalAddress.street,
      //   validateFunction: this.validateNotEmpty,
      //   errorMessage: requiredMessage,
      // });

      // this.validateField({
      //   reference: this.form.personalAddress.number,
      //   validateFunction: this.validateNumberOnly,
      //   errorMessage: requiredMessage,
      // });

      // this.validateField({
      //   reference: this.form.personalAddress.neighborhood,
      //   validateFunction: this.validateNotEmpty,
      //   errorMessage: requiredMessage,
      // });

      // this.validateField({
      //   reference: this.form.personalAddress.city,
      //   validateFunction: this.validateNotEmpty,
      //   errorMessage: requiredMessage,
      // });

      // this.validateField({
      //   reference: this.form.personalAddress.uf,
      //   validateFunction: this.validateUF,
      //   errorMessage: requiredMessage,
      // });

      // COMPANY DATA
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
        reference: this.form.payment.cardInfo.document,
        validateFunction: this.validateNotEmpty,
        errorMessage: requiredMessage,
      });

      this.validateField({
        reference: this.form.payment.cardInfo.document,
        validateFunction: this.validateCNPJOrCPF,
        errorMessage: documentMessage,
      });

      this.checkForm();
    },
  },
};
