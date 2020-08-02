import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search user'
            value={this.state.text}
            onChange={this.onChange}
            style={{ width: '200px', borderRadius: '8px' }}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
            style={{ width: '200px', borderRadius: '8px' }}
          />
        </form>
      </div>
    );
  }
}

export default Search;
