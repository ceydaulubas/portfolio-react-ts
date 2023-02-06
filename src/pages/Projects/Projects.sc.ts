import styled from 'styled-components';
import { StyledTheme } from '../../assets/common/color';
import { devices } from '../../statics/devices';

const { laptop} = devices;

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
  color: ${({ theme }: StyledTheme) => theme.ProjectTitle};
  font-size: 1.2rem;
`;

export const StyledText = styled.p`
  color: ${({ theme }: StyledTheme) => theme.styledText};
  font-size: 1rem;
`;
