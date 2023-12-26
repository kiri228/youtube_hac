import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  reauthenticateWithCredential,
  getAuth,
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

export const userContext = createContext();
const UserContext = ({ children }) => {
  const APIUsers = "http://localhost:8000/users";
  const navigate = useNavigate();
  async function register(email, password, displayName, image) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await axios.post(APIUsers, {
        email: email,
        displayName: displayName,
        image: image,
        id: auth.currentUser.uid,
      });
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }
  async function login(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  }
  async function logout() {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <userContext.Provider
      value={{
        register,
        login,
        logout,
      }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
