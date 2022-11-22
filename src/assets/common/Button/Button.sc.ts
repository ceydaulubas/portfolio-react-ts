import styled, { css } from 'styled-components';
import { colors } from '../color';

const { softPink, mediumRed, darkPink, white, grey, darkGrey } = colors;

type StyledButtonProps = {
  color: 'softPink' | 'darkPink';
};

export const StyledButton = styled.a<StyledButtonProps>`
  z-index: 1;
  padding: 0.4rem 2.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${white};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-decoration: none;
  width: fit-content;
  margin-right: 4rem;
  border: none;
  ${({ color }) =>
    color === 'softPink' &&
    css`
      color: ${white};
      background: ${darkPink};

      &:hover {
        background: ${mediumRed};
        color: ${white};
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
      background-color: ${grey};
      color: ${white};
      &:hover {
        color: ${white};
        background-color: ${darkGrey};
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
      }
      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }
    `};
`;
