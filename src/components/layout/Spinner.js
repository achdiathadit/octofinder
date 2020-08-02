import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading..'
      style={{
        width: '160px',
        display: 'block',
        margin: '70px auto auto auto',
      }}
    />
  </Fragment>
);

export default Spinner;
