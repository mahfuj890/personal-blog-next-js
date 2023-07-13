"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { createContext, useEffect, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const UseAuthContextProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const router = useRouter();

  //Sign in user
  const signIn = () => {
    toast.success("Successfully Login");
    router.push("/dashboard");
    localStorage.setItem("isUserLogin", "true");
  };

  //Sing out user
  const signOut = () => {
    toast.success("Successfully Logout");
    router.push("/");
    localStorage.removeItem("isUserLogin");
    setIsUserLogin(false);
  };

  useEffect(() => {
    console.log(
      'localStorage.removeItem("isUserLogin")',
      localStorage.getItem("isUserLogin")
    );
    if (localStorage.getItem("isUserLogin") === "true") {
      setIsUserLogin(true);
    } else {
      setIsUserLogin(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isUserLogin, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
