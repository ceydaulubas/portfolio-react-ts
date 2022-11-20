import React from 'react';
// import { images } from '../../assets/common/links';
// const { businessPhoto } = images;

import { StyledHome, StyledTitle, StyledIntro, StyledButtons, StyledContent, StyledImage } from './Home.sc';

const Home = () => {
  return (
    <StyledHome>
      <StyledContent>
        <StyledTitle>Ceyda Ulubas</StyledTitle>
        <StyledIntro>
          <p>
            I am a <b>Fullstack Developer</b> who has willing to follow and learn new technologies and improve myself day by day.
          </p>
        </StyledIntro>
        <StyledButtons></StyledButtons>
      </StyledContent>
      <StyledImage
        src='https://res.cloudinary.com/dxqyvjf5r/image/upload/v1668542625/ceyda_portfolio/image/ceyda_photo_mrw3cz.jpg'
        alt='Ceyda Ulubas business photo'
      />
    </StyledHome>
  );
};

export default Home;
