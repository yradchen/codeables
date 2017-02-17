import React from 'react';
import { Link, withRouter } from 'react-router';
// import signInGuest from './sessionmethods';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInGuest = this.signInGuest.bind(this);
    this.errorMessages = this.errorMessages.bind(this);
    this.inputs = this.inputs.bind(this);
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
        <ul className="box-error" key={`error-${i}`}>
          <li>
            <h3 className="box-error-message">{error}</h3>
          </li>
        </ul>
      );
    });
  }

  errorMessages(errorType) {
    let message = "";
    this.props.errors.map(error => {
      if (error.includes(errorType)) {
        message += error;
      }
    });
    if (message.length > 0) {
      return (
        <ul className="error-outer">
          <li className="error-inner">
            <p>{message}</p>
          </li>
          <li className="error-arrow">
          </li>
        </ul>
      );
    }
    return <p></p>;
  }


  signInGuest(e) {
    let guest = { username: "Guest", password: "wizardhat1"};
    e.preventDefault();
    this.props.login(guest);
    this.redirectIfLoggedIn();
  }

  inputs() {
    return (
    <div className="session-input-container">
      <div className="error-btn">

        <input type="text"
               value={this.state.username}
               placeholder="Username"
               onChange={this.update("username")}
               className="login-input" />
      </div>
      <div className="error-btn">
        <input type="password"
               value={this.state.password}
               placeholder="Password"
               onChange={this.update("password")}
               className="login-input" />
      </div>
      { this.renderErrors() }
      <div className="error-btn">
        <input type="submit"
               value="Login"
               id="submit-session-button"  />
      </div>
      <button onClick={this.signInGuest}
             id="submit-session-button">
             Guest Login</button>
    </div>
         );
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
                {this.inputs()}

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
