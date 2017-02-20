import React from 'react';

class InstructionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step_title: "", step_detail: "", media: null, mediaUrl: null };
  }

  updateFile (e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
      reader.onloadend = function() {
        this.setState( {mediaUrl: reader.result, media: file} );
      }.bind(this);
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ mediaUrl: "", media: null});
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
    // this.props.createProject(formData);
  }


  render () {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Step {this.props.stepNumber}:
          <input type="text" onChange={this.updateField('title')} />
        </label>
        <label>Instruction:
          <textarea name="name" onChange={this.updateField('description')}></textarea>
        </label>
        <label>Add Media
          <input type="file" onChange={this.updateFile()}/>
        </label>
          <img src={this.state.mediaUrl}/>
          <input type="Submit" defaultValue="Create Instruction"/>
      </form>

    );
  }
}

export default InstructionForm;
