// src/index.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { start } from "./app";
import { init, collectionReferences, queryDocs, addItem } from "./firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAimX56VoZ_7PZK3bz9jDpYGnizD7KtDD8",
  authDomain: "clound-usb.firebaseapp.com",
  projectId: "clound-usb",
  storageBucket: "clound-usb.appspot.com",
  messagingSenderId: "8332067792",
  appId: "1:8332067792:web:3aa417c88bd714d4222fd5",
  measurementId: "G-Z110ZLGNLV"
};
initializeApp(firebaseConfig);
const db = getFirestore();
init(db);

export async function initPlayer() {
    const songs = await queryDocs(collectionReferences.songs);
    start(songs[0]);
}

if (window?.page === 'index') {
  initPlayer();
} else if (window?.page === 'add') {
  const form = document.querySelector("#addSongForm");
  form.onsubmit = (e) => {
    e.preventDefault();
    const data = {};
    const inputs = e.target.querySelectorAll("input");
    inputs.forEach(input => {
      if (input.id) {
        let key = input.id;
        data[`${key.charAt(0).toLowerCase()}${key.slice(1)}`] = input.value;
      }
    });
    const r = addItem(collectionReferences.songs, data);
    console.log(r);
  }
}