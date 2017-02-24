import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveAllComments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComments = () => dispatch => (
  CommentAPIUtil.fetchComments().then(
    comments => dispatch(receiveAllComments(comments))
  )
);

export const createComment = (comment) => dispatch => (
  CommentAPIUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment))
  )
);

export const updateComment = (comment) => dispatch => (
  CommentAPIUtil.updateComment().then(
    comment => dispatch(receiveComment(comment))
  )
);

export const deleteComment = (id) => dispatch => (
  CommentAPIUtil.deleteComment(id).then(
    comment => dispatch(removeComment(comment))
  )
);
