// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import { AuthProvider } from 'oidc-react';
import NxWelcome from './nx-welcome';

import { Authentication } from "@cpp-platfrom-ui/authentication";

export function App() {
  return (
    <div>
      {/* <NxWelcome title="demo" /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NxWelcome title="demo" />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>

        <AuthProvider {...oidcConfig}>
        <RouterProvider router={router} />
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
