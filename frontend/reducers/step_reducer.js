import { RECEIVE_ALL_STEPS, RECEIVE_STEP } from '../actions/step_actions';
import merge from 'lodash/merge';


const _step = Object.freeze({
  1: {
    step_title: '',
    step_detail: '',
    cover_img: '',
  }
});

const StepReducer = (state = _step, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_STEPS:
    return merge({}, action.steps);
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id] = action.step;
      return newState;
    default:
      return state;
  }
};


export default StepReducer;
