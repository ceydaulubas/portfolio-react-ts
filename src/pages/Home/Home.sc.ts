import styled, { keyframes } from "styled-components";

import { devices } from "../../statics/devices";
import { StyledTheme } from "../../assets/common/color";

const {
  mobileS,
  mobileM,
  tabletS,
  tablet,
  laptop,
  laptopL,
  desktop,
  desktopL,
} = devices;

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

export const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;

  @media (max-width: 768px) {
    margin: 5vw;
  }
`;

export const StyledContent = styled.div`
  width: 70%;
`;
export const StyledTitle = styled.h1`
  color: ${({ theme }: StyledTheme) => theme.styledTitle};
  font-size: 6vw;
  animation: ${moveInLeft} 1s ease-in-out 0.1s both;
  padding-bottom: 2vw;
`;
export const StyledText = styled.div`
  color: ${({ theme }: StyledTheme) => theme.styledText};
  font-size: 1.5rem;
  font-weight: 200;
  padding: 0.2vw;
`;

export const StyledImage = styled.img`
  width: 25vw;
  animation: ${morph} 5s linear infinite;
  border: 5px dotted pink;
`;
