import React from 'react';
import InstructionFormContainer from '../instructions/instruction_form_container';
import Modal from 'react-modal';
import {Link} from 'react-router';
import { hashHistory } from 'react-router';
import { ResponseModal, ModalStyle } from '../steps/response_modal';

class ProjectEditPage extends React.Component {
  constructor() {
    super();
    this.state = ({modalOpen: false });
    this.instructionToDelete = null;
    this.addInstruction = this.addInstruction.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleInstructionDelete = this.handleInstructionDelete.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.params.projectId);
    this.props.fetchProject(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.projectId !== nextProps.params.projectId) {
      this.props.fetchProject(parseInt(nextProps.params.projectId));
    }
  }

  addInstruction(e) {
    e.preventDefault();
    const stepNumber = this.props.instructions.length + 1;
    let step_title = `Step ${stepNumber}:`;
    let formData = new FormData();
    let project_id = this.props.params.projectId;
    formData.append('instruction[step_title]', step_title);
    formData.append("instruction[project_id]", project_id);
    this.props.createInstruction(formData);
  }

  handleResponse(response) {
    if (response === 'confirm') {
      this.props.deleteInstruction(this.instructionToDelete);
    }
    this.instructionToDelete = null;
    this.setState({modalOpen: false});
  }
  handleInstructionDelete(instruction) {
    return (e) => {
      this.instructionToDelete = (instruction.id);
      this.setState({modalOpen: true});
    };
  }

  render() {
    if (this.props.project === undefined) return null;

    const instructions = this.props.instructions.map( (instruction, index) => {
      let img = <img src={instruction.media} className="edit-img"/>;
      if (instruction.media === "") {
        img = <img src={images.rightPointer} className="edit-img opacity"/>;
      }

      return (
        <div className="edit-view-ind" key={`instruction-${index}`}>
          {img}
            <Link to={`/editcodeable/${this.props.project.id}/edit/step/${index}`}
            className="edit-view-clicker">Click Here to Edit</Link>
          <p className="intro-text">{instruction.step_title}</p>
            <button id="step-delete" className="delete-button" onClick={this.handleInstructionDelete(instruction)}>DELETE</button>
        </div>
      );
    });


    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          contentLabel="Modal"
          id="Modal"
          style={ModalStyle}
          onRequestClose={(response) => this.handleResponse(response)}
          >
          <ResponseModal
          handleResponse={this.handleResponse}/>
        </Modal>
        <div className="edit-view-outer">
          <div className="edit-view-inner">
            <section className="edit-view-top">
              <div className="owner-info">
                <h1>{this.props.project.title}</h1>
                <span className="all">
                <p className="by">by</p>
                <p className="show-owner">{this.props.project.owner}</p>
                </span>
              </div>
              <button className="delete-button" onClick={this.handleDelete}>Delete!</button>
            </section>
            <section className="edit-view-bottom">
              <div className="edit-view-ind">
                <img src={this.props.project.cover_img} className="edit-img"/>
                  <Link to=
                    {`/editcodeable/${this.props.project.id}/edit/project`}
                    className="edit-view-clicker">Click Here to Edit</Link>
                <p className="intro-text">Intro: {this.props.project.title}</p>
              </div>
              {instructions}
              <div className="instruction-container">
                <button onClick={this.addInstruction} className="add-step">Add Step</button>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default ProjectEditPage;
