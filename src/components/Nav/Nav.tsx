import './Nav.css';

import React from 'react';

import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Nav: React.FC = () => {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/new">NEW</Link>
        <Link to="/jewellery">JEWELLERY</Link>
        <Link to="/brand">BRAND</Link>
        <Link to="/search">
          <FontAwesomeIcon
            className="fas fa-solid fa-magnifying-glass"
            icon="magnifying-glass"
          />
          ___________
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
