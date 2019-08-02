import styled from 'styled-components';
import theme from '@src/root/theme';

import { NavLink } from 'react-router-dom';

export const WrapTestingTab = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const WrapSideBar = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
`;

export const SideBarScrollBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const DetailQuestion = styled.div`
  position: relative;
  height: 90%;
  width: 100%;
  background-image: url(https://dght003-7228c.firebaseapp.com/images/bg-testing.png);
  background-size: cover;
  background-position:
    0 100%,
    0 0,
    0 0,
    50%,
    0 0;
`;

export const WrapProcessBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  background-color: ${theme.bgColor.processBar};
`;

export const WrapLeftProcessBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 100%;
`;

export const ProcessBar = styled.div`
  position: relative;
  height: 15px;
  width: 80%;
  background-color: white;
  border-radius: 25px;
`;

export const ProcessBarCurrent = styled.div`
  position: absolute;
  height: 100%;
  width: ${props => props.width}%;
  top: 0%;
  left: 0;
  background-color: ${theme.bgColor.green};
  border-radius: 25px;
`;

export const WrapTextProcess = styled.div`
  user-select: none;
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapRightProcessBar = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapContent = styled.div`
  width: 80%;
  height: 100%;
`;

export const BlackScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 0;
`;

export const WrapTextQuestion = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  height: 30%;
  width: 100%;
  padding-left: 50px;
  word-break: break-word;
  width: 90%;
`;
export const TextQuestion = styled.p`
  color: white;
  font-size: 2em;
  user-select: none;
  z-index: 1;
`;
export const WrapAnswerOption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 50%;
  padding-left: 60px;
`;

export const WrapPrevNextBtn = styled.div`
  z-index: 1;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BackBtn = styled.div`
  opacity: ${props => (props['is-hide'] ? 0 : 1)};
  cursor: ${props => (props['is-hide'] ? 'unset' : 'pointer')};
  background-color: ${theme.bgColor.blue};
  display: inline-block;
  padding: 15px 35px;
  color: white;
  z-index: 1;
  user-select: none;
  margin-right: 50px;
  border-radius: 2px;
  letter-spacing: 0.5px;

  &:active {
    background-image: ${theme.bgImage.blueActiveBtn};
  }
`;

export const NextBtn = styled.div`
  opacity: ${props => (props['is-hide'] ? 0 : 1)};
  cursor: ${props => (props['is-hide'] ? 'unset' : 'pointer')};
  background-color: ${theme.bgColor.green};
  display: inline-block;
  padding: 15px 35px;
  color: white;
  z-index: 1;
  user-select: none;
  margin-right: 50px;
  border-radius: 2px;
  letter-spacing: 0.5px;

  &:active {
    background-image: ${theme.bgImage.greenActiveBtn};
  }
`;

export const ResultBtn = styled.div`
  cursor: pointer;
  background-color: ${theme.bgColor.green};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: white;
  z-index: 1;
  user-select: none;
  height: 70%;
  width: 90%;
  margin-right: 10%;
  font-size: 15px;
  letter-spacing: 0.5px;

  &:active {
    background-image: ${theme.bgImage.greenActiveBtn};
  }
`;

export const ResultLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`;

export const CompletingBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: white;
  z-index: 1;
  user-select: none;
  height: 70%;
  width: 90%;
  margin-right: 10%;
  font-size: 15px;
  border: 1px solid white;
  cursor: not-allowed;
  letter-spacing: 0.5px;
`;
