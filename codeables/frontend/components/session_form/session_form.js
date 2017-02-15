import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
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
    this.props.processForm(this.state);
  }


  renderErrors() {
    this.props.errors.map(error, i => {
      return (
        <ul className="errors">
          <li key={`error-${i}`}>
            {error}
          </li>
        </ul>
      );
    });
  }
  render() {
    return (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className='login-form-box'>
            <h2>{this.props.heading}</h2>
            <div className="login-form">
              <label>Username
                <input type="text"
								value={this.state.username}
                placeholder="Username"
								onChange={this.update("username")}
								className="login-input" />
              </label>

              <label>Password:
							<input type="password"
								value={this.state.password}
                placeholder="Password"
								onChange={this.update("password")}
								className="login-input" />
						  </label>

            </div>
            <input type="submit" value={this.props.submitText} />
          </form>
      </div>
  );
  }

}
// change submit
export default SessionForm;
