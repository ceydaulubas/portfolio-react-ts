import React, { useState, useContext, useEffect } from 'react';

import { StyledHome, StyledTitle, StyledText, StyledContent, StyledImage } from './Home.sc';
import { ThemeContext } from '../../App';
import Typewriter from 'typewriter-effect';

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
        <StyledText>
          <p>
            I'm <b>Ceyda Ulubas... </b>
          </p>
          <p>
            a self-motivated and enthusiastic software developer who changes her career, chasing her dream, and loves to learn and share what she has
            learned.
          </p>
        </StyledText>
      </StyledContent>
      <StyledImage
        src='https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416480/ceyda_portfolio/image/IMG_0971_emshy7.jpg'
        alt='Ceyda Ulubas business photo'
      />
    </StyledHome>
  );
};

export default Home;
