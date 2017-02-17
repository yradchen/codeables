import React from 'react';
import { Link } from 'react-router';

class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { listVisible: false };
  }

  sessionLinks () {
    let guest = { username: "Guest", password: "wizardhat1"};
    return (
      <nav className='login-signup'>
        <Link to="/account/login">Login</Link>
        <p> | </p>
        <Link to="/account/register">Sign up</Link>
        <p> | </p>
        <button className="nav-guest"
          onClick={() => this.props.login(guest)}>
          Guest
          </button>
      </nav>
    );
  }

  loggedin () {

    return (
      <nav className="nav-drop-down-button">
        <button onClick={() => this.toggleClass()}>You</button>
        {this.dropDown()}
      </nav>
    );
  }

  dropDown() {
  if (this.state.listVisible) {
    return (
      <ul className="nav-drop-down">
        <li><button className="nav-guest"
          onClick={() => this.props.logout()}>Log Out</button>
        </li>
      </ul>
    );
    } else {
      return <p></p>;
    }
  }

  toggleClass() {
    this.setState({ listVisible : !this.state.listVisible});
  }

  render() {
    let visual;
    if (this.props.currentUser) {
      visual = this.loggedin();
    } else {
      visual = this.sessionLinks();
    }
    return (
      <div>{visual}</div>
    );
  }

}


export default UserForm;

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );
