import React from 'react';
import { Link, withRouter } from 'react-router';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: ""};
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
    this.props.signup(this.state);
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

    return (
      <div className="session-outer-container">
        <div className="session-inner-container">
          <h1 className="session-header">Sign up</h1>
          <div className="session-background-container">
            <form onSubmit={this.handleSubmit} className='session-form-box'>
              <img src={images.flex_box} alt="flex_box" className="flex_box"/>
              <div className="session-input-container">
                { this.renderErrors() }
                <input type='email'
                       value={this.state.email}
                       placeholder="Email"
                       onChange={this.update("email")}
                       className="login-input" />
                <input type="text"
      								 value={this.state.username}
                       placeholder="Username"
      								 onChange={this.update("username")}
      								 className="login-input" />
							  <input type="password"
    								   value={this.state.password}
                       placeholder="Password"
    								   onChange={this.update("password")}
    								   className="login-input" />
                <input type="submit"
                       value="Create Account"
                       id="submit-session-button" />
                <button onClick={this.signInGuest}
                       id="submit-session-button">
                       Guest Login</button>
              </div>
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
