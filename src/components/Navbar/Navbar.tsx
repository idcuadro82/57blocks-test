import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'src/context';
import { ROUTES } from 'src/routes';

import './Navbar.scss';

const AppNavbar: FC = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <nav className="app-navbar">
      <ul className="app-navbar-list">
        <li className="app-navbar-link home">
          <NavLink to={ROUTES.home}>
            <i className="fas fa-home" />
            Home
          </NavLink>
        </li>
        <li className="app-navbar-link details">
          <NavLink to={ROUTES.details}>
            <i className="fas fa-address-card" />
            Details
          </NavLink>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default AppNavbar;
