import React, { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// Icon Material-ui
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

// Components
import Loading from '../../Spinner';

// Styles
import '../../Home/HomeDesktop/HomeDesktop.scss';
import '../../Home/HomeMobile/HomeMobile.scss';

const HomeMobile = lazy(() =>
  import('../../Home/HomeMobile' /* webpackChunkName: "home-page" */),
);

const Statistics = lazy(() =>
  import('../../Statistics' /* webpackChunkName: "statistics-page" */),
);

const Currency = lazy(() =>
  import(
    '../../Currency' /*
  webpackChunkName: "currency-page" */
  ),
);

const MobileMainContainer = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="bg_filter">
          <ul className="icons">
            <li className="icons-item">
              <NavLink
                to="/dashboard/home"
                className="link"
                activeClassName="active-link"
              >
                <HomeIcon fontSize="large" />
              </NavLink>
            </li>
            <li className="icons-item">
              <NavLink
                to="/dashboard/statistics"
                className="link"
                activeClassName="active-link"
              >
                <TimelineIcon fontSize="large" />
              </NavLink>
            </li>

            <li className="icons-item">
              <NavLink
                to="/dashboard/currency"
                className="link"
                activeClassName="active-link"
              >
                <MonetizationOnOutlinedIcon fontSize="large" />
              </NavLink>
            </li>
          </ul>

          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/dashboard/home" component={HomeMobile} />

              <Route path="/dashboard/statistics" component={Statistics} />

              <Route path="/dashboard/currency" component={Currency} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MobileMainContainer;
