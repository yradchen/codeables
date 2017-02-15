import React from 'react';
import { Link, withRouter } from 'react-router';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="session-outer-container">
        <div className="session-inner-container">
          <h1 className="session-header">Sign up</h1>
          <div className="session-background-container">
            <form onSubmit={this.handleSubmit} className='session-form-box'>
              <div className="session-input-container">
                { this.renderErrors() }
                <input type='email'
                       value={this.state.email}
                       placeholder="Email"
                       onChange={this.update("email")}
                       className="login-input" />
                       <br/>
                <input type="text"
      								 value={this.state.username}
                       placeholder="Username"
      								 onChange={this.update("username")}
      								 className="login-input" />
                       <br/>
							  <input type="password"
    								   value={this.state.password}
                       placeholder="Password"
    								   onChange={this.update("password")}
    								   className="login-input" />
                <input type="submit"
                       value="Create Account"
                       className="submit-session-button" />
                <section className="change-session-container">
                  <p>Already a member? <Link to="/account/login">Login >></Link></p>
                </section>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
  }

}

export default SignUpForm;
