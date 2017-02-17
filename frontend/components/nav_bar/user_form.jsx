import React from 'react';
import { Link } from 'react-router';

class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { listVisible: false };
    this.toggleClass = this.toggleClass.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  logOutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.setState({ listVisible : !this.state.listVisible});
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
        <button onClick={this.toggleClass}
          className="you">You
          <i className="material-icons arrow-down">arrow_drop_down</i>
        </button>

        {this.dropDown()}
      </nav>
    );
  }



  dropDown() {
  if (this.state.listVisible) {
    return (
      <ul className="nav-drop-down">
        <div className="top-drop">
          <futurecontent><p></p></futurecontent>
          <li><button className="logout"
            onClick={this.logOutUser}>Log Out</button>
          </li>
        </div>
      </ul>
    );
    } else {
      return <p></p>;
    }
  }

  toggleClass(e) {
    e.preventDefault();
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
