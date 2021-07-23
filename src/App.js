import { Suspense, lazy, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Spinner from './components/Spinner';
import PrivateRouter from './components/PrivateRouter';
import PublicRouter from './components/PublicRouter';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';

import Notifications from './components/Notifications/Notifications.jsx';

const DashboardPage = lazy(() =>
  import('./views/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);
const RegistrationPage = lazy(() =>
  import('./views/RegistrationPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage.jsx' /* webpackChunkName: "login-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Notifications />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PublicRouter path="/login" restricted exact>
            <LoginPage />
          </PublicRouter>
          <PrivateRouter path="/dashboard/:title" exact>
            <DashboardPage />
          </PrivateRouter>
          <PublicRouter path="/register" restricted exact>
            <RegistrationPage />
          </PublicRouter>
          <Redirect from="/" to="/login" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
