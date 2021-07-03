import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "contacts-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);
const CurrencyPage = lazy(() =>
  import('./views/CurrencyPage' /* webpackChunkName: "login-page" */),
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
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route>
            <LoginPage />
          </Route>
          <Route>
            <CurrencyPage />
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
