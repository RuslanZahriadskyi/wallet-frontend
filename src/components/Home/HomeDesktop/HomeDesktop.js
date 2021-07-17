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
        <ul>
          <li className="icons-list">
            <NavLink
              to="/dashboard"
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
              to="/statistics"
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
    </>
  );
};

export default HomeDesktop;
