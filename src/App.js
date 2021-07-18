import { Suspense, lazy, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import Spinner from './components/Spinner';
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage.jsx' /* webpackChunkName: "login-page" */),
);

const ErrorPage = lazy(() =>
  import('./views/ErrorPage' /* webpackChunkName: "error-page" */),
);

const Statistics = lazy(() =>
  import(
    './components/Statisctics/Statistics' /* webpackChunkName: "statistics-page" */
  ),
);

const Currency = lazy(() =>
  import(
    './components/Currency/CurrencyMobile' /* webpackChunkName: "currency-page" */
  ),
);
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRouter path="/login" restricted exact>
            <LoginPage />
          </PublicRouter>
          <PrivateRouter path="/dashboard" exact>
            <DashboardPage />
          </PrivateRouter>
          <PublicRouter path="/register" restricted exact>
            <RegistrationPage />
          </PublicRouter>
          <PrivateRouter path="/statistics" exact>
            <Statistics />
          </PrivateRouter>
          <PrivateRouter path="/currency" exact>
            <Currency />
          </PrivateRouter>

          {/* <ErrorPage /> */}
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
