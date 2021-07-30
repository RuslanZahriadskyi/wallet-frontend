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
import '../../Home/HomeDesktop/HomeDesktop.scss';
import '../../Home/HomeMobile/HomeMobile.scss';

const HomeDesktop = lazy(() =>
  import('../../Home/HomeDesktop' /* webpackChunkName: "home-page" */),
);

const Statistics = lazy(() =>
  import('../../Statistics' /* webpackChunkName: "statistics-page" */),
);

const DesktopMainContainer = () => {
  return (
    <div className="dashboard-container">
      <div className="background-ellipse">
        <div className="bg_filter">
          <div className="dashboard-top-container">
            <div className="home-wrap-desktop">
              <ul>
                <li className="icons-list">
                  <NavLink
                    to="/dashboard/home"
                    className="link"
                    activeClassName="active-link"
                  >
                    <HomeIcon fontSize="small" />
                    <span className="icons-title">Main</span>
                  </NavLink>
                </li>

                <li className="icons-list">
                  <NavLink
                    to="/dashboard/statistics"
                    className="link"
                    activeClassName="active-link"
                  >
                    <TimelineIcon fontSize="small" />
                    <span className="icons-title">Statistics</span>
                  </NavLink>
                </li>
              </ul>

              <Ballance />
            </div>
            <Currency />
          </div>

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/dashboard/home" component={HomeDesktop} />

              <Route path="/dashboard/statistics" component={Statistics} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DesktopMainContainer;
