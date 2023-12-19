import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1upsZhBlHOLhEFo3DsTRhlc8a2tbIa9o",
  authDomain: "netflix-gpt-ebc9f.firebaseapp.com",
  projectId: "netflix-gpt-ebc9f",
  storageBucket: "netflix-gpt-ebc9f.appspot.com",
  messagingSenderId: "79980225779",
  appId: "1:79980225779:web:93c34a268dda3e1c078386",
  measurementId: "G-29EYFWQSXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();