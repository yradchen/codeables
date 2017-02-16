import React from 'react';
import UserFormContainer from './user_form_container';
// import SessionFormContainer from '../session_form/session_form_container';

const NavBar = () => {
  return (
    <header className="nav-header">
      <div className="nav-top">
        <section className="nav-links">
          <img src={images.logo} alt="logo" className="nav-logo"/>
          <label className="lets-code">let's code
          <div className="search-container">
          <input type="text"
            placeholder="future search bar"
            className="searchbar"/>
            <p className="material-icons">search</p>
          </div>
          </label>
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
