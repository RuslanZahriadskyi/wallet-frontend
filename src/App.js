import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "contacts-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <h1>Loading....</h1>
          </div>
        }
      >
        <Switch>
          <Route>
            <LoginPage />
          </Route>
          <Route>
            <DashboardPage />
          </Route>
          <Route>
            <RegistrationPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
