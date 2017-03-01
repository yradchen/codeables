import React from 'react';
import UserFormContainer from './user_form_container';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  search(property) {
    this.props.fetchSpecificProjects({ title: this.state.inputVal}).then(projects =>{
      hashHistory.push("/search");
    });
  }

  handleInput(event) {
   this.setState({inputVal: event.currentTarget.value});
  }

  render() {
    return (
      <header className="nav-header">
        <div className={this.props.flex} >
          <section className="nav-links">
            <Link to="/" className="logo-link">
              <img src={images.logo} alt="logo" className="nav-logo"/>
            </Link>
            <div className="search-container">
              <label className="lets-code">let's code
                <input type="text"
                  onKeyUp={this.search}
                  value={this.state.inputVal}
                  onChange={this.handleInput}
                  className="searchbar"/>

            </label>
            </div>
          </section>
          <section className="nav-sessions">
            <UserFormContainer />
          </section>
        </div>
        <div className="nav-bottom">
        </div>
    </header>
    );
  }
}

export default NavBar;
