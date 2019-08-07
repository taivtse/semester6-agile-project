import styled from 'styled-components';
import theme from '@src/root/theme';
import { EXDEV } from 'constants';

export const WrapSharedArticleTab = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
`;

export const Title = styled.h1`
  color: ${theme.color.red};
  margin: 1em 0;
`;

export const WrapMenu = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 90%;
`;

export const MenuTitle = styled.h3`
  color: ${props => (props['is-selected'] ? theme.color.blue : theme.color.orange)};
  cursor: pointer;
  margin-top: 10px;
  user-select: none;

  &:hover {
    color: ${theme.color.blue};
  }
`;

export const MenuUl = styled.ul`
  padding-left: 20px;
`;

export const MenuLi = styled.li`
  color: ${props => (props['is-selected'] ? theme.color.blue : theme.color.orange)};
  cursor: pointer;
  margin-top: 10px;
  user-select: none;

  &:hover {
    color: ${theme.color.blue};
  }
`;

export const WrapSideBar = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px;
  background-color: ${theme.bgColor.sideBar};
`;

export const WrapBody = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  padding: 10px 0;
`;

export const WrapMajor = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5em 0;
`;

export const MajorTitle = styled.h4`
  color: ${theme.color.blue};
  align-self: flex-start;
  padding-left: 30px;
  font-size: 20px;
  padding-bottom: 10px;
`;

export const WrapMajorContent = styled.div`
  word-wrap: break-word;
  padding: 0 30px;
  letter-spacing: 0.7px;
  width: 100%;
`;

export const MajorContent = styled.p`
  /* text-indent: 30px; */
  letter-spacing: 0.75px;
  width: 100%;
`;

export const WrapSection = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const WrapSectionContent = styled.div`
  padding: 0 45px;
`;

export const SectionTitle = styled.h5`
  color: ${theme.color.blue};
  align-self: flex-start;
  padding-left: 45px;
  padding-bottom: 10px;
  font-size: 17px;
`;

export const SectionContent = styled.p`
  /* text-indent: 30px; */
  letter-spacing: 0.75px;
`;
