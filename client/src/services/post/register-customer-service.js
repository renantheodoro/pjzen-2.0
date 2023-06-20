import api from "@/services/api";
import { db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export default {
  async registerCustomer(user, company) {
    const userData = user;

    try {
      // save user
      await setDoc(doc(db, "users", userData.cpf), {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        cpf: userData.cpf,
        companyData: company,
      });

      const response = await api().post("register-customer", userData);

      if (response.error) {
        return { error: response.error };
      }

      return response;
    } catch (error) {
      return { error };
    }
  },
};
