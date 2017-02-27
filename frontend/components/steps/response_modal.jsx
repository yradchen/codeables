import React from 'react';
import Modal from 'react-modal';

export const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : "rgba(0, 0, 0, 0.75)",
    zIndex          : 10,
    padding         : 0

  },
  content : {
    position        : 'absolute',
    top             : '40%',
    left            : '50%',
    transform       : 'translateX(-50%)',
    bottom          : 'auto',
    backgroundColor : 'white',
    width           : '600px',
    height          : '105px',
    padding         : '0',
    border          : '1px solid transparent',
    borderRadius   : '4px'

  }
};


export const ResponseModal = (props) => {
  return (
    <div className="modal-section">
      <p className="confirm" >Confirm</p>
      <p className="sure">Are you sure you want to delete this Step?</p>
      <section>
      <button className="cancel" onClick={() => props.handleResponse('cancel')}>Cancel</button>
      <button className="delete" onClick={() => props.handleResponse('confirm')}>Delete</button>
      </section>
    </div>
  );
};
// export default ResponseModal;
