import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { devices } from '../../statics/devices';
import { Colors, colorTheme, StyledTheme } from '../../assets/common/color';

const { mobileS, mobileM, tabletS, tablet, laptop, laptopL, desktop, desktopL } = devices;

export const NavigationContainer = styled.nav`
  width: 100%;
  /* height: ${(props: { extendNavbar: boolean }) => (props.extendNavbar ? '100vh' : '80px')}; */
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  margin-bottom: 100px;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 2%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  /* margin-right: 100px; */
  /* margin-top: 20px; */
  padding-right: 2%;
`;

export const NavInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavLinkContainer = styled.div`
  display: flex;
`;

export const NavLink = styled(Link)`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: ${({ theme }: StyledTheme) => theme.styledText};
  @media (max-width: 700px) {
    display: none;
  }
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: ${({ theme }: StyledTheme) => theme.darkPurple};
  }
`;

export const NavLinkA = styled.a`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  text-decoration: none;
  margin: 10px;
  color: ${({ theme }: StyledTheme) => theme.styledText};
  @media (max-width: 700px) {
    display: none;
  }
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: ${({ theme }: StyledTheme) => theme.darkPurple};
  }
`;

export const NavLinkExtended = styled(Link)`
  color: ${({ theme }: StyledTheme) => theme.styledText};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const NavLinkExtendedA = styled.a`
  color: ${({ theme }: StyledTheme) => theme.styledText};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  max-width: 60px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  color: ${({ theme }: StyledTheme) => theme.styledText};
  font-size: 45px;
  cursor: pointer;
  border: none;

  @media (min-width: 700px) {
    display: none;
  }
`;
export const NavExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
