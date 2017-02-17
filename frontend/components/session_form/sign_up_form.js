import React from 'react';
import { Link, withRouter } from 'react-router';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: "", errorOuter: "error-outer"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInGuest = this.signInGuest.bind(this);
    this.errorMessages = this.errorMessages.bind(this);
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
    this.setState( { errorOuter: "error-outer"});
    setInterval( () => {
      this.setState( { errorOuter: "error-outer hidden"});
    }, 4000);

    this.props.signup(this.state);
  }

  signInGuest(e) {
    let guest = { username: "Guest", password: "wizardhat1"};
    e.preventDefault();
    this.props.login(guest);
    this.redirectIfLoggedIn();
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
        <ul className={this.state.errorOuter}>
          <li className="error-inner">
            <p>{message}</p>
          </li>
          <p className="error-arrow"> </p>
        </ul>
      );
    }
    return <p></p>;
  }

  signup() {
    return (
      <div className="session-input-container">
        <div className="error-btn">
          {this.errorMessages("Email")}
          <input type='email'
                 value={this.state.email}
                 placeholder="Email"
                 onChange={this.update("email")}
                 className="login-input" />
        </div>
        <div className="error-btn">
          {this.errorMessages("Username")}
          <input type="text"
                 value={this.state.username}
                 placeholder="Username"
                 onChange={this.update("username")}
                 className="login-input" />
        </div>

        <div className="error-btn">
          {this.errorMessages("Password")}
          <input type="password"
                 value={this.state.password}
                 placeholder="Password"
                 onChange={this.update("password")}
                 className="login-input" />
        </div>
        <input type="submit"
               value="Create Account"
               id="submit-session-button" />
        <button onClick={this.signInGuest}
               id="submit-session-button">
               Guest Login</button>
      </div>
    );
  }

  render() {
    return (
      <div className="session-outer-container">
        <div className="session-inner-container">
          <h1 className="session-header">Sign up</h1>
          <div className="session-background-container">
            <form onSubmit={this.handleSubmit} className='session-form-box'>
              <img src={images.flex_box} alt="flex_box" className="flex_box"/>
              {this.signup()}
              <section className="change-session-container">
                <p className="change-padding">Already a member?
                <Link to="/account/login" className="change-link">Login » </Link>
                 </p>

              </section>
            </form>

          </div>
        </div>
      </div>
  );
  }

}

export default SignUpForm;


// give it some kind of classname through state?
// use setInterval?
