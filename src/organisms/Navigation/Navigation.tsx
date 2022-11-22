import React, { useState, useContext } from 'react';
import {
  NavigationContainer,
  LeftContainer,
  RightContainer,
  NavInnerContainer,
  NavExtendedContainer,
  NavLinkContainer,
  NavLink,
  Logo,
  OpenLinksButton,
  NavLinkExtended,
} from './Navigation.sc';
import { images } from '../../assets/common/links';
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle';
import { ThemeContext } from '../../App';

import { CSSProperties } from 'react';

const { logo } = images;

interface AppTheme {
  dark: CSSProperties;
  light: CSSProperties;
  common: CSSProperties;
}

const Navigation = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const { theme } = useContext(ThemeContext);
  const headerStyle: AppTheme = {
    dark: {
      backgroundColor: 'black',
      color: 'blue',
    },
    light: {
      // backgroundColor: '#e0e0e0',
      backgroundColor: 'transparent',
      color: '#e2216a',
    },
    common: {
      transition: 'all 1s ease',
    },
  };

  const themeStyle = {
    ...(theme === 'light' ? headerStyle.light : headerStyle.dark),
    ...headerStyle.common,
  };

  return (
    <NavigationContainer extendNavbar={extendNavbar} style={themeStyle}>
      <NavInnerContainer>
        <LeftContainer>
          <Logo src={logo} alt='Ceyda Ulubas logo'></Logo>
        </LeftContainer>{' '}
        <RightContainer>
          <NavLinkContainer>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/cv'>CV</NavLink>
            <NavLink to='/'>
              <ThemeToggle></ThemeToggle>
            </NavLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavLinkContainer>
        </RightContainer>
      </NavInnerContainer>
      {extendNavbar && (
        <NavExtendedContainer>
          <NavLinkExtended to='/'>Home</NavLinkExtended>
          <NavLinkExtended to='/about'>About</NavLinkExtended>
          <NavLinkExtended to='/projects'>Projects</NavLinkExtended>
          <NavLinkExtended to='/skills'>Skills</NavLinkExtended>
          <NavLinkExtended to='/cv'>CV</NavLinkExtended>
          <NavLinkExtended to='/'>
            <ThemeToggle></ThemeToggle>
          </NavLinkExtended>
        </NavExtendedContainer>
      )}{' '}
    </NavigationContainer>
  );
};

export default Navigation;

/* @media (max-width: ${devices.mobileM}) {
    display: none;
  } */
