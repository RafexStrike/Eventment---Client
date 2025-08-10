import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const logIn = (email, password) => {
    setIsLoadingDone(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setIsLoadingDone(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setIsLoadingDone(false);
    return signInWithPopup(auth, googleProvider);
  };

  const bidayPrithibi = () => {
    setIsLoadingDone(false)
    return signOut(auth)
  }

  const storeNameAndPhotoUrlInFirebase = (name, photoURL) => {
    return updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: photoURL
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("currently we have the user", currentUser);
      setUser(currentUser);
      setIsLoadingDone(true);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const allTheThingsWeWannaSendAsContext = {
    user,
    isLoadingDone,
    signUp,
    logIn,
    logInWithGoogle,
    bidayPrithibi,
    storeNameAndPhotoUrlInFirebase,
    setIsLoadingDone,

  };
  return (
    <AuthContext value={allTheThingsWeWannaSendAsContext}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
