import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';

import Ballance from '../../Ballance';

import './HomeDesktop.scss';

const HomeDesktop = () => {
  return (
    <>
      <div className="home-wrap-desktop">
        <ul className="list-home-links">
          <li className="icons-list">
            <NavLink
              to="/dashboard"
              className="link"
              activeClassName="active-link"
            >
              <HomeIcon fontSize="small" />

              <span className="icons-title">Главная</span>
            </NavLink>
          </li>

          <li className="icons-list">
            <NavLink
              to="/statistics"
              className="link"
              activeClassName="active-link"
            >
              <TimelineIcon fontSize="small" />

              <span className="icons-title">Статистика</span>
            </NavLink>
          </li>
        </ul>

        <Ballance />
      </div>
    </>
  );
};

export default HomeDesktop;
