import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ logo, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={logo} />
        <span> </span>
        {title}
      </h1>
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
