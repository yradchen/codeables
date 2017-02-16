import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInGuest = this.signInGuest.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
        [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {

    e.preventDefault();
    this.props.login(this.state);
  }

  renderErrors() {
    return this.props.errors.map( (error, i) => {
      return (
        <ul className="errors" key={`error-${i}`}>
          <li>
            <h3>{error}</h3>
          </li>
        </ul>
      );
    });
  }

  signInGuest(e) {
    let guest = { username: "Guest", password: "wizardhat1"};
    e.preventDefault();
    this.props.login(guest);
    this.redirectIfLoggedIn();
  }

  render() {
    let guest = { username: "Guest", password: "wizardhat1"};
    return (
      <div className="session-outer-container">
        <div className="session-inner-container">
          <h1 className="session-header">login</h1>
          <div className="session-background-container">
            <form onSubmit={this.handleSubmit} className='session-form-box'>
              <img src={images.flex_box} alt="flex_box" className="flex_box"/>
              <div className="session-input-container">
                { this.renderErrors() }
                <input type="text"
							         value={this.state.username}
                       placeholder="Username"
							         onChange={this.update("username")}
				               className="login-input"
                       />
						    <input type="password"
							         value={this.state.password}
                       placeholder="Password"
								       onChange={this.update("password")}
		                   className="login-input" />
                <input type="submit"
                       value="Login"
                       id="submit-session-button"  />
                <button onClick={this.signInGuest}
                       id="submit-session-button">
                       Guest Login</button>
              </div>
                <section className="change-session-container">
                  <Link to="/account/register"
                  className="change-padding">
                  Sign Up »</Link>
                </section>
            </form>
          </div>
        </div>
      </div>
  );
  }

}

export default LoginForm;

//
// <button onClick={() => this.props.login(guest)}
//        id="submit-session-button">
//        Guest Login</button>
