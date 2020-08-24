//firebase config information
//import firebase setup
import firebase from "firebase/app"

//import firestore information
import 'firebase/firestore';

require('dotenv').config();

const config = {
  apiKey: process.env.FB_API,
  authDomain: "csd-speedhub.firebaseapp.com",
  databaseURL: "https://csd-speedhub.firebaseio.com",
  projectId: "csd-speedhub",
  storageBucket: "csd-speedhub.appspot.com",
  messagingSenderId: process.env.FB_SENDER,
  appId: process.env.FB_APP,
  measurementId: process.env.FB_MEASURE,
};
// Initialize Firebase
firebase.initializeApp(config);

// export variable and firestore
export default firebase;
