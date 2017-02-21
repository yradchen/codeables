const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : "rgba(0, 0, 0, 0.55)",
    zIndex          : 10,
    padding         : 0

  },
  content : {
    position        : 'absolute',
    top             : '100px',
    left            : '50%',
    transform       : 'translateX(-50%)',
    bottom          : 'auto',
    backgroundColor : 'white',
    width           : '455px',
    height          : '390px',
    padding         : '0',
    border          : '1px solid black',
    borderRadius   : '5px'

  }
};
export default ModalStyle;
