import React from 'react';
import NewProject from './project_new';
import Modal from 'react-modal';
import ModalStyle from './modal_info';

class ProjectFormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.project;
    this.updateField = this.updateField.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidMount(){
    if (this.props.params.projectId){
      this.props.fetchConcept(this.props.params.projectId);
    } else {
      this.setState({modalOpen: true});
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.projectId){
      this.setState(newProps.project);
    } else {
      this.setState({modalOpen: true});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.onModalClose();
    // this.props.action({title: this.state.title, description: this.state.description}).then(
    //   (promise) => {
    //     let url = `concepts/${promise.project.id}/edit`;
    //     this.onModalClose();
    //     hashHistory.push(url);
    //   }
    // );
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  render () {
    if(!this.state) return null;

    return (
      <div>
        {(this.props.params.projectId)? null :
          <Modal
            isOpen={this.state.modalOpen}
            contentLabel="Modal"
            // onSubmit={this.onModalClose}
            style={ModalStyle}
            >
          <NewProject action={this.props.action}
                      updateField={this.updateField}
                      handleSubmit={this.handleSubmit}
                      modalClose={this.onModalClose}/>
          </Modal>}
      </div>

    );
  }
}

export default ProjectFormTwo;
