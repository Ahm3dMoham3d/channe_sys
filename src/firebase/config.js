import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export const firebaseConfig = {
  apiKey: "AIzaSyA_USm5GIis1h1c0Y8wHeXOBRAikJ1_C-0",
  authDomain: "channel2-5555a.firebaseapp.com",
  projectId: "channel2-5555a",
  storageBucket: "channel2-5555a.appspot.com",
  messagingSenderId: "540841366839",
  appId: "1:540841366839:web:bae955e50aa0c2633f36b2"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

