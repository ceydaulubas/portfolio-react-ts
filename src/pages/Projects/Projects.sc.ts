import styled from 'styled-components';
import { StyledTheme } from '../../assets/common/color';
import { devices } from '../../statics/devices';

const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

export const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  padding-left: 2%;
  padding-right: 2%;

  @media (${laptop}) {
    justify-content: center;
    align-items: center;
  }
`;

export const StyledTitle = styled.p`
  color: ${({ theme }: StyledTheme) => theme.grey};
  font-size: 1.2rem;
`;

export const StyledDescription = styled.p`
  color: ${({ theme }: StyledTheme) => theme.mediumRed};
  font-size: 1rem;
`;

export const Cardi = styled.div`
  width: 30rem;
  margin-bottom: 1rem;
  background-color: white;
`;
