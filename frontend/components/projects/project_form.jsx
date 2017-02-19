// getInitialState {
//   return ({
//     imageFile: null
//     imageUrl: null
//   }
//
//   )
// }
// <input type='file' onChange{this.updateFile}
// <img src={this.state.imageUrl}/>
// preview image -
//
//   bind updatefile
//   updateFile (e) {
//     let file = e.currentTarget.files[0]
//     let fileReader = new FileReader();
//     fileReader.onloadend = () => {
//       this.setState({ imageFile: file, imageUrl: fileReader.result })
//     }
//     if (file) {
//       fileReader.readAsDataURL(file);
//     }
//   }
//
// handleSubmit (e) {
//   var formData = new FormData();
//   formData.append('tweet[body]', this.state.body);
//   formData.append('tweet[image]', this.state.imageFile);
// }

import React from 'react';

class ProjectForm extends React.Component {
  render () {
    return <p></p>;
  }
}

export default ProjectForm;
