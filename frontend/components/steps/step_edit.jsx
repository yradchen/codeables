import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';

class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.instruction;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const projectId = parseInt(this.props.params.projectId);
    if (!this.props.project) {
      this.props.fetchProject(projectId).then( () => {
        this.setState(this.props.instruction);
      });
    }
  }
  //
  componentWillReceiveProps(nextProps) {
    if (this.state.project_id !== parseInt(nextProps.params.projectId)) {
      const projectId = parseInt(nextProps.params.projectId);
      if (!nextProps.project) {
        this.props.fetchProject(projectId).then( () => {
          this.setState(this.props.instruction);
        });
      }
    } else if (this.props.instruction.id !== nextProps.instruction.id){
      this.setState(nextProps.instruction);
    }

  }

  updateFile(e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
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
    let formData = new FormData();
    formData.append("instruction[media]", this.state.media);
    formData.append("instruction[step_title]", this.state.step_title);
    formData.append("instruction[step_detail]", this.state.step_detail);
    formData.append("instruction[id]", this.state.id);
    this.props.updateInstruction(formData);
  }

  handleDelete(e) {
    e.preventDefault();
    let url = `/editcodeable/${this.state.project_id}/edit`;
    this.props.deleteInstruction(this.state.id).then( () => {
      hashHistory.push(url);
    });
  }

  render () {
    if (this.props.instruction === undefined) return null;
    let detail;
    if (this.state.step_detail === null) {
      detail = "";
    }
    let imageToUse = this.state.imageUrl;
    if (this.state.imageUrl === undefined) {
      imageToUse = this.state.media;
    }


    return (
        <div className='update-outer'>
          <form onSubmit={this.handleSubmit} className='update-inner'>
            <section className="save">
              <input type="Submit" defaultValue="save"/>
            </section>
            <div className="project-inner">
              <section className='update-file'>
                <img src={imageToUse} className="edit-img"/>

                <div className="file-overlay" >
                <p className="add-file-overlay">Click to Add File</p>
                <input type="file" className="add-file" onChange={this.updateFile()}/>
                </div>

              </section>
                <input className="title" type="text" onChange={this.updateField('step_title')} value={this.state.step_title} />
                <textarea className="description" name="name"onChange={this.updateField('step_detail')} value={detail}></textarea>
            </div>
          </form>
          <button onClick={this.handleDelete}>Delete!</button>
        </div>
    );
  }
}

export default StepEdit;
