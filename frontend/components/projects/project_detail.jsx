import React from 'react';
import { hashHistory } from 'react-router';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.goToEdit = this.goToEdit.bind(this);
    this.createComment = this.createComment.bind(this);
    this.updateField = this.updateField.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.params.id);
  }

  renderEdit() {
    if (this.props.project.owner === this.props.currentUser.username) {
      return <button className="edit-button" onClick={this.goToEdit}>Edit</button>;
    } else {
      return <p className="hidden"></p>;
    }
  }

  goToEdit() {
    const url = `/editcodeable/${this.props.project.id}/edit/`;
    hashHistory.push(url);
  }

  createComment(e) {
    e.preventDefault();
    this.props.createComment({ body: this.state.body, project_id: this.props.params.id });
    this.setState({ body: "" });
  }

  updateField(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  deleteComment(comment) {
    return (e) => {
      e.preventDefault();
      this.props.deleteComment(comment.id);
    };
  }

  renderDeleteComment(comment) {
    if (!window.currentUser) return <p className="hidden"></p>;
    if (comment.author === currentUser.username) {
      return <button className="delete-comment"
      onClick={this.deleteComment(comment)}>[delete]</button>;
    } else {
      return <p className="hidden"></p>;
    }
  }

  render () {

    if (this.props.project === undefined) return null;
    let instructions = this.props.instructions;

    instructions = this.props.instructions.map( (instruction) => {
      let showImg = 'show-img-container';
      if (instruction.media === "") {
        showImg = 'show-img-container hidden';
      }
      let text = instruction.step_detail;
      if (text === "null") {
        text = " ";
      }
      return (
      <div key={instruction.id}>
        <h2 className="show-instruction-title">{instruction.step_title}</h2>
        <div className={showImg}>
          <img className="show-img" src={instruction.media}/>
        </div>
        <pre className="show-description">{text}</pre>
      </div>
      );
    });


    let comments = this.props.comments;

    comments = comments.map( (comment) => {
      return (
        <div className="comment-container" key={comment.id}>
          <h4 className="comment-author">{comment.author}</h4>
          <h3 className="comment-body">{comment.body}</h3>
          <div className="comment-delete-container">
          {this.renderDeleteComment(comment)}
          </div>
        </div>
      );
    });


    return (
      <div className="show-outer">
        <div className="show-inner">
          <header className="show-top">
            <div className="owner-info">
              <h1>{this.props.project.title}</h1>
              <span className="all">
              <p className="by">by</p>
              <p className="show-owner">{this.props.project.owner}</p>
              {this.renderEdit()}
              </span>
            </div>

            <img src={images.logo} alt="logo" className="show-logo"/>
          </header>
          <section className="show-bottom">
            <div className="show-img-container">
              <img className="show-img" src={this.props.project.cover_img}/>
            </div>
            <pre className="show-description">{this.props.project.description}</pre>
            {instructions}
            <form className= "comment-outer" onSubmit={this.createComment}>
              <textarea className="comment-text" value={this.state.body} onChange={this.updateField('body')}>
              </textarea>
              <input className="post-comment" type="Submit" defaultValue='Post Comment'/>
            </form>
            {comments}
          </section>
        </div>
      </div>
    );

  }
}


export default ProjectDetail;
