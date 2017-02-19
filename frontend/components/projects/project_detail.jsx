import React from 'react';


class ProjectDetail extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.params.id)
  }
  render () {
    return <p>hi!</p>;
  }
}


export default ProjectDetail;
