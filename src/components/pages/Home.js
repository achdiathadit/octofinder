import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';
import Alert from '../layout/Alert';

const Home = () => (
  <Fragment>
    {' '}
    <ul className='ul-flex'>
      <li>
        {' '}
        <Search />
      </li>
      <li>
        <Alert />
      </li>
    </ul>
    <Users />
  </Fragment>
);

export default Home;
