import * as firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyAXHlaPs44bgiToBZALNgrbwpt23EA_6DQ",
    authDomain: "csd-speedhub.firebaseapp.com",
    databaseURL: "https://csd-speedhub.firebaseio.com",
    projectId: "csd-speedhub",
    storageBucket: "csd-speedhub.appspot.com",
    messagingSenderId: "95783610592",
    appId: "1:95783610592:web:474332040e4cfffe0d0885",
    measurementId: "G-7MG81NNLJC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  