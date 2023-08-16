import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyD-ZRnitpfLcyK-ObjrJGV_YJqE6M4ERgs",
  authDomain: "moeshop-store.firebaseapp.com",
  projectId: "moeshop-store",
  storageBucket: "moeshop-store.appspot.com",
  messagingSenderId: "768306656764",
  appId: "1:768306656764:web:6cbf96d5c9954430576e79",
  measurementId: "G-5S1YZVSZ38"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export { db };
