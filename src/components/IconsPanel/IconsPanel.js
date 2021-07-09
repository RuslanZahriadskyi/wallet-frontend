import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';

import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import './IconsPanel.scss';

const IconsPanel = () => {
  return (
    <>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
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
            )}

            {matches.medium && (
              <ul className="icons">
                <li className="icons-item">
                  <NavLink
                    to="/dashboard"
                    className="link"
                    activeClassName="active-link"
                  >
                    <HomeIcon />
                    {/* <h2 className="nav-title">Главная</h2> */}
                  </NavLink>
                </li>
                <li className="icons-item">
                  <NavLink
                    exact
                    to="/statistics"
                    className="link"
                    activeClassName="active-link"
                  >
                    <TimelineIcon />
                    {/* <h2 className="nav-title">Статистика</h2> */}
                  </NavLink>
                </li>
              </ul>
            )}

            {matches.large && <p>I am large!</p>}
          </Fragment>
        )}
      </Media>
    </>
  );
};

export default IconsPanel;
