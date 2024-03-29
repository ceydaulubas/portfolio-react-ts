import React, { useState, useContext } from "react";
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
  NavLinkA,
  NavLinkExtendedA,
} from "./Navigation.sc";
import { images, links } from "../../assets/common/links";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import { ThemeContext } from "../../App";
const { resume } = links;

const { logoDark, logoLight } = images;

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
          {theme === "dark" ? <Logo src={logoDark} alt="Ceyda Ulubas logo"></Logo> : <Logo src={logoLight} alt="Ceyda Ulubas logo"></Logo>}
        </LeftContainer>{" "}
        <RightContainer>
          <NavLinkContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/articles">Articles</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLinkA href={resume} download="MyExampleDoc" target="_blank" rel="noreferrer">
              Resume
            </NavLinkA>
            <NavLink to="/">
              <ThemeToggle></ThemeToggle>
            </NavLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavLinkContainer>
        </RightContainer>
      </NavInnerContainer>
      {extendNavbar && (
        <NavExtendedContainer>
          <NavLinkExtended to="/" onClick={() => closeExtended()}>
            Home
          </NavLinkExtended>
          <NavLinkExtended to="/about" onClick={() => closeExtended()}>
            About
          </NavLinkExtended>
          <NavLinkExtended to="/projects" onClick={() => closeExtended()}>
            Projects
          </NavLinkExtended>
          <NavLinkExtended to="/articles" onClick={() => closeExtended()}>
            Articles
          </NavLinkExtended>
          <NavLinkExtended to="/contact" onClick={() => closeExtended()}>
            Contact
          </NavLinkExtended>
          <NavLinkExtendedA href={resume} target="_blank" rel="noreferrer" onClick={() => closeExtended()}>
            Resume
          </NavLinkExtendedA>
          <NavLinkExtended to="/">
            <ThemeToggle></ThemeToggle>
          </NavLinkExtended>
        </NavExtendedContainer>
      )}{" "}
    </NavigationContainer>
  );
};

export default Navigation;

/* @media (max-width: ${devices.mobileM}) {
    display: none;
  } */
