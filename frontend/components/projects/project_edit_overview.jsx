import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router';
import { hashHistory } from 'react-router';
import { ResponseModal, ModalStyle } from './forms/response_modal';

class ProjectEditPage extends React.Component {
  constructor() {
    super();
    this.state = ({modalOpen: false,  mediaUrls: [], updatedInstructions: []});
    this.instructionToDelete = null;
    this.addInstruction = this.addInstruction.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleInstructionDelete = this.handleInstructionDelete.bind(this);
    this.updatePublish = this.updatePublish.bind(this);
    this.saveAll = this.saveAll.bind(this);
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
    const step_title = `Step ${stepNumber}:`;
    const formData = new FormData();
    const project_id = this.props.params.projectId;
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

  updatePublish(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('project[publish]', !this.props.project.publish);
    formData.append('project[id]', this.props.project.id);
    this.props.updateProject(formData);
  }

  uploadFiles() {
    return(e) => {
      e.preventDefault();
      const files = e.currentTarget.files;
      const formData = new FormData();

      if (files) {
        const keys = Object.keys(files);
        var mediaUrls = this.state.mediaUrls;
        keys.forEach(key => {
          const reader = new FileReader();
          reader.readAsDataURL(files[key]);
          reader.onloadend = () => {
            const result = reader.result;
            formData.append('medium[media]', result);
            const mediaUrls = this.state.mediaUrls.concat(result);
            this.setState({mediaUrls: mediaUrls});
          };
        });
      }
    };
  }
  setUrls() {
    return this.state.mediaUrls.map( (url, index) => {
      return <img src={url} key={`${index}-url`} className="multiple-images" onDrag={this.drag(index)}/>;
    });
  }

  drag(Urlindex) {
    return (e) => {
      this.currentUrl = Urlindex;
    };
  }

  drop(instruction, index) {
    return (e) => {
      let mediaUrls = this.state.mediaUrls;
      instruction.media = mediaUrls[this.currentUrl];
      mediaUrls.splice(this.currentUrl, 1);
      const updatedInstructions = this.state.updatedInstructions;
      updatedInstructions.push(index);
      this.setState({mediaUrls: mediaUrls, updatedInstructions });
    };
  }

  stopevent() {
    return (e) => {
      e.preventDefault();
    };
  }

  setImages() {
    if (this.state.mediaUrls.length > 0) {
      return (
        <section className="images">
          {this.setUrls()}
        </section>
      );
    } else {
      return (
        <section className="images">
          <p className="new-file-overlay">Click To Add Image</p>
          <input type="file" className="upload-file" onChange={this.uploadFiles()} multiple/>
        </section>
    );
    }
  }
  saveAll() {
    debugger
    this.state.updatedInstructions.forEach(index => {
      let instruction = this.props.instructions[index];
      this.props.updateInstruction(instruction);
    });
  }

  render() {
    if (this.props.project === undefined) return null;
    let publish;
    if (this.props.project.publish) {
      publish = "Unpublish";
    } else {
      publish = 'Publish';
    }
    const instructions = this.props.instructions.map( (instruction, index) => {
      let img = <img src={instruction.media} className="edit-img"/>;
      if (instruction.media === "") {
        img = <img src={images.rightPointer} className="edit-img opacity" onDragOver={this.stopevent()} onDrop={this.drop(instruction, index)}/>;
      }
      return (
        <div className="edit-view-ind" key={`instruction-${index}`}>
          {img}
            <Link to={`/editcodeable/${this.props.project.id}/edit/step/${index}`}
            className="edit-view-clicker">Click Here to Edit</Link>
          <p className="intro-text">{instruction.step_title}</p>
            <button className="step-delete" onClick={this.handleInstructionDelete(instruction)}><i id="clear-icon" className="material-icons">clear</i></button>
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
                {this.setImages()}
              <section>
                <Link to={`projects/${this.props.project.id}`} id="preview">Full Preview</Link>
                <button id="publish" onClick={this.updatePublish}>{publish}</button>
                <button onClick={this.saveAll}>Save</button>
              </section>
            </section>
            <section className="edit-view-bottom">
              <div className="edit-view-ind">
                <img src={this.props.project.media} className="edit-img"/>
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
