import { lazy } from "react";
import { Route, Routes } from "react-router-dom";



const RegistrationPage = lazy(()=> import('../pages/RegistrationPage'));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <RegistrationPage/>}/>
    </Routes>

    </>
  );
};
