import React, { Suspense, lazy } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Loading from '../../Spinner';

import './HomeMobile.scss';

const Statistics = lazy(() =>
  import('../../Statistics' /* webpackChunkName: "statistics-page" */),
);

const Currency = lazy(() =>
  import(
    '../../Currency' /*
  webpackChunkName: "currency-page" */
  ),
);

const HomeMobile = () => {
  return (
    <>
      <div>
        <ul className="icons">
          <li className="icons-item">
            <NavLink
              to="/dashboard/home"
              className="link"
              activeClassName="active-link"
            >
              <HomeIcon />
            </NavLink>
          </li>
          <li className="icons-item">
            <NavLink
              to="/dashboard/statistics"
              className="link"
              activeClassName="active-link"
            >
              <TimelineIcon />
            </NavLink>
          </li>

          <li className="icons-item">
            <NavLink
              to="/dashboard/currency"
              className="link"
              activeClassName="active-link"
            >
              <MonetizationOnOutlinedIcon />
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/dashboard/statistics" component={Statistics} />
          <Route path="/dashboard/currency" component={Currency} />
        </Switch>
      </Suspense>
    </>
  );
};

export default HomeMobile;
