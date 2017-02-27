import React from 'react';
import { Link } from 'react-router';


class Drafts extends React.Component {

  componentDidMount() {
    this.props.fetchSpecificProjects({ user_id: this.props.currentUser.id });
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
      <ul>
      {allProjects}
      </ul>
    );
  }
}

export default Drafts;
