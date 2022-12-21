import styled, { css } from 'styled-components';
import { StyledTheme } from '../color';
import { devices } from '../../../statics/devices';
const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

type StyledButtonProps = {
  color: 'softPink' | 'darkPink';
};

export const StyledButton = styled.a<StyledButtonProps>`
  z-index: 1;
  padding: 0.4rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${({ theme }: StyledTheme) => theme.softPink};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-decoration: none;
  width: fit-content;
  margin-right: 2rem;
  border: none;
  ${({ color }) =>
    color === 'softPink' &&
    css`
      color: ${({ theme }: StyledTheme) => theme.white};

      background: ${({ theme }: StyledTheme) => theme.darkPink};

      &:hover {
        background: ${({ theme }: StyledTheme) => theme.mediumRed};
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
    color === 'darkPink' &&
    css`
      background: ${({ theme }: StyledTheme) => theme.grey};
      color: ${({ theme }: StyledTheme) => theme.white};
      &:hover {
        color: ${({ theme }: StyledTheme) => theme.white};
        background: ${({ theme }: StyledTheme) => theme.darkGrey};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }
    `};

  @media (${tabletS}) {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
