import React from 'react';
import Modal from 'react-modal';

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.project) {
      this.state = { title: this.props.project.title, description: this.props.description, cover_img: this.props.project.cover_img, imageUrl: null };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    let int = parseInt(this.props.params.projectId);
    this.props.fetchProject(int);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.projectId !== nextProps.params.projectId) {
      this.props.fetchProject(this.props.params.projectId);
    }
  }

  updateFile(e) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState( {imageUrl: reader.result, cover_img: file} );
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: null, cover_img: null});
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
    this.props.createProject(formData);
  }

  render () {
    if (this.props.project === undefined) return null;
    debugger
    return (
      <div className="form-outer">
        <div className='form-container'>
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

              </div>
              <section className="publish">
                <input type="Submit" defaultValue="Publish"/>
              </section>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StepForm;
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
