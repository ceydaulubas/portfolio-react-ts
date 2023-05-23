import styled from 'styled-components';
import { StyledTheme } from '../../assets/common/color';
import { devices } from '../../statics/devices';

const { laptop, tabletS } = devices;

export const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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


export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  @media (${laptop}) {
    flex-direction: column;
  }
`;

export const StyledFilterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (${tabletS}) {
    width: 100%;
    justify-content: center;
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  justify-content: start;
`;

export const StyledSelect = styled.select`
  background-color: ${({ theme }: StyledTheme) => theme.styledText};
  border: none;
  padding: 10px;
  margin: 10px;
  color: ${({ theme }: StyledTheme) => theme.ProjectTitle};
  cursor: pointer;
  option {
    color: ${({ theme }: StyledTheme) => theme.ProjectTitle};
  }
  border-radius: 0.4rem;
`;

export const StyledParagraph = styled.p`
padding-top:1rem;
  font-size: 1.5rem;
  color: ${({ theme }: StyledTheme) => theme.styledText};
`;