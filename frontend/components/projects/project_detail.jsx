import React from 'react';


class ProjectDetail extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.params.id);
  }
  render () {
    if (this.props.project === undefined) return null;

    const instructions = this.props.project.instructions.map( (instruction) => {
      return (
      <div>
        <h2 className="show-instruction-title">{instruction.step_title}</h2>
        <div className="show-img-container">
          <img className="show-img" src={instruction.media}/>
        </div>
        <pre className="show-description">{instruction.step_detail}</pre>
      </div>
      );
    });

    return (
      <div className="show-outer">
        <div className="show-inner">
          <header className="show-top">
            <div className="owner-info">
              <h1>{this.props.project.title}</h1>
              <span className="all">
              <p className="by">by</p>
              <p className="show-owner">{this.props.project.owner}</p>
              </span>
            </div>
            <img src={images.logo} alt="logo" className="show-logo"/>
          </header>
          <section className="show-bottom">
            <div className="show-img-container">
              <img className="show-img" src={this.props.project.cover_img}/>
            </div>
            <pre className="show-description">{this.props.project.description}</pre>
            {instructions}
          </section>
        </div>
      </div>
    );

  }
}


export default ProjectDetail;
