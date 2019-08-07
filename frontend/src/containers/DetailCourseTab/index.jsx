import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBackIcon from '@material-ui/icons/NavigateBefore';

import LessonOrder from '@components/LessonOrder';

import { getCourseById } from '@utils/api';

import theme from '@src/root/theme';

import {
  WrapSideBar,
  WrapDetailCourseTab,
  WrapBody,
  LessonIframe,
  TextLessonOrder,
  WrapLessonOrder,
  WrapPathTree,
  Body,
  PathLink,
  WrapBtnDirect,
  WrapPathLink,
  ChangeLessonBtn,
  SideBar,
  HeaderSideBar,
} from './styled';

const courseName = {
  UDPM: 'KHÓA HỌC ỨNG DỤNG PHẦN MỀM CƠ BẢN',
  TKW: 'KHÓA HỌC THIẾT KẾ WEBSITE CƠ BẢN',
  TKDH: 'KHÓA HỌC THIẾT KẾ ĐỒ HỌA CƠ BẢN',
  LTDD: 'KHÓA HỌC LẬP TRÌNH MOBILE CƠ BẢN',
};

class DetailCourseTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCourse: '',
      lessonIsSelected: {},
      listLesson: [],
    };
  }

  // LIFECYCLE:
  componentDidMount() {
    const courseId = this.props.match.params.id;
    getCourseById(courseId)
      .then((res) => {
        if (res.data) {
          this.setState({
            listLesson: res.data,
            lessonIsSelected: res.data[0],
          });
        }
      })
      .catch(err => console.log(err));
  }

  // METHODS:
  renderListCourseOrder() {
    const { listLesson } = this.state;
    return listLesson.map((lesson) => {
      return (
        <WrapLessonOrder
          key={lesson.id}
          is-selected={lesson.id === this.state.lessonIsSelected.id}
          onClick={() => this.setState({ lessonIsSelected: lesson })}
        >
          <TextLessonOrder>Bài {lesson.orderNumber}: {lesson.name}</TextLessonOrder>
        </WrapLessonOrder>
      );
    });
  }

  render() {
    const { lessonIsSelected, listLesson } = this.state;
    const { id } = this.props.match.params;
    if (!lessonIsSelected) return <h3>Có lỗi xảy ra vui lòng thử lại sau.</h3>;
    return (
      <WrapDetailCourseTab>
        <WrapSideBar>
          <HeaderSideBar>
            <p>Danh sách bài học</p>
          </HeaderSideBar>
          <SideBar>
            {this.renderListCourseOrder()}
          </SideBar>
        </WrapSideBar>
        <WrapBody>
          <WrapPathTree>
            <WrapPathLink>
              <p style={{ color: theme.color.orange, userSelect: 'none' }}><PathLink to="/learn">HỌC THỬ</PathLink> {'>'} <PathLink to={`/learn/${id}`}>{courseName[id]}</PathLink></p>
            </WrapPathLink>
            <WrapBtnDirect>
              <ChangeLessonBtn
                onClick={() => {
                  if (lessonIsSelected.orderNumber > 1) {
                    this.setState({
                      lessonIsSelected: listLesson[lessonIsSelected.orderNumber - 2],
                    });
                  }
                }}
              >
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  <NavigateBackIcon />Bài trước
                </p>
              </ChangeLessonBtn>
              <ChangeLessonBtn
                onClick={() => {
                  if (lessonIsSelected.orderNumber < listLesson.length) {
                    this.setState({
                      lessonIsSelected: listLesson[lessonIsSelected.orderNumber],
                    });
                  }
                }}
              >
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  Bài sau<NavigateNextIcon />
                </p>
              </ChangeLessonBtn>
            </WrapBtnDirect>
          </WrapPathTree>
          <Body>
            <LessonIframe
              ref="lesson-iframe"
              src={lessonIsSelected.link}
              title="bai-hoc"
            />
          </Body>
        </WrapBody>
      </WrapDetailCourseTab>
    );
  }
}

export default DetailCourseTab;
