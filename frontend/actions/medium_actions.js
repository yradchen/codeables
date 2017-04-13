// by default we save it to the user.
// then goes into project or instruction.
import * as MediumAPIUtil from '../util/medium_api_util';
export const RECEIVE_MEDIUM = 'RECEIVE_MEDIUM';
export const RECEIVE_ALL_MEDIA = 'RECEIVE_ALL_MEDIA';

const receiveMedium = (medium) => ({
  type: RECEIVE_MEDIUM,
  medium
});

const receiveAllMedia = (media) => ({
  type: RECEIVE_ALL_MEDIA,
  media
});

export const createMedium = (medium) => dispatch => (
  MediumAPIUtil.createMedium(medium).then(
    medium => dispatch(receiveMedium(medium))
  )
);

export const updateMedium = (medium) => dispatch => (
  MediumAPIUtil.updateMedium(medium).then(
    medium => dispatch(receiveMedium(medium))
  )
);
