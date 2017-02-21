const RECEIVE_STEP = 'RECEIVE_STEP';
const RECEIVE_ALL_STEPS = 'RECEIVE_ALL_STEPS';

const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step
});

const receiveAllSteps = (steps) => ({
  type: RECEIVE_ALL_STEPS,
  steps
});

export const createStep = (step) => (dispatch) => (
  dispatch(receiveStep(step))
);




export default ProjectReducer;
