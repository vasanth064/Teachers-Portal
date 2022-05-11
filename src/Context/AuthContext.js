import {
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from 'firebase/auth';
import { auth } from '../Config/firebaseConfig';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthenticationProvider = ({ children }) => {
  const naviagte = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [pending, setpending] = useState(true);
  const setData = async (data) => {
    setUserData(data);
  };
  const emailPasswordSignIn = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      naviagte('/');
    } catch {
      setError('Failed To SignIn');
    }
    setLoading(false);
  };
  const logOut = async () => {
    try {
      setError('');
      setLoading(true);
      await signOut(auth);
      setCurrentUser(null);
    } catch {
      setError('Failed To SignOut');
      setLoading(false);
    }
    setLoading(false);
  };
  const passwordUpdate = (password) => {
    return updatePassword(currentUser, password);
  };
  useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setpending(false);
      }),
    []
  );

  const value = {
    currentUser,
    userData,
    pending,
    emailPasswordSignIn,
    logOut,
    passwordUpdate,
    error,
    loading,
    setData,
  };
  return pending ? (
    <Loader text='Signing You In 🔐' signOut={logOut} />
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthenticationProvider;
