import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// You can get this configuration block from the Firebase Console:
// Project Settings -> General -> Your Apps (create a web app if you haven't yet)
const firebaseConfig = {
  apiKey: "AIzaSyC33XbdoyBoaxNlBXpxfbsriAMzJMLYqTQ",
  authDomain: "geolensegit-15672953-802e9.firebaseapp.com",
  projectId: "geolensegit-15672953-802e9",
  storageBucket: "geolensegit-15672953-802e9.firebasestorage.app",
  messagingSenderId: "41715503101",
  appId: "1:41715503101:web:38815df3dbef902acf1394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services (Uncomment if using Firestore or Analytics)
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

export default app;
