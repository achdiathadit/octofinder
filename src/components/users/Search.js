import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something');
    } else {
      githubContext.searchUsers(text);
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
          {githubContext.users.length > 0 && (
            <button
              className='btn btn-mild btn-block'
              onClick={githubContext.clearUsers}
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
  setAlert: PropTypes.func.isRequired,
};

export default Search;
