import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn2DdWEKPZQO8KzQpp0mWBOoHGOOzoNB0",
  authDomain: "iot-crimestopper.firebaseapp.com",
  projectId: "iot-crimestopper",
  storageBucket: "iot-crimestopper.appspot.com",
  messagingSenderId: "232271908082",
  appId: "1:232271908082:web:ee068985b45c7d2822946b"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;