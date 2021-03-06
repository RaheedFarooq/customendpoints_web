import firebase from "firebase/app";
require("firebase/firestore");
require('firebase/analytics');

var firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
  };
  // Initialize Firebase
  if(!firebase.apps.length)  firebase.initializeApp(firebaseConfig);


  function initiateFirestore() {
    const analytics = firebase.analytics();
    analytics.logEvent('notification_received');
    let db = firebase.firestore();
    return db;
  }
  export async function saveDataToStore({ hash, object }) {
    try {
      const db = initiateFirestore();
      const data = await db.collection("queries").add({
          hash,
          request_object: object
      });
      return data.id;
    } catch (e) {
      console.log(e);
    }
  }