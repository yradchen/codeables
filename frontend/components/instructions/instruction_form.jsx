import React from 'react';

class InstructionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step_title: "", step_detail: "", media: "", mediaUrl: null };
  }

  updateFile (e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState( {mediaUrl: reader.result, media: file}, () => {
          this.props.updateStepObject(this.props.stepNumber, this.state);
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ mediaUrl: "", media: ""});
      }
    };
  }

  updateField(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value }, () => {
        this.props.updateStepObject(this.props.stepNumber, this.state);
      });
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append("instruction[media]", this.state.media);
  //   formData.append("instruction[step_title]", this.state.step_title);
  //   formData.append("instruction[step_detail]", this.state.step_detail);
  //   // this.props.createProject(formData);
  // }


  render () {
    return (
      <section>
        <span>
          Add Media
          <input type="file" onChange={this.updateFile()}/>
        </span>
        <label>Step {this.props.stepNumber}:
          <input type="text" onChange={this.updateField('step_title')} />
        </label>
        <label>Instruction:
          <textarea name="name" onChange={this.updateField('step_detail')}></textarea>
        </label>

          <img src={this.state.mediaUrl}/>
      </section>

    );
  }
}

export default InstructionForm;
