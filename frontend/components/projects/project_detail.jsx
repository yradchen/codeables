import React from 'react';
import { hashHistory } from 'react-router';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.goToEdit = this.goToEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.params.id);
  }

  renderEdit() {
    if (!window.currentUser) return <p className="hidden"></p>;
    if (this.props.project.owner === currentUser.username) {
      return <button className="edit-button" onClick={this.goToEdit}>Edit</button>;
    } else {
      return <p className="hidden"></p>;
    }
  }

  goToEdit() {
    // "/editcodeable/:projectId/edit/project"
    const url = `/editcodeable/${this.props.project.id}/edit/`;
    hashHistory.push(url);
  }


  render () {

    if (this.props.project === undefined) return null;
    let instructions = this.props.project.instructions;
    if (instructions) {
      instructions = this.props.project.instructions.map( (instruction) => {
        let showImg = 'show-img-container';
        if (instruction.media === "") {
          showImg = 'show-img-container hidden';
        }
        return (
        <div key={instruction.id}>
          <h2 className="show-instruction-title">{instruction.step_title}</h2>
          <div className={showImg}>
            <img className="show-img" src={instruction.media}/>
          </div>
          <pre className="show-description">{instruction.step_detail}</pre>
        </div>
        );
      });
    }
    return (
      <div className="show-outer">
        <div className="show-inner">
          <header className="show-top">
            <div className="owner-info">
              <h1>{this.props.project.title}</h1>
              <span className="all">
              <p className="by">by</p>
              <p className="show-owner">{this.props.project.owner}</p>
              {this.renderEdit()}
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
