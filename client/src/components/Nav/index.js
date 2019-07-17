import React from 'react';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <a className="navbar-brand" href='/'>
        Google Books Search
      </a>
      <div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='/'><button type='button' className='btn btn-success'>Search Books</button></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/saved'><button type='button' className='btn btn-danger'>Saved Books</button></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;