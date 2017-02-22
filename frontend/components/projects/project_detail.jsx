import React from 'react';


class ProjectDetail extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.params.id);
  }
  render () {
    if (this.props.project === undefined) return null;
    debugger
    return (
      <p>hi!</p>
    );

  }
}


export default ProjectDetail;
