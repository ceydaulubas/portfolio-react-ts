import styled from 'styled-components';
// import { colors } from './assets/common/color';
// const { darkPink, softPink } = colors;

import { Colors, colorTheme, StyledTheme } from './assets/common/color';

export const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  padding: 0 100px;
  background-image: ${({ theme }: StyledTheme) => theme.light};
  height: 100%;

  color: ${({ theme }: StyledTheme) => theme.darkGrey};
`;
