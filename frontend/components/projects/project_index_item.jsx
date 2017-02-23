import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = ({ project }) => {
  return (
    <li className="outer-project-container">
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
};


export default ProjectIndexItem;
