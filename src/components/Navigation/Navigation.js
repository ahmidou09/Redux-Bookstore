import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-List">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
