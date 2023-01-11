import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHB70zrrxeUkwHSNje7UakFYrDhodS3RU",
  authDomain: "e-commerce-react-99cbc.firebaseapp.com",
  projectId: "e-commerce-react-99cbc",
  storageBucket: "e-commerce-react-99cbc.appspot.com",
  messagingSenderId: "416955356916",
  appId: "1:416955356916:web:9828facac70b371f6630a1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App/>          
    </div>         
);
