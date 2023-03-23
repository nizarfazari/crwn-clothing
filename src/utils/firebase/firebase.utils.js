import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFbq3fZzWAmpk2BJGx2e_q3HHFz5hoLqo",
  authDomain: "crwn-cloth-db-c6b41.firebaseapp.com",
  projectId: "crwn-cloth-db-c6b41",
  storageBucket: "crwn-cloth-db-c6b41.appspot.com",
  messagingSenderId: "1095116962774",
  appId: "1:1095116962774:web:cae9e8b4c6b2afe8a1c277",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  //  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      //aditional digunakan untuk spread operator yang dapat menimpa data
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

export const signAuthOutUser = () => signOut(auth);


//check the authentication ? login or nah
export const onAuthStateChangedListener = ( callback, errorCb, completeCb ) => {
  onAuthStateChanged(auth, callback, errorCb, completeCb);
};
