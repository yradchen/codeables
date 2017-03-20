import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

import Quill from 'quill/core';
import Toolbar from 'quill/modules/toolbar';
import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic';
import CodeBlock from 'quill/formats/code';
import Snow from 'quill/themes/snow';

Quill.register({
  'modules/toolbar': Toolbar,
  'themes/snow': Snow,
  'formats/bold': Bold,
  'formats/italic': Italic,
  'formats/code': CodeBlock
});

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.opacity = "";
  }

  componentDidMount() {
    const id = parseInt(this.props.params.projectId);
    this.props.fetchProject(id).then( (action) => {
      if (action.project.owner !== this.props.currentUser.username) {
        hashHistory.push("/");
      } else {
        this.setState(this.props.formInfo);
        this.setupQuillEditor();
      }
    });
  }

  setupQuillEditor() {
    const toolbarOptions = ['bold', 'italic','code-block'];
    this.quill = new Quill('#editor', {
      modules: {
        toolbar: toolbarOptions
       },
      theme: "snow"
    });
    let contents = this.props.formInfo.description;
    if (!contents) {
      contents = this.props.formInfo.step_detail;
    }
    this.quill.setContents(JSON.parse(contents));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.projectId !== nextProps.params.projectId) {
      this.props.fetchProject(parseInt(nextProps.params.projectId)).then( () => {
        this.setState(this.props.formInfo);
      });
    }
  }

  updateFile(e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
      let fileName = "media";
      if (this.state.cover_img) {
        fileName = "cover_img";
      }
      reader.onloadend = () => {
        this.setState( {imageUrl: reader.result, [`${fileName}`]: file} );
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        // change from media to cover_img
        this.setState({ imageUrl: null, [`${fileName}`]: null});
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
    let formData;
    if (this.state.title) {
      formData = this.projectFormData();
    } else {
      formData = this.instructionFormData();
    }
    let url = `/editcodeable/${this.state.id}/edit`;
    if (this.state.project_id) {
      url = `/editcodeable/${this.state.project_id}/edit`;
    }

    this.props.updateProjectForm(formData).then( () => {
      this.setState( { errors: undefined } );
      this.props.setLoadingState(false);
      hashHistory.push(url);
    }, this.handleErrors);
  }

  handleErrors(data) {
    this.props.setLoadingState(false);
    this.setState( { errors: data.responseJSON[0] } );
  }

  projectFormData() {
    const formData = new FormData();
    const delta = this.quill.getContents();
    const description = JSON.stringify(delta);
    formData.append("project[cover_img]", this.state.cover_img);
    formData.append("project[title]", this.state.title);
    formData.append("project[description]", description);
    formData.append("project[id]", this.state.id);
    return formData;
  }

  instructionFormData() {
    const formData = new FormData();
    const delta = this.quill.getContents();
    const step_detail = JSON.stringify(delta);
    formData.append("instruction[media]", this.state.media);
    formData.append("instruction[step_title]", this.state.step_title);
    formData.append("instruction[step_detail]", step_detail);
    formData.append("instruction[id]", this.state.id);
    return formData;
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

  chooseInstructionImage() {
    let imageToUse = this.state.media;
    if (imageToUse === "") {
      return <img src={images.rightPointer} className="edit-img opacity"/>;
    }
    return <img src={imageToUse} className="edit-img"/>;
  }


  render () {
    if (this.props.formInfo === undefined) return null;
    if (this.state === null) return null;
    let imageToUse = <img src={this.state.imageUrl} className="edit-img"/>;
    if (this.state.imageUrl === undefined) {
      if (this.state.cover_img) {
        imageToUse = <img src={this.state.cover_img} className="edit-img"/>;
      } else {
        imageToUse = this.chooseInstructionImage();
      }

    }
    const errors = this.boxError();

    return (
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

            <input className="title" type="text" onChange={this.updateField('title')} value={this.state.title} />
            <div className="quill-container">
            <div className="editor-box" id="editor"></div>
            </div>
          </div>

        </form>
        </div>
      </div>

    );
  }
}

export default ProjectForm;
