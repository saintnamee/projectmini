import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDoGbinMyHqvOIUISFy4JBLdC8yEX2qXkw",
  authDomain: "projectmini-7a5e3.firebaseapp.com",
  databaseURL: "https://projectmini-7a5e3.firebaseio.com",
  projectId: "projectmini-7a5e3",
  storageBucket: "projectmini-7a5e3.appspot.com",
  messagingSenderId: "336215713933"
});

export default app;
