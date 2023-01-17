import styled from 'styled-components';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';
import { devices } from '../../statics/devices';
const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

export const StyledContactcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledContactTitle = styled.h1`
  color: ${({ theme }: StyledTheme) => theme.contactTitle};
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 3rem;
`;

export const StyledContactFormInput = styled.input`
  margin: 0.2rem 0;
  border: 2px dotted ${({ theme }: StyledTheme) => theme.styledText};
  border-radius: 0.1rem;
  padding-left: 1rem;
  width: 30vw;
  background-color: transparent;
  color: ${({ theme }: StyledTheme) => theme.styledText};
  &::placeholder {
    color: ${({ theme }: StyledTheme) => theme.styledText};
  }

  @media (max-width: 700px) {
    width: 60vw;
    margin: 0;
  }
`;

export const StyledContactFormTextarea = styled.textarea`
  margin: 1rem 0 1rem 0;
  border: 2px dotted ${({ theme }: StyledTheme) => theme.styledText};
  border-radius: 0.1rem;
  padding-left: 1rem;
  width: 30vw;
  background-color: transparent;
  color: ${({ theme }: StyledTheme) => theme.styledText};
  &::placeholder {
    color: ${({ theme }: StyledTheme) => theme.styledText};
  }

  @media (max-width: 700px) {
    width: 60vw;
    margin: 0;
  }
`;

export const StyledButton = styled.button`
  padding: 0.5rem 2.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.4rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  width: fit-content;
  border: none;
  color: ${({ theme }: StyledTheme) => theme.styledTitle};
  background-color: ${({ theme }: StyledTheme) => theme.contactButtonBackground};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }: StyledTheme) => theme.styledTitle};
    color: ${({ theme }: StyledTheme) => theme.styledText};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
  }
  &:active {
    transform: translateY(-2px);
    background-color: ${({ theme }: StyledTheme) => theme.darkTitle};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
