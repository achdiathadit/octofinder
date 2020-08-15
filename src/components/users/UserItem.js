import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center' style={{ borderRadius: '15px' }}>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className='btn btn-primary btn-sm my-1'
          style={{ borderRadius: '15px' }}
        >
          Go to profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = { user: PropTypes.object.isRequired };

export default UserItem;
