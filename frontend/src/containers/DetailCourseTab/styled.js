import styled from 'styled-components';
import theme from '@src/root/theme';
import { Link } from 'react-router-dom';

export const WrapDetailCourseTab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const WrapSideBar = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  background-color: ${theme.bgColor.sideBar};
  display: flex;
  flex-direction: column;
`;

export const SideBar = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const HeaderSideBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${theme.bgColor.green};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

export const WrapBody = styled.div`
  width: 80%;
  height: 100%;
`;

export const LessonIframe = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: block;
  border: none;
`;

export const WrapLessonOrder = styled.div`
  font-size: 1em;
  text-align: left;
  padding: 25px 10px;
  cursor: pointer;
  background-color: ${props => (props['is-selected'] ? theme.bgColor.questionIsSelected : null)};
  color: ${props => (props['is-selected'] ? 'white' : 'black')};
  white-space: nowrap;
`;
export const TextLessonOrder = styled.p`
  text-overflow: ellipsis;
  user-select: none;
  overflow: hidden;
`;

export const WrapPathTree = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${theme.bgColor.processBar};
  display: flex;
`;

export const PathLink = styled(Link)`
  color: ${theme.color.orange};
  text-decoration: none;
  user-select: none;
  letter-spacing: 0.7px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 90%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const WrapPathLink = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;
`;

export const WrapBtnDirect = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 25px; 
`;

export const ChangeLessonBtn = styled.div`
  opacity: ${props => (props['is-hide'] ? 0 : 1)};
  cursor: ${props => (props['is-hide'] ? 'unset' : 'pointer')};
  background-color: ${theme.bgColor.green};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  user-select: none;
  border-radius: 25px;
  letter-spacing: 0.5px;
  width: 120px;
  height: 70%;
  margin-left: 25px;

  &:active {
    background-image: ${theme.bgImage.greenActiveBtn};
  }
`;
