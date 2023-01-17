import styled, { keyframes } from 'styled-components';

import { devices } from '../../statics/devices';
import { StyledTheme } from '../../assets/common/color';

const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

const morph = keyframes`
0% {border-radius: 5px}
50% {border-radius: 50px}
100% {border-radius: 5px}
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
  padding: 10px;
  margin-bottom: 150px;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2vw;

  /*Tablet size for width*/
  @media (${devices.tablet}) {
    width: 100%;
  }
`;
export const StyledTitle = styled.h1`
  color: ${({ theme }: StyledTheme) => theme.styledTitle};
  font-size: 5vw;
  animation: ${moveInLeft} 1s ease-in-out 0.1s both;
  padding-bottom: 2vw;
`;
export const StyledText = styled.div`
  p {
    color: ${({ theme }: StyledTheme) => theme.styledText};
    font-size: 1.5rem;
    font-weight: 200;
    margin: 0;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  bottom: 22vh;
  right: 10%;
  width: 25vw;
  animation: ${morph} 5s linear infinite, ${heartBeat} 50s ease-in-out infinite;
  border: 5px dotted;
  :hover {
    border-width: 7px;
  }

  /* border: 4mm ridge rgba(207, 47, 116); */
  /* clip-path: circle(); */
`;
