import {
  CHANGE_QUESTION_IS_SELECTED,
  GET_QUESTION_DATA,
  UPDATE_LIST_ANSWER,
  SET_USER_INFO,
} from './constants';

export const changeOrderQuestionIsSelected = order => ({
  type: CHANGE_QUESTION_IS_SELECTED,
  payload: {
    orderQuestionIsSelected: order,
  },
});

export const getQuestionData = (listQuestion) => {
  const listAnswer = new Map();
  listQuestion.forEach(question => listAnswer.set(question.id, null));
  return ({
    type: GET_QUESTION_DATA,
    payload: {
      listQuestion,
      listAnswer,
    },
  });
};

export const updateListAnswer = (listAnswer) => {
  return ({
    type: UPDATE_LIST_ANSWER,
    payload: {
      listAnswer,
    },
  });
};

export const setUserInfo = (userInfo) => {
  return ({
    type: SET_USER_INFO,
    payload: {
      userInfo,
    },
  });
};
