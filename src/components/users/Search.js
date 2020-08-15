import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <ul className='ul-flex'>
          <li>
            <form onSubmit={this.onSubmit} className='form'>
              <ul className='ul-flex'>
                <li>
                  <input
                    type='text'
                    name='text'
                    placeholder='Search user by keywords'
                    value={this.state.text}
                    onChange={this.onChange}
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
            {this.props.showClear && (
              <button
                className='btn btn-mild btn-block'
                onClick={this.props.clearUsers}
                style={{ width: '140px', borderRadius: '8px' }}
              >
                Clear result
              </button>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default Search;
