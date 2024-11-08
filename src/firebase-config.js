// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Thông tin cấu hình từ Firebase Console
const firebaseConfig = {

  apiKey: "AIzaSyDXbXmc7SbpmM2LdtVdAocGF-Yv5wNyWfQ",

  authDomain: "eyes-system.firebaseapp.com",

  databaseURL: "https://eyes-system-default-rtdb.firebaseio.com",

  projectId: "eyes-system",

  storageBucket: "eyes-system.firebasestorage.app",

  messagingSenderId: "1077739216939",

  appId: "1:1077739216939:web:1f797d480d180812ee8a6e",

  measurementId: "G-MQSVY5MR6W"

};


// i1IPkwNrjIgoUl1Ae6ukaSyy0CVQQVWfgW4kRdWT 

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo cơ sở dữ liệu
const database = getDatabase(app);

export { database, ref, set };
