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
`;

export const StyledContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
`;

export const StyledTexts = styled.div`
  background-color: ${({ theme }: StyledTheme) => theme.transparentLightGrey};
  padding: 1.5rem 3rem;
  width: 50vw;
  top: 14vw;
  right: 40vw;
  border-radius: 0.2rem;
`;

export const StyledText = styled.p`
  color: ${({ theme }: StyledTheme) => theme.grey};
  text-align: justify;
`;

export const StyledListTech = styled.ul`
  color: ${({ theme }: StyledTheme) => theme.grey};
  text-align: justify;
`;

export const StyledImageOne = styled.img`
  width: 25vw;
  border-radius: 0.2rem;
  border: 2px solid ${({ theme }: StyledTheme) => theme.grey};
  position: absolute;
  right: 10vw;
  top: 14vw;
`;

export const StyledImageTwo = styled.img`
  width: 25vw;
  border-radius: 0.2rem;
  border: 2px solid ${({ theme }: StyledTheme) => theme.grey};
  position: absolute;
  right: 5vw;
  top: 32vw;
`;

export const StyledList = styled.li`
  background-color: ${({ theme }: StyledTheme) => theme.grey};
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
