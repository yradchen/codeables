import React from 'react';
import UserFormContainer from './user_form_container';
import { Link, hashHistory, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  search(e) {
    const terms = this.state.inputVal;
    e.preventDefault();
    this.props.setSearchTerms(terms);
    this.setState({ inputVal: '' });
    this.props.fetchSpecificProjects({ title: this.state.inputVal}).then( () =>{
      const location = this.props.location.pathname;
      if (location !== "/search/") {
        hashHistory.push(`/search/`);
      }
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
                <form onSubmit={this.search}>
                <input type="text"
                  value={this.state.inputVal}
                  onChange={this.handleInput}
                  className="searchbar"/>
                </form>
                <i className="material-icons" onClick={this.search}>search</i>
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

export default withRouter(NavBar);
