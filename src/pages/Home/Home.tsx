import React, { useState, useContext, useEffect } from 'react';
// import { images } from '../../assets/common/links';
// const { pinkPhoto } = images;
import Button from '../../assets/common/Button/Button';

import { StyledHome, StyledTitle, StyledIntro, StyledButtons, StyledContent, StyledImage, StyledButton } from './Home.sc';
import { ThemeContext } from '../../App';
import { links, images } from '../../assets/common/links';
import Typewriter from 'typewriter-effect';
const { resume } = links;
const { businessPhoto, pinkPhoto, logo, boardPhoto, view } = images;

const allImages: any = [
  'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1668542625/ceyda_portfolio/image/ceyda_photo_mrw3cz.jpg',
  'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669650023/ceyda_portfolio/image/views_ei8g2z.jpg',
  'https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416486/ceyda_portfolio/image/IMG_0047_ykcwzi.jpg',
];

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <StyledHome>
      <StyledContent>
        <StyledTitle>
          {' '}
          <Typewriter
            options={{
              strings: ['Hello', 'Hej', 'Hallo', 'Merhaba'],
              autoStart: true,
              loop: true,
            }}
          />
        </StyledTitle>
        <StyledIntro>
          <p>
            I'm <b>Ceyda Ulubas... </b>
          </p>

          <p>
            a self-motivated and enthusiastic software developer who changes her career, chasing her dream, and loves to learn and share what she has
            learned.
          </p>
        </StyledIntro>
      </StyledContent>
      {/* <StyledImage src={allImages[currentIndex]} alt='Ceyda Ulubas business photo' /> */}
      <StyledImage
        src='https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416480/ceyda_portfolio/image/IMG_0971_emshy7.jpg'
        alt='Ceyda Ulubas business photo'
      />
    </StyledHome>
  );
};

export default Home;
