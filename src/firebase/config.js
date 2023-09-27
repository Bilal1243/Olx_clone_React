import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCiPoS3A3FLdkJssI2-uOESXroG0H8cVbc",
  authDomain: "olx-demo-e0354.firebaseapp.com",
  projectId: "olx-demo-e0354",
  storageBucket: "olx-demo-e0354.appspot.com",
  messagingSenderId: "540798390430",
  appId: "1:540798390430:web:4044c134ccc10dc459ab8f",
  measurementId: "G-JHV4QHM3X7"
};


const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp)

export default db

