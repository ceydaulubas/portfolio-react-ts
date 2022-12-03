import React from 'react';
// import { Container, Wrapper, Row, Link } from './Socials.sc';
import { StyledSocials, NavLink } from './Socials.sc';
import { links, icons } from '../../assets/common/links';

import { ReactComponent as GithubIcon } from '../../assets/icons//githubIcon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons//linkedinIcon.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/emailIcon.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/mediumIcon.svg';

const { resume, email, linkedin, medium, github } = links;

const Socials = () => {
  return (
    <StyledSocials>
      <a href={github} target='_blank' rel='noopener noreferrer'>
        <GithubIcon />
      </a>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        <LinkedinIcon />
      </a>
      <NavLink to='/contact'>
        {' '}
        <EmailIcon />
      </NavLink>
      <a href={medium} target='_blank' rel='noopener noreferrer'>
        <MediumIcon />
      </a>
    </StyledSocials>
  );
};

export default Socials;
