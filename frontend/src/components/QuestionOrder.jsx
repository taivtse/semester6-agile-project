import React, { Component } from 'react';

import { connect } from 'react-redux';

import theme from '@src/root/theme';

import { changeOrderQuestionIsSelected } from '@containers/TestingTab/action';

import {
  WrapQuestionOrder,
  Text,
} from './styled';


class QuestionOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // METHOD:
  questionIsChecked() {
    const {
      question,
      listAnswer,
    } = this.props;
    for (let i = 0; i < listAnswer.length; i++) {
      if (listAnswer[i].questionId === question.id && listAnswer[i].answerId !== null) {
        return true;
      }
    }
    return false;
  }

  render() {
    const {
      question,
      orderQuestionIsSelected,
      listAnswer,
      changeQuestionIsSelected,
    } = this.props;
    let textColor = 'black';
    if (listAnswer.get(question.id)) textColor = theme.color.green;
    else if (question.order === orderQuestionIsSelected) {
      textColor = 'white';
    }
    return (
      <WrapQuestionOrder
        onClick={() => changeQuestionIsSelected(question.order)}
        is-selected={question.order === orderQuestionIsSelected}
      >
        <Text style={{ color: textColor }}>Câu hỏi số {question.order}</Text>
      </WrapQuestionOrder>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderQuestionIsSelected: state.testingTab.orderQuestionIsSelected,
    listAnswer: state.testingTab.listAnswer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeQuestionIsSelected: order => dispatch(changeOrderQuestionIsSelected(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOrder);
