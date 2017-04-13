import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class UserForm extends React.Component {
  constructor (props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.drafts = this.drafts.bind(this);
  }

  logOutUser(e) {
    e.preventDefault();
    this.props.logout();

    if (this.props.location.pathname !== "/") {
      hashHistory.push("/");
    }
  }

  sessionLinks () {
    const guest = { username: "Guest", password: "wizardhat1"};
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
    const url = '/mycodeables/drafts';
    hashHistory.push(url);
  }

  dropDown() {
    if (this.props.listVisibility) {
      return (
        <ul className="nav-drop-down">
          <li className="top-drop">
            <button className="logout"
              onClick={this.logOutUser}>Log Out
            </button>
          </li>
        <li className='drop-divider'>
        </li>
        <li className ='drafts-li'>
          <button onClick={this.drafts} className="drafts-link" >
          <i id="folder" className="material-icons">
        folder</i><p className='drafts-text'>
          {this.props.currentUser.username}'s Current Codeables</p></button>
        </li>
        <li className="bottom-drop">
            <Link to="/editcodeable/new" className='new-project'>
            New Codeable »
            </Link>
        </li>
      </ul>
    );
    }
  }

  toggleClass(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.props.listVisibility) {
      this.props.setVisibility(true);
    }
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


export default withRouter(UserForm);
