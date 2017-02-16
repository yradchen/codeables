import React from 'react';
import { Link } from 'react-router';

const sessionLinks = (login) => {
  let guest = { username: "Guest", password: "wizardhat1"}
  return (
    <nav className='login-signup'>
      <Link to="/account/login">Login</Link>
      <p> | </p>
      <Link to="/account/register">Sign up</Link>
      <p> | </p>
      <button className="nav-guest"
        onClick={() => login(guest)}>
        Guest
        </button>
    </nav>
)};

const loggedin = (currentUser, logout) => {
  return (
    <nav>
      <p>{currentUser.username}</p>
      <button onClick={() => logout()}>Log Out</button>
    </nav>
  )
}


const UserForm = ({ currentUser, logout, login }) => {
  return (
    currentUser ? loggedin(currentUser, logout) : sessionLinks(login)
  )
};

export default UserForm;

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
