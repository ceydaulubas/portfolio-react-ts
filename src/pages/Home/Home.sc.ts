import styled from 'styled-components';

import { devices } from '../../statics/devices';

const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

export const StyledHome = styled.div`
  margin-top: 50px;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 5%;
`;
export const StyledTitle = styled.h1`
  color: rgba(207, 47, 116);
  font-size: 3rem;
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
  bottom: 320px;
  right: 20%;
  width: 20vw;
  /* border: 4mm ridge rgba(207, 47, 116); */
  /* clip-path: circle(); */
`;
