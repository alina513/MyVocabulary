import { lazy } from "react";
import { Route, Routes } from "react-router-dom";



const RegistrationPage = lazy(()=> import('../pages/RegistrationPage'));
const Layout = lazy(() => import('../components/Layout'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={ <Layout/>}/>
      <Route path="/register" element={ <RegistrationPage/>}/>
      <Route path="/login" element={ <LoginPage/>}/>
    </Routes>

    </>
  );
};
