// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAnWhWMnpFeS5CIyNiq3ocJOvAG7cFgFhA',
  authDomain: 'whou-68a58.firebaseapp.com',
  projectId: 'whou-68a58',
  storageBucket: 'whou-68a58.appspot.com',
  messagingSenderId: '1022032037825',
  appId: '1:1022032037825:web:ef0f14248c7d571d6ed140',
  measurementId: 'G-H4YWREXW64',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

qbox.onclick