import styled, { keyframes } from 'styled-components';

import { devices } from '../../statics/devices';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';

const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

const morph = keyframes`
0% {border-radius: 5px}
50% {border-radius: 50px}
100% {border-radius: 5px}
`;

const spin = keyframes`
from {transform:rotate(0deg);}
to{transform:rotate(360deg)}
`;

//for title movement
const moveInLeft = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
`;

const heartBeat = keyframes`
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1.1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1.1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }`;

export const StyledHome = styled.div`
  /* border: 5px solid; */
  padding: 10px;
  /* animation: ${morph} 5s linear infinite, ${heartBeat} 5s ease-in-out infinite; */
  /* animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite; */
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* border: 5px solid; */
  padding: 2vw;
`;
export const StyledTitle = styled.h1`
  color: rgba(207, 47, 116);
  font-size: 5vw;
  animation: ${moveInLeft} 1s ease-in-out 0.1s both;
  padding-bottom: 2vw;
`;
export const StyledIntro = styled.div`
  p {
    color: black;
    font-size: 1.5rem;
    font-weight: 200;
    margin: 0;
  }
`;
export const StyledButtons = styled.div`
  margin-top: 5rem;
  min-width: 40vw;
`;
export const StyledImage = styled.img`
  position: absolute;
  bottom: 22vh;
  right: 10%;
  width: 25vw;
  /* border-radius: 50%; */
  animation: ${morph} 5s linear infinite, ${heartBeat} 50s ease-in-out infinite;
  border: 5px dotted;
  :hover {
    border-width: 10px;
  }

  /* border: 4mm ridge rgba(207, 47, 116); */
  /* clip-path: circle(); */
`;

export const StyledButton = styled.a`
  padding: 0.5rem 2.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
  font-weight: 500;
  letter-spacing: 0.08em;
  width: fit-content;
  border: none;
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
  background-color: ${({ theme }: StyledTheme) => theme.transparentLightGrey};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }: StyledTheme) => theme.darkPink};
    color: ${({ theme }: StyledTheme) => theme.softPink};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
