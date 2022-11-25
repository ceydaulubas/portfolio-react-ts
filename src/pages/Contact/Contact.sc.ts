import styled from 'styled-components';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';

export const StyledContactcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid black; */
`;

export const StyledContactTitle = styled.h1`
  color: ${({ theme }: StyledTheme) => theme.grey};
  margin: 6rem 0 3rem 0;
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
`;

export const StyledContactFormInput = styled.input`
  margin: 0.2rem 0;
  border: 2px dashed ${({ theme }: StyledTheme) => theme.darkPink};
  border-radius: 0.1rem;
  padding-left: 1rem;
  width: 30vw;
  background-color: ${({ theme }: StyledTheme) => theme.transparentLightGrey};
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
  &::placeholder {
    color: ${({ theme }: StyledTheme) => theme.grey};
  }
`;

export const StyledContactFormTextarea = styled.textarea`
  margin: 1rem 0 1rem 0;
  border: 2px dashed ${({ theme }: StyledTheme) => theme.darkPink};
  border-radius: 0.1rem;
  padding-left: 1rem;
  width: 30vw;
  background-color: ${({ theme }: StyledTheme) => theme.transparentLightGrey};
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
  &::placeholder {
    color: ${({ theme }: StyledTheme) => theme.grey};
  }
`;

export const StyledButton = styled.button`
  padding: 0.5rem 2.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
  font-weight: 500;
  letter-spacing: 0.08em;
  width: fit-content;
  border: none;
  color: ${({ theme }: StyledTheme) => theme.darkGrey};
  background-color: ${({ theme }: StyledTheme) => theme.transparentLightGrey};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }: StyledTheme) => theme.darkPink};
    color: ${({ theme }: StyledTheme) => theme.softPink};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }
  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
