import React from 'react';
import { Link } from 'react-router';

const ProjectIndexItem = ({ project }) => {
  return (
    <li className="outer-project-container">
      <img className="project-image" src={project.cover_img} />

      <div className="inner-project-container">
        <section>
          <h2 className="project-title">{project.title}</h2>
        </section>
        <span className="all-owner">
          <p className='by-owner'>by</p>
          <p className='project-owner'>{project.owner}</p>
          </span>
      </div>
    </li>
  );
};


export default ProjectIndexItem;
