import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// You can get this configuration block from the Firebase Console:
// Project Settings -> General -> Your Apps (create a web app if you haven't yet)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "themiya-portfolio-profile.firebaseapp.com",
  projectId: "themiya-portfolio-profile",
  storageBucket: "themiya-portfolio-profile.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services (Uncomment if using Firestore or Analytics)
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

export default app;
