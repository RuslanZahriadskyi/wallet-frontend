import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import './HomeMobile.scss';

const HomeMobile = () => {
  return (
    <>
      <div>
        <ul className="icons">
          <li className="icons-item">
            <NavLink
              to="/dashboard"
              className="link"
              activeClassName="active-link"
            >
              <HomeIcon />
            </NavLink>
          </li>
          <li className="icons-item">
            <NavLink
              to="/statistics"
              className="link"
              activeClassName="active-link"
            >
              <TimelineIcon />
            </NavLink>
          </li>

          <li className="icons-item">
            <NavLink
              to="/currency"
              className="link"
              activeClassName="active-link"
            >
              <MonetizationOnOutlinedIcon />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeMobile;
