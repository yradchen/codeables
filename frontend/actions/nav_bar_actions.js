export const RECEIVE_VISIBILITY_STATE = 'RECEIVE_VISIBILITY_STATE';

const receiveVisibility = (visibility) => ({
  type: RECEIVE_VISIBILITY_STATE,
  visibility
});

export const setVisibility = (boolean) => dispatch => (
  dispatch(receiveVisibility(boolean))
);
