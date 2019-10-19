import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => (
  <header>
    <div className={style.headerPage}>
      <ul className={style.siteNavigation}>
        <li>
          <NavLink
            to="/"
            exact
            className={style.linkNav}
            activeClassName={style.activeLinkNav}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pets"
            className={style.linkNav}
            activeClassName={style.activeLinkNav}
          >
            Pets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={style.linkNav}
            activeClassName={style.activeLinkNav}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
