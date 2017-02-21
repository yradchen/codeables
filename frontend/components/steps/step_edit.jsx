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

  // componentDidMount() {
  //   const id = parseInt(this.props.params.projectId);
  //   // this.props.fetchProject(id);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.params.projectId !== nextProps.params.projectId) {
  //     this.props.fetchProject(parseInt(nextProps.params.projectId));
  //   }
  // }

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
    formData.append("instruction[step_title]", this.state.step_detail);
    formData.append("instruction[step_detail]", this.state.step_detail);
    formData.append("instruction[id]", this.state.instruction.id);
    this.props.updateProject(formData);
  }

  render () {

    if (this.props.instruction === undefined) return null;
    const stepNumber = parseInt(this.props.params.id) + 1;

    return (
      <div className="update-outer">
        <div className='update-inner'>
          <form onSubmit={this.handleSubmit} >
            <div className="project-form">
              <div className="project-inner">
                  <input type="file" className="add-file" onChange={this.updateFile()}/>

                <label>Step:
                  <input type="text" onChange={this.updateField('title')} value={this.state.step_title} />
                </label>
                <label>Description:
                  <textarea name="name"onChange={this.updateField('description')} value={this.state.step_detail}></textarea>
                </label>

              </div>
              <section className="publish">
                <input type="Submit" defaultValue="save"/>
              </section>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StepEdit;
