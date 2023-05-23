import styled, { css } from 'styled-components';
import { StyledTheme } from '../color';
import { devices } from '../../../statics/devices';
const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

type StyledButtonProps = {
  color: 'softPink' | 'grey';
};

export const StyledButton = styled.a<StyledButtonProps>`
 display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 0.4rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${({ theme }: StyledTheme) => theme.softPink};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-decoration: none;
  width:100px;
  margin-right: 2rem;
  border: none;
  cursor: pointer;
  ${({ color }) =>
    color === 'softPink' &&
    css`
      color: ${({ theme }: StyledTheme) => theme.styledText};

      background: ${({ theme }: StyledTheme) => theme.styledTitle};

      &:hover {
        background: ${({ theme }: StyledTheme) => theme.darkPurple};
        color: ${({ theme }: StyledTheme) => theme.white};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }
    `}
  ${({ color }) =>
    color === 'grey' &&
    css`
      background: #fff1fa;
      color: ${({ theme }: StyledTheme) => theme.styledTitle};
      &:hover {
        color: ${({ theme }: StyledTheme) => theme.styledText};
        background-color: ${({ theme }: StyledTheme) => theme.darkPurple};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        background-color: ${({ theme }: StyledTheme) => theme.darkTitle};
      }
    `};

  @media (${tabletS}) {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
