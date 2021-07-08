// import firebase from 'firebase/app'
// import 'firebase/firestore';
// import 'firebase/auth';

// const config = {
//     apiKey: "AIzaSyAQvvzTK-zI6j38OuX8v0_Fzyj9kxTqwyg",
//     authDomain: "crp-clothing.firebaseapp.com",
//     projectId: "crp-clothing",
//     storageBucket: "crp-clothing.appspot.com",
//     messagingSenderId: "301373726235",
//     appId: "1:301373726235:web:9e70bdb6055594486022be",
//     measurementId: "G-5GYZ0DV3NF"
//   };

//   firebase.initializeApp(config);


//   export const auth = firebase.auth();
//   export const firestore = firebase.firestore();

//   const provider =new firestore.auth.GoogleAuthProvider();
//   provider.setCustomParameters({prompt:'select_account'});
//   export const signInWithGoogle = () => auth.signInWithPopup(provider);

//   export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyAQvvzTK-zI6j38OuX8v0_Fzyj9kxTqwyg",
  authDomain: "crp-clothing.firebaseapp.com",
  projectId: "crp-clothing",
  storageBucket: "crp-clothing.appspot.com",
  messagingSenderId: "301373726235",
  appId: "1:301373726235:web:9e70bdb6055594486022be",
  measurementId: "G-5GYZ0DV3NF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;