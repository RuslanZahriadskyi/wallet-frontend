import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';

import Ballance from '../../Ballance';

import './HomeDesktop.scss';

const HomeDesktop = () => {
  return (
    <>
      <div className="home-wrap">
        <ul className="icons">
          <li className="icons-list">
            <NavLink
              to="/dashboard"
              className="link"
              activeClassName="active-link"
            >
              <HomeIcon />
              <span className="icons-title">Главная</span>
            </NavLink>
          </li>

          <li className="icons-list">
            <NavLink
              to="/statistics"
              className="link"
              activeClassName="active-link"
            >
              <TimelineIcon className="icons-ui" />
              <span className="icons-title">Статистика</span>
            </NavLink>
          </li>
        </ul>

        {/* Ballance */}
        <Ballance />
      </div>
    </>
  );
};

export default HomeDesktop;
