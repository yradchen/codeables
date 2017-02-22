import React from 'react';
import Modal from 'react-modal';

class StepEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.instruction;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
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

    // <div className="edit-view-ind">
    //   <img src={this.props.project.cover_img} className="edit-img"/>
    //     <Link to=
    //       {`/editcodeable/${this.props.project.id}/edit/project`}
    //       className="edit-view-clicker">Click Here to Edit</Link>
    //   <p className="intro-text">Intro: {this.props.project.title}</p>
    // </div>

    return (


        <div className='update-outer'>
          <form onSubmit={this.handleSubmit} className='update-inner'>
            <section className="save">
              <input type="Submit" defaultValue="save"/>
            </section>
              <div className="project-inner">
                <section className='update-file'>
                  <img src={imageToUse} className="edit-img"/>
                  <input type="file" className="add-file" onChange={this.updateFile()}/>
                  <p className="title-inner"> {this.state.step_title}</p>
                </section>
                  <input className="title" type="text" onChange={this.updateField('step_title')} value={this.state.step_title} />
                  <textarea className="description" name="name"onChange={this.updateField('step_detail')} value={detail}></textarea>
              </div>
          </form>
        </div>
    );
  }
}

export default StepEdit;
