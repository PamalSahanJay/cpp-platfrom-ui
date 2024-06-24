import { useAuth } from 'oidc-react';
import Cookies from 'universal-cookie';
import { LoadingIndicator } from './components/LoadingIndicator';
import { TESTBANK_COOKIE, TESTBANK_TOKEN_KEY } from './constants';
import env from './env';

export function withAuth<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  const WrappedComponent: React.ComponentType<P> = ( hocProps) => {
    const { userData, isLoading } = useAuth();
    if (isLoading) {
      return <LoadingIndicator />;
    }
    const cookies = new Cookies();
    if (userData?.expired || !userData?.access_token) {
      localStorage.removeItem(TESTBANK_TOKEN_KEY);
      cookies.remove(TESTBANK_COOKIE);
      return null;
    }
    localStorage.setItem(TESTBANK_TOKEN_KEY, userData?.access_token);
    cookies.set(TESTBANK_COOKIE, userData?.access_token, {
      path: '/',
      domain: 'wiley.host',
      sameSite: 'none',
      secure: true,
      httpOnly: false,
    });
    return userData?.expired ? null : <Component {...hocProps} />;
  };

  WrappedComponent.displayName = `withAuth(${Component.displayName})`;

  return WrappedComponent;
}
