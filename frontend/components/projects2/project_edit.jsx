import React from 'react';
import InstructionFormContainer from '../instructions/instruction_form_container';
import Modal from 'react-modal';
import {Link} from 'react-router';
import { hashHistory } from 'react-router';
class ProjectEditPage extends React.Component {
  constructor() {
    super();
    this.addInstruction = this.addInstruction.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const id = parseInt(this.props.params.projectId);
    this.props.fetchProject(id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.projectId !== nextProps.params.projectId) {
      this.props.fetchProject(parseInt(nextProps.params.projectId));
    }
  }

  addInstruction(e) {
    e.preventDefault();
    const stepNumber = this.props.project.instructions.length + 1;
    let step_title = `Step ${stepNumber}:`;
    let formData = new FormData();
    let project_id = this.props.params.projectId;
    formData.append('instruction[step_title]', step_title);
    formData.append("instruction[project_id]", project_id);
    this.props.createInstruction(formData);
  }

  handleDelete(e) {
    e.preventDefault();
    debugger
    this.props.deleteProject(this.props.project.id).then( () => {
      hashHistory.push("/");
    });
  }

  render() {
    if (this.props.project === undefined) return null;

    const instructions = this.props.project.instructions.map( (instruction, index) => {
      return (
        <div className="edit-view-ind" key={`instruction-${index}`}>
          <img src={instruction.media} className="edit-img"/>
            <Link to={`/editcodeable/${this.props.project.id}/edit/step/${index}`}
            className="edit-view-clicker">Click Here to Edit</Link>
          <p className="intro-text">{instruction.step_title}</p>
        </div>
      );
    });

    return (
      <div className="edit-view-outer">
        <div className="edit-view-inner">
          <section className="edit-view-top">
            <p>Publish BUTTON PLACEHOLDER</p>
            <div className="edit-view-welcome">
            </div>
            <div className="edit-view-publish">
            </div>
          </section>
          <section className="edit-view-bottom">
            <div className="edit-view-ind">
              <img src={this.props.project.cover_img} className="edit-img"/>
                <Link to=
                  {`/editcodeable/${this.props.project.id}/edit/project`}
                  className="edit-view-clicker">Click Here to Edit</Link>
              <p className="intro-text">Intro: {this.props.project.title}</p>
            </div>
            {instructions}
            <div className="instruction-container">
              <button onClick={this.addInstruction} className="add-step">Add Step</button>
            </div>
          </section>
          <button onClick={this.handleDelete}>Delete!</button>
        </div>
      </div>
    );
  }
}

export default ProjectEditPage;
// on click go to another container that I pass props into.
      {/* <div className='form-container'>
        <form onSubmit={this.handleSubmit} >
          <div className="project-form">
            <div className="project-inner">
                <input type="file" className="add-file" onChange={this.updateFile()}/>

              <label>Intro:
                <input type="text" onChange={this.updateField('title')} />
              </label>
              <label>Description:
                <textarea name="name"onChange={this.updateField('description')}></textarea>
              </label>
                <img src={this.state.imageUrl} className={imageDisplay}/>
            </div>
            <section className="publish">
              <input type="Submit" defaultValue="Publish"/>
            </section>
          </div>
  )
}; */}
// class ProjectEditForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { title: "", description: "", cover_img: "", imageUrl: "", instructions: 0 };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.updateFile = this.updateFile.bind(this);
//     this.updateField = this.updateField.bind(this);
//     this.addInstruction = this.addInstruction.bind(this);
//   }
//
//   updateFile(e) {
//     return (e) => {
//       let file = e.currentTarget.files[0];
//       let reader = new FileReader();
//       reader.onloadend = function() {
//         this.setState( {imageUrl: reader.result, cover_img: file} );
//       }.bind(this);
//       if (file) {
//         reader.readAsDataURL(file);
//       } else {
//         this.setState({ imageUrl: "", cover_img: null});
//       }
//     };
//   }
//
//   updateStepObject(number, stepObject) {
//     this.instructionObjects[number - 1] = stepObject;
//   }
//
//   updateField(field) {
//     return (e) => {
//       e.preventDefault();
//       this.setState({ [field]: e.target.value });
//     };
//   }
//
//   handleSubmit(e) {
//     e.preventDefault();
//     let formData = new FormData();
//     formData.append("project[cover_img]", this.state.cover_img);
//     formData.append("project[title]", this.state.title);
//     formData.append("project[description]", this.state.description);
//     formData = this.appendInstructionObjects(formData);
//     this.props.createProject(formData);
//   }
//
//   appendInstructionObjects(formData) {
//     this.instructionObjects.forEach((instruction, index) => {
//       formData.append(`instructions[${index}][media]`, instruction.media);
//       formData.append(`instructions[${index}][step_title]`, instruction.step_title);
//       formData.append(`instructions[${index}][step_detail]`, instruction.step_detail);
//     });
//     return formData;
//   }
//
//
//   addInstruction(e) {
//     e.preventDefault();
//     let incInstruction = this.state.instructions + 1;
//     this.setState({ instructions: incInstruction });
//   }
//
//
//   render () {
//     let instructions = [];
//     for (var i = 0; i < this.state.instructions; i++) {
//       instructions.push(
//         <InstructionFormContainer
//           stepNumber={i + 1}
//           key={`instruction-${i}`}
//           updateStepObject={this.updateStepObject.bind(this)}
//         />);
//     }
//     let imageDisplay;
//     if (this.state.cover_img === "" || this.state.cover_img === null) {
//       imageDisplay = "cover-img hidden";
//     } else {
//       imageDisplay = "cover-img";
//     }
//
//     return (
//       <div className="form-outer">
//         <div className='form-container'>
//           <form onSubmit={this.handleSubmit} >
//
//             <div className="project-form">
//               <div className="project-inner">
//                   <input type="file" className="add-file" onChange={this.updateFile()}/>
//
//                 <label>Intro:
//                   <input type="text" onChange={this.updateField('title')} />
//                 </label>
//                 <label>Description:
//                   <textarea name="name"onChange={this.updateField('description')}></textarea>
//                 </label>
//                   <img src={this.state.imageUrl} className={imageDisplay}/>
//               </div>
//               <section className="publish">
//                 <input type="Submit" defaultValue="Publish"/>
//               </section>
//             </div>
//
//             <div className="instruction-container">
//               <button onClick={this.addInstruction}>Add Step</button>
//               {instructions}
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default ProjectForm;
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
