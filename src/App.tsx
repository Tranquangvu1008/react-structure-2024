import React from 'react';
import { Routes, Route } from "react-router-dom";

// configs
import { PATH } from "./configs/path";

// routes
import AuthRoutes from "./routes/auth-routes";
import GuestRoutes from "./routes/guest-routes";

// layouts
import { MainLayout } from "./layouts/main-layout";
import FullLoading from './components/full-loading';

// component 
const Dashboard = React.lazy(() => import('./pages/dashboard').then(module => ({ default: module.Dashboard })));
const Login = React.lazy(() => import('./pages/login').then(module => ({ default: module.Login })));
const Register = React.lazy(() => import('./pages/register').then(module => ({ default: module.Register })));
const Order = React.lazy(() => import('./pages/order').then(module => ({ default: module.Order })));
const Customer = React.lazy(() => import('./pages/customer').then(module => ({ default: module.Customer })));

const routesConfig = [
  {
    path: PATH.ROOT,
    element: Dashboard,
    guard: AuthRoutes,
    layout: MainLayout
  },
  {
    path: PATH.ORDER,
    element: Order,
    guard: AuthRoutes,
    layout: MainLayout
  },
  {
    path: PATH.CUSTOMER,
    element: Customer,
    guard: AuthRoutes,
    layout: MainLayout
  },
  {
    path: PATH.LOGIN,
    element: Login,
    guard: GuestRoutes,
  },
  {
    path: PATH.REGISTER,
    element: Register,
    guard: GuestRoutes
  }
]

function App() {
  return (
   <>
      <React.Suspense fallback={<div>loading ...</div>}>
        <Routes>
          {routesConfig.map(route => {
            const Guard = route.guard || React.Fragment;
            const Layout = route.layout || React.Fragment;
            const Component = route.element;

            return (
              <Route key={route.path} path={route.path} element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              } /> 
            )
          })}
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </React.Suspense>

      <FullLoading />
   </>
  )
}

export default App
