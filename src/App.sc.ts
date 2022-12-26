import styled from 'styled-components';
import { devices } from './statics/devices';

import { StyledTheme } from './assets/common/color';

export const StyledApp = styled.div`
  margin: 0;
  padding: 0 100px;
  background-image: ${({ theme }: StyledTheme) => theme.light};
  /* border: 3px solid palevioletred; */
  min-height: 100vh;
  color: ${({ theme }: StyledTheme) => theme.styledText};

  @media (${devices.tabletS}) {
    padding: 0;
  }
`;
