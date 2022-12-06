import React from 'react';
import {
  StyledAbout,
  StyledContent,
  StyledTitle,
  StyledTexts,
  StyledText,
  StyledImageOne,
  StyledImageTwo,
  StyledTechStack,
  StyleCircle,
} from './About.sc';

import { images, icons } from '../../assets/common/links';
const { boardPhoto, view } = images;
const { react, nextjs, node, express, mongodb, github, gitlab, bitbucket, jira, aws, pm2 } = icons;

let arr = [];
arr.push(icons);
console.log('arr', arr);

const About = () => {
  return (
    <StyledAbout>
      <StyledContent>
        <StyledTitle>About Me</StyledTitle>
        <StyledTexts>
          <StyledText>
            I graduated from Yeditepe University International Business Administration and Trade in 2016. After 2.5 years of brand management
            experience, I joined Ironhack Amsterdam's web development Bootcamp at the end of December 2020. My decision to make this leap can be
            attributed to my deep desire to improve myself in global tech and to create stunning web pages.
          </StyledText>
          <StyledText>
            After completing my Bootcamp, I started my first job in the tech world as a Jr. software engineer at Adcolony (acquired by Digital
            Turbine) in June 2021. And I am currently developing mobile advertisement game projects using vanilla Javascript or Typescript based on
            React. In addition to daily tasks, I generally use MERN stack in projects where I create full stack micro sites.
          </StyledText>
          <StyledText>
            Technologies I use in my work:
            <StyledTechStack>
              <StyleCircle>
                <img src={react} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={nextjs} style={{ width: '35px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={node} style={{ width: '32px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={express} style={{ width: '32px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={mongodb} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={github} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={gitlab} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={bitbucket} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={jira} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={aws} style={{ width: '30px' }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={pm2} style={{ width: '35px' }}></img>
              </StyleCircle>
            </StyledTechStack>
          </StyledText>

          <StyledText>
            I'm interested in creating new projects or researching new technologies, and outside of work you can find me reading psychology books,
            doing pilates, exploring new places, taking pictures in nature or snowboarding in the winter.
          </StyledText>
        </StyledTexts>
        <StyledImageOne src={view} alt='view ' />
        <StyledImageTwo src={boardPhoto} alt='snowboarding ' />
      </StyledContent>
    </StyledAbout>
  );
};

export default About;
