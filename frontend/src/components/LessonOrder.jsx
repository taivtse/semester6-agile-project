import React, { Component } from 'react';

export default class LessonOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { lesson } = this.props;
    return (
      <div>
        <p>Bài học số {lesson.id}</p>
      </div>
    );
  }
}
