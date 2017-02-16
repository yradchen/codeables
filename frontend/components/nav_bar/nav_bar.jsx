import React from 'react';
import UserFormContainer from './user_form_container';
// import SessionFormContainer from '../session_form/session_form_container';

const NavBar = () => {
  return (
    <header className="navheader">
      <div className="navTop">
        <p>Let's code
        <input type="text"
          placeholder="future search bar"
          className="search"/>
        </p>
        <UserFormContainer />
      </div>
  </header>
  );
};

export default NavBar;
