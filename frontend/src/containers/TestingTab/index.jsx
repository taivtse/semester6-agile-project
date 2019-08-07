import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect, NavLink } from 'react-router-dom';

import QuestionOrder from '@components/QuestionOrder';
import AnswerOption from '@components/AnswerOption';

import { getAllQuestion } from '@utils/api';

import { convertMapToListQuestion } from '@src/utils/converter';

import {
  getQuestionData,
  changeOrderQuestionIsSelected,
} from './action';

import {
  WrapTestingTab,
  WrapContent,
  WrapSideBar,
  BlackScreen,
  DetailQuestion,
  WrapProcessBar,
  WrapLeftProcessBar,
  WrapRightProcessBar,
  ProcessBar,
  ProcessBarCurrent,
  WrapTextProcess,
  TextQuestion,
  WrapAnswerOption,
  WrapTextQuestion,
  WrapPrevNextBtn,
  BackBtn,
  NextBtn,
  ResultBtn,
  CompletingBtn,
  ResultLink,
} from './styled';

const questionExample = {
  content: 'Khi làm việc đội nhóm bạn là người...',
  answers: [
    {
      id: 1,
      answer: 'Thu hút người khác',
    },
    {
      id: 2,
      answer: 'Sẽ làm việc cùng mọi người',
    },
    {
      id: 3,
      answer: 'Thích có cách riêng của mình',
    },
    {
      id: 4,
      answer: 'Tạo cảm giác thân thiện với mọi người',
    },
  ],
};

class TestingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFillInfo: true,
      isError: false,
    };
  }

  // LIFECYCLE:
  componentDidMount() {
    const { userInfo } = this.props;
    if (!userInfo) this.setState({ isFillInfo: false });
    // getAllQuestion()
    //   .then((res) => {
    //     this.props.getQuestionData(res.data.map((question, i) =>
    //       ({ ...question, isDone: false, order: i + 1 })));
    //   })
    //   .catch(err => this.setState({
    //     isError: true,
    //   }));
    this.props.getQuestionData(new Array({ ...questionExample, isDone: false, order: 1 }));
  }

  // METHODS:
  getQuestionIsChecked() {
    const {
      listAnswer,
    } = this.props;
    let count = 0;
    listAnswer.forEach((value, key, map) => {
      if (value) count++;
    });
    return count;
  }

  getPercentProcessBar() {
    const {
      listAnswer,
    } = this.props;
    if (listAnswer && listAnswer.size !== 0) {
      return (this.getQuestionIsChecked() / listAnswer.size) * 100;
    }
    return 0;
  }

  // RENDER:
  renderListQuestion() {
    return this.props.listQuestion.map((question) => {
      return (
        <QuestionOrder
          key={question.order}
          question={question}
        />
      );
    });
  }

  renderListAnswerOption() {
    const {
      listQuestion,
      orderQuestionIsSelected,
    } = this.props;

    const currentQuestion = listQuestion[orderQuestionIsSelected - 1];
    if (currentQuestion) {
      return currentQuestion.answers.map(answer =>
        <AnswerOption key={answer.id} answer={answer} currentQuestion={currentQuestion} />);
    }
    return null;
  }

  render() {
    if (this.state.isError) return <p>Có lỗi xảy ra vui lòng thử lại sau</p>;
    // if (!this.state.isFillInfo) return <Redirect to="/test/form-user-information" />;

    const {
      listQuestion,
      orderQuestionIsSelected,
      listAnswer,
    } = this.props;

    const currentQuestion = listQuestion[orderQuestionIsSelected - 1];

    return (
      <WrapTestingTab>
        <WrapSideBar>
          {this.renderListQuestion()}
        </WrapSideBar>
        <WrapContent>
          <WrapProcessBar>
            <WrapLeftProcessBar>
              <ProcessBar>
                <ProcessBarCurrent width={this.getPercentProcessBar()} />
              </ProcessBar>
              <WrapTextProcess>
                <span>{this.getQuestionIsChecked()}/{listAnswer.size}</span>
              </WrapTextProcess>
            </WrapLeftProcessBar>
            <WrapRightProcessBar>
              {
                this.getPercentProcessBar() === 100
                  ? <ResultBtn onClick={() => {}}><ResultLink to="/test/result">Result</ResultLink></ResultBtn>
                  : <CompletingBtn style={{ userSelect: 'none' }}>Completing...</CompletingBtn>
              }
            </WrapRightProcessBar>
          </WrapProcessBar>
          <DetailQuestion>
            <BlackScreen />
            <WrapTextQuestion>
              <TextQuestion>
                Câu hỏi: {currentQuestion ? currentQuestion.content : null}
              </TextQuestion>
            </WrapTextQuestion>
            <WrapAnswerOption>
              {this.renderListAnswerOption()}
            </WrapAnswerOption>
            <WrapPrevNextBtn>
              <BackBtn
                is-hide={orderQuestionIsSelected <= 1}
                onClick={() => {
                  if (orderQuestionIsSelected <= 1) return;
                  this.props.changeOrderQuestionIsSelected(orderQuestionIsSelected - 1);
                }}
              >
                Back
              </BackBtn>
              <NextBtn
                is-hide={orderQuestionIsSelected >= listAnswer.size}
                onClick={() => {
                  if (orderQuestionIsSelected >= listAnswer.size) return;
                  this.props.changeOrderQuestionIsSelected(orderQuestionIsSelected + 1);
                }}
              >
                Next
              </NextBtn>

            </WrapPrevNextBtn>
          </DetailQuestion>
        </WrapContent>
      </WrapTestingTab>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listQuestion: state.testingTab.listQuestion,
    listAnswer: state.testingTab.listAnswer,
    orderQuestionIsSelected: state.testingTab.orderQuestionIsSelected,
    userInfo: state.testingTab.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionData: listQuestion => dispatch(getQuestionData(listQuestion)),
    changeOrderQuestionIsSelected: order => dispatch(changeOrderQuestionIsSelected(order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingTab);
