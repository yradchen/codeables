import React from 'react';
import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: ""};
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

  render() {
    return (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className='login-form-box'>
            <h1 className="session-header">login</h1>
            <div className="login-form">
                { this.renderErrors() }
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
            </div>
            <input type="submit"
                   value="Sign Up"
                   className="submit-session-button"  />
          </form>
      </div>
  );
  }

}

export default LoginForm;
