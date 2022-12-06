import styled from 'styled-components';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';

export const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  /* margin: 3rem; */
  padding-left: 2%;
  padding-right: 2%;
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
