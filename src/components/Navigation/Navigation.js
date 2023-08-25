import './Navigation.css';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="header">
    <div className="container">
      <nav className="navigation">
        <div className="logo">
          <span>Bookstore&nbsp;CMS</span>
        </div>
        <ul className="nav-List">
          <li className="nav-item">
            <Link to="/">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <div className="user">
          <button className="btn user-button" type="button">
            <ImUser />
          </button>
        </div>
      </nav>
    </div>
  </header>
);

export default Navigation;
