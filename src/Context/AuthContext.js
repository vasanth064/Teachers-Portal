import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/firebaseConfig';

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthenticationProvider = ({ children }) => {
  const naviagte = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailPasswordSignIn = async (email, password) => {
    try {
      setError('');
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      naviagte('/');
    } catch {
      setError('Failed To SignIn');
    }
  };
  const logOut = async () => {
    try {
      setError('');
      setLoading(true);
      await signOut(auth);
      setCurrentUser(null);
      naviagte('/login');
    } catch {
      setError('Failed To SignOut');
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userDataRef = collection(db, 'teachers');
        const q = query(userDataRef, where('email', '==', user.email));
        const snapshot = await getDocs(q);
        setUserData(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[0]
        );

        setCurrentUser(user);
      } else {
        setUserData(null);
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    emailPasswordSignIn,
    logOut,
    error,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthenticationProvider;
