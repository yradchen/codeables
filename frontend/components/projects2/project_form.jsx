import React from 'react';
import NewProject from './project_new';
import Modal from 'react-modal';
import ModalStyle from './modal_info';
import { hashHistory } from 'react-router';

class ProjectForm extends React.Component {
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
    let formData = new FormData();
    formData.append("project[title]", this.state.title);
    this.props.action(formData).then(
      (promise) => {
        let url = `/editcodeable/${promise.project.id}/edit`;
        this.onModalClose();
        hashHistory.push(url);
      }
    );
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  renderModal() {
    return (
      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="Modal"
        id="Modal"
        style={ModalStyle}
        >
      <NewProject action={this.props.action}
                  updateField={this.updateField}
                  handleSubmit={this.handleSubmit}
                  modalClose={this.onModalClose}/>
      </Modal>
    );
  }
  renderEdit() {
    // <div className="edit-outer">
  }

  render () {

    // if(!this.state) return null;
    let objToRender;
    if (this.props.params.projectId) {

    } else {
      objToRender = this.renderModal();
    }
    return (
      <div>
        {objToRender}
      </div>

    );
  }
}

export default ProjectForm;
