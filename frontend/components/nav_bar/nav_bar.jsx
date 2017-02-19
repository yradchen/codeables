import React from 'react';
import UserFormContainer from './user_form_container';
import { Link } from 'react-router';


const NavBar = ({ flex }) => {
  return (
    <header className="nav-header">
      <div className={flex} >
        <section className="nav-links">
          <Link to="/" className="logo-link">
            <img src={images.logo} alt="logo" className="nav-logo"/>
          </Link>
          <div className="search-container">
            <label className="lets-code">let's code
              <input type="text"
                placeholder="future search bar"
                className="searchbar"/>
              <p className="material-icons">search</p>
          </label>
          </div>
        </section>
        <section className="nav-sessions">
          <UserFormContainer />
        </section>
      </div>
      <div className="nav-bottom">
      </div>
  </header>
  );
};

export default NavBar;
