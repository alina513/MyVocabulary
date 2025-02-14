import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from '../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RestrictedRoute } from '../route/RestrictedRoute';
import { PrivateRoute } from '../route/PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { Loader } from './Loader';

const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const Layout = lazy(() => import('../components/Layout/Layout'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DictionaryPage = lazy(() => import('../pages/DictionaryPage'));
const RecommendPage = lazy(() => import('../pages/RecommendPage'));
const TrainingPage = lazy(() => import('../pages/TrainingPage'));

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<Loader/>) :(
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
  );
};
