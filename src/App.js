import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);

//Components. Dynamic import. Chunkование. Lazy
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
      <Suspense
        fallback={
          <div>
            <h1>Loading....</h1>
          </div>
        }
      >
        {/* <Switch> */}

        <Route exact path="/dashboard" component={DashboardPage}></Route>

        <Route exact path="/statistics" component={Statistics} />

        <Route exact path="/currency" component={Currency} />

        <Route>
          <RegistrationPage />
        </Route>

        <Route>
          <LoginPage />
        </Route>

        {/* </Switch> */}
      </Suspense>
    </>
  );
}

export default App;
