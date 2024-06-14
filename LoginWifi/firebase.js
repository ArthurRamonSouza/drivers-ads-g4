import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDFxJel0y6ixr0nwgosn1_lIAJZ8YLT0nc",
  authDomain: "driveaeds.firebaseapp.com",
  databaseURL: "https://driveaeds-default-rtdb.firebaseio.com",
  projectId: "driveaeds",
  storageBucket: "driveaeds.appspot.com",
  messagingSenderId: "481753032818",
  appId: "1:481753032818:web:f1651aade8e1d5e3233aeb",
  measurementId: "G-CWGCM66GEZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
