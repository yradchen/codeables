import React from 'react';
import ProjectIndexItem from './project_index_item';



class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render () {


    const singleProjects = this.props.projects.map(project => {
      return (
        <ProjectIndexItem
        key={`project_id ${project.id}`}
        project={project} />
      );
    });
    return (
    <ul className="projects-ul">
      {singleProjects}
    </ul>
    );
  }
}

export default ProjectIndex;
