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
    this.props.fetchSpecificProjects(this.state.inputVal).then(projects =>{
      hashHistory.push("/search");
    });
    // have to handle props not having projects.
    // let projects = this.getProjects();
    // Right now this search function assumes you already have all the projects in the store. How do I make a fetch request. I have fetchProjects but that takes an ID. I want to make a specific SQL search.


    // hashHistory.push("/")

    // return <ProjectFormContainer searched={projects}/>;
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
