import "./App.css";
import { firebaseAuth } from "./firebase-config";
import { useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";

// https://stackoverflow.com/questions/68104551/react-firebase-authentication-and-usecontext

export const AuthContext = createContext();

export default function AuthProvider({ auth, setAuth, children }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("user", user);
        setAuth(firebaseAuth);
      } else {
        console.log("user is logged out");
        setAuth(null);
      }
    });
    return unsubscribe;
  }, [setAuth]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
