import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import { ResponseModal, ModalStyle } from './response_modal';

import Quill from 'quill/core';
import Toolbar from 'quill/modules/toolbar';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import CodeBlock from 'quill/formats/code';
import Snow from 'quill/themes/snow';

class InstructionEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.instruction;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    const projectId = parseInt(this.props.params.projectId);
    if (!this.props.project) {
      this.props.fetchProject(projectId).then( () => {
        if (this.props.project.owner !== this.props.currentUser.username) {
          hashHistory.push("/");
        } else {
        this.setState(this.props.instruction);
        this.setupQuillEditor();
        }
      });
    } else if (this.props.project.owner !== this.props.currentUser.username) {
      hashHistory.push("/");
    } else {
      this.setupQuillEditor();
    }
  }

  setupQuillEditor() {
    const toolbarOptions = ['bold', 'italic','code-block'];
    this.quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions
       },
      theme: "snow"
    });
    const contents = this.props.instruction.step_detail;
    this.quill.setContents(JSON.parse(contents));
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.project_id !== parseInt(nextProps.params.projectId)) {
      const projectId = parseInt(nextProps.params.projectId);
      if (!nextProps.project) {
        this.props.fetchProject(projectId).then( () => {
          this.setState(this.props.instruction);
        });
      }
    } else if (nextProps.instruction) {
      if (this.props.instruction.id !== nextProps.instruction.id) {

        this.setState(nextProps.instruction);
      }
    }

  }


  updateFile(e) {
    return (e) => {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState( {imageUrl: reader.result, media: file} );
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: null, media: null});
      }
    };
  }

  updateField(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setLoadingState(true);
    const delta = this.quill.getContents();
    const step_detail = JSON.stringify(delta);
    const formData = new FormData();
    formData.append("instruction[media]", this.state.media);
    formData.append("instruction[step_title]", this.state.step_title);
    formData.append("instruction[step_detail]", step_detail);
    formData.append("instruction[id]", this.state.id);
    const url = `/editcodeable/${this.state.project_id}/edit`;
    this.props.updateInstruction(formData).then( () => {
      this.props.setLoadingState(false);
      hashHistory.push(url);
    }, this.handleErrors);
  }

  handleErrors(data) {
    this.props.setLoadingState(false);
    this.setState( { errors: data.responseJSON[0] } );
  }

  boxError() {
    if (this.state.errors) {
      return (
        <ul className="project-box-error">
          <li>
            <h3 className="box-error-message">{this.state.errors}</h3>
          </li>
        </ul>
      );
    }
  }



  chooseImage() {
    let imageToUse = this.state.imageUrl;
    if (imageToUse === undefined) {
      imageToUse = this.state.media;
    }
    if (imageToUse === "") {
      return <img src={images.rightPointer} className="edit-img opacity"/>;
    }
    return <img src={imageToUse} className="edit-img"/>;
  }

  render () {
    if (this.props.instruction === undefined) return null;
    let detail = this.state.step_detail;
    const imageToUse = this.chooseImage();
    if (this.state.step_detail === null) {
      detail = "";
    }
    const errors = this.boxError();

    return (
    <div>
        <div className='update-outer'>
        <div className="update-inner">
          <form onSubmit={this.handleSubmit} >
            <section className="save">
              <input className='save-button' type="Submit" defaultValue="Click to Save File"/>
              {errors}
            </section>
            <div className="project-inner">
              <section className='update-file'>
                {imageToUse}

                <div className="file-overlay" >
                <p className="add-file-overlay">Click to Add File</p>
                <input type="file" className="add-file" onChange={this.updateFile()}/>
                </div>

              </section>
                <input className="title" type="text" onChange={this.updateField('step_title')} value={this.state.step_title} />
                <div className="quill-container">
                <div className="editor-box" id="editor"></div>
                </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default InstructionEdit;
