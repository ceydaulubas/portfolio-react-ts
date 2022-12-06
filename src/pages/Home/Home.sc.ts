import styled, { keyframes } from 'styled-components';

import { devices } from '../../statics/devices';

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

export const StyledHome = styled.div`
  margin-top: 50px;
  border: 5px solid;
  margin: auto;
  width: 50%;
  padding: 10px;
  /* animation: ${morph} 1s linear infinite, ${spin} 1s ease-in-out infinite; */
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  padding: 2vw;
`;
export const StyledTitle = styled.h1`
  color: rgba(207, 47, 116);
  font-size: 10rem;
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
  bottom: 45vh;
  right: 35%;
  width: 15vw;
  border-radius: 50%;
  border: 5px dotted;
  :hover {
    border-width: 10px;
  }

  /* border: 4mm ridge rgba(207, 47, 116); */
  /* clip-path: circle(); */
`;
