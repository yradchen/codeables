import React from 'react';
import { Link } from 'react-router';

const sessionLinks = () => {
  return (
    <nav className='login-signup'>
      <Link to="/account/login">Login</Link>
      <Link to="/account/register">Sign up</Link>
    </nav>
)};

const loggedin = (currentUser, logout) => {
  return (
    <nav>
      <p>{currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </nav>
  )
}

const UserForm = ({ currentUser, logout }) => {
  return currentUser ? loggedin(currentUser, logout) : sessionLinks()
};

export default UserForm;

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
