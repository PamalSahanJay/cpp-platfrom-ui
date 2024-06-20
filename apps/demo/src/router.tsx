import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';
//   import ProductListContainer from './containers/ProductListContainer';
//   import ProductDetailsContainer from './containers/ProductDetailsContainer';
import PageNotFound from './containers/PageNotFound';
import Hello from './components/Hello/Hello';
import LogoutContainer from './containers/LogoutContainer';
//   import LogoutContainer from './containers/LogoutContainer';
  import RootContainer from './containers/RootContainer';
import { Home } from './components/home';
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path={'/'}
        errorElement={<PageNotFound />}
        element={<RootContainer />}
      >
        <Route path={'signin-oidc'} element={null} />
        <Route path={'refreshLogin'} element={null} />
        <Route path={'logout'} element={<LogoutContainer />} />
  
        <Route path={'/'} element={<Home/>} />
        <Route path={'/helo'} element={<Hello/>} />
  
        {/* <Route path="products">
          <Route path=":productId" element={<Hello/>} />
        </Route> */}
      </Route>,
    ),
  );
  
  export default router;