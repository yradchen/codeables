import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_info';

const NewProject = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <img src={images.header} id="project-modal-image"/>
    <div id='project-modal-body'>
      <h2 id='project-modal-title'>I made a codeable called:</h2>
        <input type='text'
          placeholder='Title'
          id="modal-title-input"
        />
        <textarea wrap='hard'
          placeholder='Description'
          id='modal-description-input'
          >
        </textarea>
      <input type='submit'
        id='modal-submit-input'
        value= 'Start Codeable »'/>
    </div>
  </form>
    );
};

export default NewProject;
