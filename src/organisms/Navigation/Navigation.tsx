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

const { logo } = images;

const Navigation = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const { theme } = useContext(ThemeContext);

  const closeExtended = () => {
    setExtendNavbar(false);
  };

  return (
    <NavigationContainer extendNavbar={extendNavbar}>
      <NavInnerContainer>
        <LeftContainer>
          <Logo src={logo} alt='Ceyda Ulubas logo'></Logo>
        </LeftContainer>{' '}
        <RightContainer>
          <NavLinkContainer>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            {/* <NavLink to='/skills'>Skills</NavLink> */}
            <NavLink to='/contact'>Contact</NavLink>
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
          <NavLinkExtended to='/' onClick={() => closeExtended()}>
            Home
          </NavLinkExtended>
          <NavLinkExtended to='/about' onClick={() => closeExtended()}>
            About
          </NavLinkExtended>
          <NavLinkExtended to='/projects' onClick={() => closeExtended()}>
            Projects
          </NavLinkExtended>
          {/* <NavLinkExtended to='/skills' onClick={() => closeExtended()}>
            Skills
          </NavLinkExtended> */}
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
