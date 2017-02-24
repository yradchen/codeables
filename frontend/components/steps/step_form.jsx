import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.params.projectId);
    this.props.fetchProject(id).then( (action) => {
      if (action.project.owner !== currentUser.username) {
        hashHistory.push("/");
      } else {
      this.setState(action.project);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.projectId !== nextProps.params.projectId) {
      this.props.fetchProject(parseInt(nextProps.params.projectId)).then( () => {
        this.setState(this.props.project);
      });
    }
  }

  updateFile(e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState( {imageUrl: reader.result, cover_img: file} );
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: null, cover_img: null});
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
    let formData = new FormData();
    formData.append("project[cover_img]", this.state.cover_img);
    formData.append("project[title]", this.state.title);
    let description = this.state.description;
    if (description === null) {
      description = " ";
    }
    formData.append("project[description]", description);
    formData.append("project[id]", this.props.project.id);
    let url = `/editcodeable/${this.state.id}/edit`;
    this.props.updateProject(formData).then( () => {
      hashHistory.push(url);
    });
  }

  render () {
    if (this.props.project === undefined) return null;
    if (this.state === null) return null;
    let imageToUse = this.state.imageUrl;
    if (this.state.imageUrl === undefined) {
      imageToUse = this.state.cover_img;
    }
    let description = this.state.description;
    if (description === null) {
      description = "";
    }

    return (
      <div className='update-outer'>
      <div className="update-inner">
        <form onSubmit={this.handleSubmit} >
          <section className="save">
            <input className='save-button' type="Submit" defaultValue="Click to Save File"/>
          </section>

          <div className="project-inner">
            <section className='update-file'>
              <img src={imageToUse} className="edit-img"/>

              <div className="file-overlay" >
              <p className="add-file-overlay">Click to Add File</p>
              <input type="file" className="add-file" onChange={this.updateFile()}/>
              </div>

            </section>
            <input className="title" type="text" onChange={this.updateField('title')} value={this.state.title} />
            <textarea className="description" name="name"onChange={this.updateField('description')} value={description}></textarea>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default StepForm;
