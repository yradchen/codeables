import React from 'react';
import InstructionFormContainer from '../instructions/instruction_form_container';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", cover_img: null, imageUrl: null, instructions: 0};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
    this.addInstruction = this.addInstruction.bind(this);
  }
  // #  cover_img_file_name    :string
  // #  cover_img_content_type :string
  // #  cover_img_file_size    :integer
  // #  cover_img_updated_at   :datetime
  updateFile (e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
      reader.onloadend = function() {
        this.setState( {imageUrl: reader.result, cover_img: file} );
      }.bind(this);
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: "", cover_img: null});
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
    formData.append("project[description]", this.state.description);

    this.props.createProject(formData).then(

    );
  }

  addInstruction(e) {
    e.preventDefault();
    let incInstruction = this.state.instructions + 1;
    this.setState({ instructions: incInstruction });
  }


  render () {
    let instructions = [];
    for (var i = 0; i < this.state.instructions; i++) {
      instructions.push(
        <InstructionFormContainer
          stepNumber={i + 1}
          key={`instruction-${i}`}
        />);
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-outer">
          <section className="form-top">
            <input type="Submit" defaultValue="Publish"/>
          </section>
          <div className="form-bottom">
            <label>Add Image
              <input type="file" onChange={this.updateFile()}/>
            </label>
            <label>Intro:
              <input type="text" onChange={this.updateField('title')} />
            </label>
            <label>Description:
              <textarea name="name"onChange={this.updateField('description')}></textarea>
            </label>

              <img src={this.state.imageUrl}/>
          </div>
        </form>
        <button onClick={this.addInstruction}>Add Step</button>
        {instructions}
      </div>
    );
  }
}

export default ProjectForm;
{/* <input type="text" name="" value=""> */}
// enter title
//
// id                     :integer          not null, primary key
// #  title                  :string           not null
// #  description            :text             not null
// #  user_id                :integer          not null
// #  created_at             :datetime         not null
// #  updated_at             :datetime         not null
// #  cover_img_file_name    :string
// #  cover_img_content_type :string
// #  cover_img_file_size    :integer
// #  cover_img_updated_at   :datetime
// #
