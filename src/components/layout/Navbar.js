import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ logo, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'>
        <h1>
          <i className={logo} />
          <span> </span>
          {title}
        </h1>
      </Link>
      <ul className='ul-flex'>
        <li>
          <Link to='/'>
            <i className='bx bxs-home lead' />
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <i className='bx bxs-help-circle lead' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Octofinder',
  logo: 'bx bxl-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Navbar;
