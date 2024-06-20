// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes, RouterProvider } from "react-router-dom"
import { AuthProvider } from 'oidc-react';
import NxWelcome from './nx-welcome';
import env from '../env';
import router from '../router';
import { ORIGINAL_PATH } from '../constants';
import { Authentication } from "@cpp-platfrom-ui/authentication";

import '../main.global.css';

export function App() {

  const oidcConfig = {
    onBeforeSignIn: () => {
      console.log("pamal")
      if (
        location.pathname !== env.OIDC_REFRESH_URI &&
        location.pathname !== env.OIDC_REDIRECT_URI
      ) {
        localStorage.setItem(ORIGINAL_PATH, location.href);
      }
      console.log("path name  ",location.pathname)
      console.log("location href ",location.href)
      return location.href;
    },
    onSignIn: () => {
      console.log("sign on")
      const path: any = localStorage.getItem(ORIGINAL_PATH);
      window.location.replace(path);
    },
    automaticSilentRenew: true,
    authority: env.OIDC_AUTHORITY,
    clientId: env.OIDC_CLIENT_ID,
    clientSecret: env.OIDC_CLIENT_SECRET,
    redirectUri: `${window.location.origin}${env.OIDC_REDIRECT_URI}`,
    responseType: 'code',
    scopes: 'openid',
  };

  return (
    <div>
      {/* <NxWelcome title="demo" /> */}
      {/* <BrowserRouter> */}
        {/* <Routes>
          <Route path="/" element={<NxWelcome title="demo" />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes> */}
        <AuthProvider {...oidcConfig}>
          <RouterProvider router={router} />
        </AuthProvider>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
