import React, { Component } from 'react';

import theme from '@src/root/theme';

import {
  WrapQuestionOrder,
} from './styled';


export default class QuestionOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let color = 'black';
    if (this.props.order < 33) color = theme.color.green;
    return (
      <WrapQuestionOrder>
        <p style={{ color }}>Câu hỏi số {this.props.order}</p>
      </WrapQuestionOrder>
    );
  }
}
