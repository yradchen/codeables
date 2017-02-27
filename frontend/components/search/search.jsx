import React from 'react';
import { Link } from 'react-router';
//
// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   matches() {


class Searches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.fetchSpecificProjects({ title: this.state.inputVal });
  }

  handleInput(event) {
   this.setState({inputVal: event.currentTarget.value});
  }

  render() {

    const allProjects = this.props.projects.map(project => {
      return (
        <li className="outer-project-container" key={project.id}>
          <img className="project-image" src={project.cover_img} />

          <div className="inner-project-container">
            <section>
              <Link to={`/projects/${project.id}`}>
              <h2 className="project-title">{project.title}</h2>
              </Link>
            </section>
            <span className="all-owner">
              <p className='by-owner'>by</p>
              <Link to={`/projects/${project.id}`}>
              <p className='project-owner'>{project.owner}</p>
              </Link>
              </span>
          </div>
        </li>
      );
    });

    return (
      <div className="search-outer">
        <div className="search-inner">
          <section className="search-top-bar">
            <h3 className="code-big">Let's Code</h3>
            <input type="text"
              onKeyUp={this.search}
              value={this.state.inputVal}
              onChange={this.handleInput}
              className="searchbar-big"/>
          </section>
          <ul className="projects-ul">
            {allProjects}
          </ul>
        </div>
      </div>
    );
  }
}
export default Searches;
{/* <input type="text"
  onKeyUp={this.search}
  value={this.state.inputVal}
  onChange={this.handleInput}
  className="searchbar"/> */}
