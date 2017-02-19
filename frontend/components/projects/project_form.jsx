import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", cover_img: null, imageUrl: null };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
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
    this.props.createProject(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Intro:
          <input type="text" onChange={this.updateField('title')} />
        </label>
        <label>Description:
          <textarea name="name"onChange={this.updateField('description')}></textarea>
        </label>
        <label>Add Image
          <input type="file" onChange={this.updateFile()}/>
        </label>
          <img src={this.state.imageUrl}/>
          <input type="Submit" defaultValue="Create Codeable"/>
      </form>
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
