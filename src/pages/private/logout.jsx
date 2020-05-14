import { useEffect } from 'react';
import Auth from '../../services';

const LogOut = () => {
  useEffect(() => {
    Auth.Logout();
    window.location = '/';
  }, []);
  return null;
};

export default LogOut;
