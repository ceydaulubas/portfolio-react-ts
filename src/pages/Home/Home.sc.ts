import styled from 'styled-components';

import { devices } from '../../statics/devices';

const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

// export const HomeContainer = styled.div`
//   display: grid;
//   justify-items: start;

// `;

export const StyledHome = styled.div``;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const StyledTitle = styled.h1`
  color: darkmagenta;
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
  bottom: 220px;
  right: 10%;
  width: 24%;
`;
