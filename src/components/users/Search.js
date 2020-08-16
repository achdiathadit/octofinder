import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <ul className='ul-flex'>
        <li>
          <form onSubmit={onSubmit} className='form'>
            <ul className='ul-flex'>
              <li>
                <input
                  type='text'
                  name='text'
                  placeholder='Search user by keywords'
                  value={text}
                  onChange={onChange}
                  style={{ width: '240px', borderRadius: '8px' }}
                />
              </li>
              <li>
                <input
                  type='submit'
                  value='Search'
                  className='btn btn-dark btn-block btn-bold'
                  style={{ width: '100px', borderRadius: '8px' }}
                />
              </li>
            </ul>
          </form>
        </li>
        <li>
          {showClear && (
            <button
              className='btn btn-mild btn-block'
              onClick={clearUsers}
              style={{ width: '140px', borderRadius: '8px' }}
            >
              Clear result
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
