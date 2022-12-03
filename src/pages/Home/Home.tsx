import React, { useState, useContext } from 'react';
// import { images } from '../../assets/common/links';
// const { pinkPhoto } = images;
import Button from '../../assets/common/Button/Button';

import { StyledHome, StyledTitle, StyledIntro, StyledButtons, StyledContent, StyledImage } from './Home.sc';
import { ThemeContext } from '../../App';
import { CSSProperties } from 'react';
// interface AppTheme {
//   dark: CSSProperties;
//   light: CSSProperties;
// }

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <StyledHome>
      <StyledContent>
        <StyledTitle>Hey!</StyledTitle>
        <StyledIntro>
          <p>
            I'm <b>Ceyda Ulubas </b>
          </p>
          <br />
          <p> self-motivated and enthusiastic software developer.</p>
        </StyledIntro>
        <StyledButtons>
          <Button color={'softPink'} link='' text={'Resume'} />
          <Button color={'darkPink'} link='' text={'Contact'} />
        </StyledButtons>
      </StyledContent>
      {/* <StyledImage
        src='https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669031997/ceyda_portfolio/image/IMG_8262_umtytc.jpg'
        alt='Ceyda Ulubas business photo'
      /> */}
      {/* <StyledImage
        src='https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416486/ceyda_portfolio/image/MVIMG_20180506_144120_wwuyzc.jpg'
        alt='Ceyda Ulubas business photo'
      /> */}
      <StyledImage
        src='https://res.cloudinary.com/dxqyvjf5r/image/upload/v1669416480/ceyda_portfolio/image/IMG_0971_emshy7.jpg'
        alt='Ceyda Ulubas business photo'
      />
    </StyledHome>
  );
};

export default Home;
