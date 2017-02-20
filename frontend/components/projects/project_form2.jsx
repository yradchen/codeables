import React from 'react';
import InstructionFormContainer from '../instructions/instruction_form_container';


class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", cover_img: null, imageUrl: null,
    allInstructions: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
    // this.addInstruction = this.addInstruction.bind(this);
    this.addInstruction2 = this.addInstruction2.bind(this);
  }

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
    let previousInstructions = this.state.allInstructions;
    let newInstruction = <InstructionFormContainer
                          stepNumber={previousInstructions.length + 1}
                          key={`instruction-${previousInstructions.length}`}/>;
    this.setState({ allInstructions: previousInstructions.concat(newInstruction) });
  }

  addInstruction2(e) {
    let previousInstructions = this.state.allInstructions;
    let newInstruction = { step_title: `Step ${previousInstructions.length + 1}`, step_detail: "", media: null, mediaUrl: null };
    this.setState({ allInstructions: previousInstructions.concat(newInstruction) });
  }


  render () {

    // let instructions = [];
    // for (var i = 0; i < this.state.instructions; i++) {
    //   instructions.push(
    //     <InstructionFormContainer
    //       stepNumber={i + 1}
    //       key={`instruction-${i}`}
    //     />);
    // }

    return (
      <div className="form-outer">

        <div className='form-container'>
          <form onSubmit={this.handleSubmit} >
            <div className="project-form">
              <div>
                <label>Add Image
                  <input type="file" className="add-file" onChange={this.updateFile()}/>
                </label>
                <label>Intro:
                  <input type="text" onChange={this.updateField('title')} />
                </label>
                <label>Description:
                  <textarea name="name"onChange={this.updateField('description')}></textarea>
                </label>
                  <img src={this.state.imageUrl}/>
              </div>
              <section>
                <input type="Submit" defaultValue="Publish"/>
              </section>
            </div>

            <div className="instruction-container">
              <button onClick={this.addInstruction2}>Add Step</button>
              {this.state.allInstructions}
            </div>
          </form>
        </div>
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
