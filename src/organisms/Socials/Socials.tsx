import { useContext } from 'react';
import { StyledSocials, NavLink } from './Socials.sc';
import { links } from '../../assets/common/links';
import { ThemeContext } from '../../App';

import { ReactComponent as GithubIconWhite } from '../../assets/icons//githubIconWhite .svg';
import { ReactComponent as LinkedinIconWhite } from '../../assets/icons//linkedinIconWhite .svg';
import { ReactComponent as EmailIconWhite } from '../../assets/icons/emailIconWhite .svg';
import { ReactComponent as MediumIconWhite } from '../../assets/icons/mediumIconWhite .svg';

import { ReactComponent as GithubIconBlack } from '../../assets/icons//githubIconBlack.svg';
import { ReactComponent as LinkedinIconBlack } from '../../assets/icons//linkedinIconBlack.svg';
import { ReactComponent as EmailIconBlack } from '../../assets/icons/emailIconBlack.svg';
import { ReactComponent as MediumIconBlack } from '../../assets/icons/mediumIconBlack.svg';

const { resume, email, linkedin, medium, github } = links;

const Socials = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledSocials>
      <a href={github} target='_blank' rel='noopener noreferrer'>
        {theme == 'light' ? <GithubIconBlack /> : <GithubIconWhite />}
      </a>
      <a href={linkedin} target='_blank' rel='noopener noreferrer'>
        {theme == 'light' ? <LinkedinIconBlack /> : <LinkedinIconWhite />}
      </a>
      <NavLink to='/contact'> {theme == 'light' ? <EmailIconBlack /> : <EmailIconWhite />}</NavLink>
      <a href={medium} target='_blank' rel='noopener noreferrer'>
        {theme == 'light' ? <MediumIconBlack /> : <MediumIconWhite />}
      </a>
    </StyledSocials>
  );
};

export default Socials;
