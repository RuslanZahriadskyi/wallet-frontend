import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from './components/Spinner';

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
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
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route>
            <LoginPage />
          </Route>
          <Route path="/dashboard" exact>
            <DashboardPage />
          </Route>
          <Route>
            <RegistrationPage />
          </Route>

          <Route>
            <ErrorPage />
          </Route>

          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/currency" component={Currency} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
