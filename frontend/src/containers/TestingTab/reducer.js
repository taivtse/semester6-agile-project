import {
  CHANGE_QUESTION_IS_SELECTED,
  GET_QUESTION_DATA,
  UPDATE_LIST_ANSWER,
  SET_USER_INFO,
} from './constants';

const initialState = {
  orderQuestionIsSelected: 1,
  listQuestion: [],
  listAnswer: new Map(),
  userInfo: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_QUESTION_IS_SELECTED:
      return { ...state, ...payload };
    case GET_QUESTION_DATA:
      return { ...state, ...payload };
    case UPDATE_LIST_ANSWER:
      return { ...state, listAnswer: new Map(payload.listAnswer) };
    case SET_USER_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
