import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAfNKJPrsSMOEE_z5OC1JpxHQxDJkUS34c",
  authDomain: "e-ride-7ff87.firebaseapp.com",
  projectId: "e-ride-7ff87",
  storageBucket: "e-ride-7ff87.appspot.com",
  messagingSenderId: "9738582875",
  appId: "1:9738582875:web:d1d0b049598da101dc387e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
