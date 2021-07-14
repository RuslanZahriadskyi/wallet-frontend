import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from './components/Spinner';

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const RegistrationPage = lazy(() =>
  import(
    './views/RegistrationPage/RegistrationPage.jsx' /* webpackChunkName: "register-page" */
  ),
);
const LoginPage = lazy(() =>
  import(
    './views/LoginPage/LoginPage.jsx' /* webpackChunkName: "login-page" */
  ),
);

const ErrorPage = lazy(() =>
  import('./views/ErrorPage' /* webpackChunkName: "error-page" */),
);

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {/* <Switch> */}
        <Route>
          <LoginPage />
        </Route>
        <Route path="/dashboard" exact>
          <DashboardPage />
        </Route>
        <Route>
          <RegistrationPage />
        </Route>
        {/* 
          <Route>
            <ErrorPage />
          </Route> */}
        {/* </Switch> */}
      </Suspense>
    </>
  );
}

export default App;
