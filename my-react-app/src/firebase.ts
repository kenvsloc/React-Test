// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';


import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  query,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCl-qS6BQyu3R6qc7eVhdS1ahtIN03_utQ",
  authDomain: "studen-data.firebaseapp.com",
  projectId: "studen-data",
  storageBucket: "studen-data.appspot.com",
  messagingSenderId: "956933124809",
  appId: "1:956933124809:web:17a9df8e55e2c479cb5318"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  app,
  db,
  storage,
  collection,
  doc,
  addDoc,
  getDocs,
  query,
  ref,
  uploadBytes,
  getDownloadURL,
};