// by default we save it to the user.
// then goes into project or instruction.
import * as MediumAPIUtil from '../util/medium_api_util';
export const RECEIVE_MEDIUM = 'RECEIVE_MEDIUM';

const receiveMedium = (medium) => ({
  type: RECEIVE_MEDIUM,
  medium
});

export const createMedium = (medium) => dispatch => (
  MediumAPIUtil.createMedium(medium).then(
    medium => dispatch(receiveMedium(medium))
  )
);
