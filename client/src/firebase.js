import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNmqLD4BHVf8HQKksXwmfQWFRA9Cy4Aso",
  authDomain: "pjzen-v2.firebaseapp.com",
  projectId: "pjzen-v2",
  storageBucket: "pjzen-v2.appspot.com",
  messagingSenderId: "184365309342",
  appId: "1:184365309342:web:ec7b61570e8f4412444a8f",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
