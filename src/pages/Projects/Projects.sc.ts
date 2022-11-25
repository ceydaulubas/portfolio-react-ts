import styled from 'styled-components';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';

export const StyledProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* margin-top: 3rem; */
  margin: 3rem;
`;

// export const StyledProject = styled.div`
//   display: flex;
//   flex-wrap: column;
//   width: 50%;
//   margin-top: 3rem;
//   border: 1px solid red;
//   background-color: rgba(255, 99, 71, 0.1);
// `;

// export const StyledTitle = styled.div`
//   color: ${({ theme }: StyledTheme) => theme.grey};
// `;

export const StyledTitle = styled.p`
  color: ${({ theme }: StyledTheme) => theme.grey};
  font-size: 1.2rem;
`;

export const StyledDescription = styled.p`
  color: ${({ theme }: StyledTheme) => theme.mediumRed};
  font-size: 1rem;
`;

// export const StyledImage = styled.img`
//   margin: 2px;
// `;
