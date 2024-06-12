// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { refreshUser } from '../redux/auth/operations';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { RestrictedRoute } from '../route/RestrictedRoute';
// import { PrivateRoute } from '../route/PrivateRoute';
// import TrainingPage from 'pages/TrainingPage';

// const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
// const Layout = lazy(() => import('../components/Layout/Layout'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const DictionaryPage = lazy(() => import('../pages/DictionaryPage'));
// const RecommendPage = lazy(() => import('../pages/RecommendPage'));
// const trainingPage = lazy(() => import('../pages/TrainingPage'));

// export const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return (
//     <>
//       <Routes>
//         <Route
//           path="/register"
//           element={
//             <RestrictedRoute
//               redirectTo="/dictionary"
//               component={<RegistrationPage />}
//             />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute
//               redirectTo="/dictionary"
//               component={<LoginPage />}
//             />
//           }
//         />
//         <Route path="/" element={<Layout />}>
//           <Route path="/dictionary" element={<PrivateRoute redirectTo='/login' component={<DictionaryPage />}/>} />
//           <Route path="/recommend" element={<PrivateRoute redirectTo='/login' component={<RecommendPage/>}/>} />
//           <Route path="/training" element={<PrivateRoute redirectTo='/login' component={<TrainingPage/>}/>} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RestrictedRoute } from '../route/RestrictedRoute';
import { PrivateRoute } from '../route/PrivateRoute';

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DictionaryPage = lazy(() => import('../pages/DictionaryPage'));
const RecommendPage = lazy(() => import('../pages/RecommendPage'));
const TrainingPage = lazy(() => import('../pages/TrainingPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/dictionary"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/dictionary"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<DictionaryPage />}
              />
            }
          />
          <Route
            path="/recommend"
            element={
              <PrivateRoute redirectTo="/login" component={<RecommendPage />} />
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute redirectTo="/login" component={<TrainingPage />} />
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
