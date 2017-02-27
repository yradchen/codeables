import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { listVisible: false };
    this.toggleClass = this.toggleClass.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.drafts = this.drafts.bind(this);
  }

  logOutUser(e) {
    e.preventDefault();
    this.props.logout();
    this.toggleClass();
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
  drafts(e) {
    e.preventDefault();
    let url = '/mycodeables/drafts'
    this.toggleClass();
    hashHistory.push(url);
  }
//
// http://localhost:3000/#/mycodeables/
  dropDown() {
  if (this.state.listVisible) {
    return (
      <ul className="nav-drop-down">
        <li className="top-drop">
            <futurecontent><p></p></futurecontent>
            <button className="logout"
                    onClick={this.logOutUser}>Log Out</button>
        </li>
        <li className='drop-divider'>
        </li>
        <li className ='drafts-li'>
          <button onClick={this.drafts} className="drafts-link" >
          <i id="folder" className="material-icons">
        folder</i><p className='drafts-text'>
          Draft Codeables</p></button>
        </li>
        <li className="bottom-drop" onClick={this.toggleClass}>
            <Link to="/editcodeable/new" className='new-project'>
            New Codeable »
            </Link>
        </li>
      </ul>
    );
    } else {
      return <p></p>;
    }
  }

  toggleClass(e) {
    if (e !== undefined) {
      e.preventDefault();
    };
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
