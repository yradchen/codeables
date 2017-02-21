const ModalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'black',
    opacity         : .8,
    zIndex          : 10,
    padding         : 0

  },
  content : {
    position        : 'absolute',
    top             : '36px',
    left            : '50%',
    transform       : 'translateX(-50%)',
    bottom          : 'auto',
    backgroundColor : 'white',
    width           : '455px',
    height          : '455px',
    padding         : '0',
    border          : '1px solid black'
  }
};
export default ModalStyle;
