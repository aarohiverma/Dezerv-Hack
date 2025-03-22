import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCNAARBxxEzVoCo_ddr879cQnzSZykdSOA",
  authDomain: "dezerv-74897.firebaseapp.com",
  projectId: "dezerv-74897",
  storageBucket: "dezerv-74897.firebasestorage.app",
  messagingSenderId: "804953141206",
  appId: "1:804953141206:web:7c829b7dada7fb4ecafe77",
  measurementId: "G-CNFZ7MPVH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider }; 