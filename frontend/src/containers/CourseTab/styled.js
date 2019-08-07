import styled from 'styled-components';
import theme from '@src/root/theme';

export const WrapSharedArticleTab = styled.div`
  width: 100%;
  height: 100%;
`;

export const WrapRowCourse = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const OverlayImageCourse = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${theme.bgColor.blueOverlay};
  opacity: 0;
  transition: 0.4s;
  cursor: pointer;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover{
    opacity: 1;
  }
`;

export const ImageCourse = styled.img`
  width: 330px;
`;

export const TextLearning = styled.p`
  margin: 2px;
  color: white;
  z-index: 100;
`;

export const TextLine = styled.div`
  margin: 2px;
  height: 2px;
  width: 40%;
  background-color: white;
  z-index: 1;
`;

export const WrapImageCourse = styled.div`
  position: relative;
  margin: 0 45px;
  margin-bottom: 25px;
`;

export const WrapProcessBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  background-color: ${theme.bgColor.processBar};
`;
