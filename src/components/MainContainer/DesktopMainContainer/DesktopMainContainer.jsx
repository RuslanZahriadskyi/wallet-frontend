import React, { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// // Icon Material-ui
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';

// Components
import Ballance from '../../Ballance';
import Currency from '../../Currency/Currency';
import Loading from '../../Spinner';

// Styles
import './DesktopMainContainer.scss';

const HomeDesktop = lazy(() =>
  import('../../Home/HomeDesktop' /* webpackChunkName: "home-page" */),
);

const Statistics = lazy(() =>
  import('../../Statistics' /* webpackChunkName: "statistics-page" */),
);

// const Currency = lazy(() =>
//   import(
//     '../../Currency' /*
//   webpackChunkName: "currency-page" */
//   ),
// );

const DesktopMainContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-top-container">
        <div className="home-wrap-desktop">
          <ul>
            <li className="icons-list">
              <NavLink
                to="/dashboard/home"
                className="link"
                activeClassName="active-link"
              >
                <span className="icons-ui">
                  <HomeIcon />
                </span>

                <span className="icons-title">Главная</span>
              </NavLink>
            </li>

            <li className="icons-list">
              <NavLink
                to="/dashboard/statistics"
                className="link"
                activeClassName="active-link"
              >
                <span className="icons-ui">
                  <TimelineIcon />
                </span>

                <span className="icons-title">Статистика</span>
              </NavLink>
            </li>
          </ul>

          {/* Ballance */}
          <Ballance />
        </div>
        <Currency />
      </div>

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/dashboard/home" component={HomeDesktop} />

          <Route path="/dashboard/statistics" component={Statistics} />

          {/* <Route path="/dashboard/currency" component={Currency} /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default DesktopMainContainer;
