import { useAuth } from 'oidc-react';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { ORIGINAL_PATH, TESTBANK_COOKIE } from '../constants';

const LogoutContainer: React.FC = () => {
  const { signOut } = useAuth();
  useEffect(() => {
    const signOutFn = async () => {
      await signOut();
      const cookies = new Cookies();
      cookies.remove(TESTBANK_COOKIE);
      const path: string | null = localStorage.getItem(ORIGINAL_PATH);
      localStorage.removeItem(ORIGINAL_PATH);
      window.location.href = path ?? '/';
    };
    signOutFn();
  }, []);
  return null;
};

export default LogoutContainer;
