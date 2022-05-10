import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser, logOut, pending } = useAuth();
  return !pending && currentUser
    ? children
    : logOut() && <Navigate to='/login' />;
};
