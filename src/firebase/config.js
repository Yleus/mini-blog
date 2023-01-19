import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHK8Jlhk5soCbQ2MvyA4vjH3pJa-LrGxI",
  authDomain: "miniblog-a0a6a.firebaseapp.com",
  projectId: "miniblog-a0a6a",
  storageBucket: "miniblog-a0a6a.appspot.com",
  messagingSenderId: "600423216172",
  appId: "1:600423216172:web:f296a6401641f77cd28d89"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
