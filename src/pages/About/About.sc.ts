import styledEngine from '@mui/styled-engine';
import styled from 'styled-components';

import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';
import { devices } from '../../statics/devices';
const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

export const StyledAbout = styled.div`
  display: flex;
  /* justify-content: space-around; */
  padding-left: 2%;
  padding-right: 2%;
  @media (max-width: 700px) {
    padding-left: 10%;


  }
`;

export const StyledContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }: StyledTheme) => theme.styledTitle};
`;

export const StyledTexts = styled.div`
  padding-top: 3rem;
  width: 50vw;
  @media (max-width: 700px) {
    width: 100%;

  }
`;

export const StyledText = styled.p`
  color: ${({ theme }: StyledTheme) => theme.styledText};
  text-align: justify;
`;

export const StyledImageOne = styled.img`
  width: 25vw;
  border-radius: 0.2rem;
  border: 2px dotted ${({ theme }: StyledTheme) => theme.styledText};
  position: absolute;
  right: 10vw;
  top: 14vw;
  :hover {
    border-width: 5px;
    color: ${({ theme }: StyledTheme) => theme.styledTitle};
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledImageTwo = styled.img`
  width: 25vw;
  border-radius: 0.2rem;
  border: 2px dotted ${({ theme }: StyledTheme) => theme.styledText};
  position: absolute;
  right: 5vw;
  top: 32vw;
  :hover {
    border-width: 5px;
    color: ${({ theme }: StyledTheme) => theme.styledTitle};
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledTechStack = styled.div`
  /* background: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
`;

export const StyleCircle = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 10px;

  background: white;
`;
