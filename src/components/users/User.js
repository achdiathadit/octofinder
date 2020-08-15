import React, { Fragment, Component } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      company,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/'>
          <button
            className='btn btn-mild'
            style={{ width: '190px', borderRadius: '8px' }}
          >
            <i class='bx bxs-left-arrow-alt'></i> Back to search
          </button>
        </Link>

        <div className='card grid-2' style={{ borderRadius: '15px' }}>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: '150px' }}
            />
            <h2>{name}</h2>
            <h4>({login})</h4>
            {location ? <p>in {location}</p> : <p>on Earth</p>}
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Who?</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            {hireable ? (
              <h4 className='mt'>
                <i className='bx bxs-check-circle text-primary' /> Yes, I'm
                available for hire.
              </h4>
            ) : (
              <h4 className='mt'>
                <i className='bx bxs-x-circle text-danger' /> I'm not looking
                for a job.
              </h4>
            )}
            <a
              href={html_url}
              target='blank'
              className='btn btn-dark my-1'
              style={{ borderRadius: '15px' }}
            >
              <i class='bx bxl-github'></i> My GitHub
            </a>
            <ul className='ul-block'>
              <li>
                {company && (
                  <Fragment>
                    <strong>
                      <i class='bx bxs-buildings'></i> Company{' '}
                    </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <p className='mr-2'>
                      <strong>
                        <i class='bx bx-link'></i> Website{' '}
                      </strong>
                      <a href={blog} target='blank'>
                        {blog}
                      </a>
                    </p>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center' style={{ borderRadius: '15px' }}>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-primary'>Following: {following}</div>
          <div className='badge badge-mild'>Public Repos: {public_repos}</div>
          <div className='badge badge-mild'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
