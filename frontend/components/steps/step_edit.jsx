import React from 'react';
import Modal from 'react-modal';
import { hashHistory } from 'react-router';
import { ResponseModal, ModalStyle } from './response_modal';
class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.instruction;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    const projectId = parseInt(this.props.params.projectId);
    if (!this.props.project) {
      this.props.fetchProject(projectId).then( () => {
        if (this.props.project.owner !== currentUser.username) {
          hashHistory.push("/");
        } else {
        this.setState(this.props.instruction);
        }
      });
    } else if (this.props.project.owner !== currentUser.username) {

      hashHistory.push("/");
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
    let url = `/editcodeable/${this.state.project_id}/edit`;
    this.props.updateInstruction(formData).then( () => {
      hashHistory.push(url);
    });
  }

  handleDelete(e) {
    this.setState({modalOpen: true});
  }

  handleResponse(response) {
    if (response === 'confirm') {
      let url = `/editcodeable/${this.state.project_id}/edit`;
      this.props.deleteInstruction(this.state.id).then( () => {
        hashHistory.push(url);
      });
    } else {
      this.setState({modalOpen: false});
    }
  }

  render () {
    if (this.props.instruction === undefined) return null;
    let detail = this.state.step_detail;
    if (this.state.step_detail === null) {
      detail = "";
    }
    let imageToUse = <img src={this.state.imageUrl} className="edit-img"/>;

    if (this.state.imageUrl === undefined) {
      imageToUse = <img src={images.rightPointer} className="edit-img opacity"/>;
    }
    // } else {
    //   imageToUse = <img src={this.state.imageUrl} className="edit-img"/>;
    // }


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
        <div className='update-outer'>
        <div className="update-inner">
          <form onSubmit={this.handleSubmit} >
            <section className="save">
              <input className='save-button' type="Submit" defaultValue="Click to Save File"/>
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
                <textarea className="description" name="name"onChange={this.updateField('step_detail')} value={detail}></textarea>
            </div>
          </form>
          <button id="step-delete" className="delete-button" onClick={this.handleDelete}>DELETE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default StepEdit;
