import React from 'react';
import { StyledAbout, StyledContent, StyledTitle, StyledTexts, StyledText, StyledImageOne, StyledImageTwo } from './About.sc';

import { images, icons } from '../../assets/common/links';
const { boardPhoto, view } = images;
const { react, nextjs, node, express, mongodb, github, gitlab, bitbucket, jira, aws, pm2 } = icons;

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
            Turbine) in June 2021. And I am currently developing mobile advertisement game projects using vanilla Javascript on Typescript based on
            react. In addition to daily tasks, I generally use MERN stack in projects where I create full stack micro sites.
          </StyledText>
          <StyledText>
            Technologies I use in my work:
            <ul>
              <li>
                Frontend:
                <img src={react} style={{ width: '25px' }}></img>
                <img src={nextjs} style={{ width: '25px' }}></img>
              </li>
              <li>
                Backend:
                <img src={node} style={{ width: '25px' }}></img>
                <img src={express} style={{ width: '25px' }}></img>
              </li>
              <li>
                Database:
                <img src={mongodb} style={{ width: '25px' }}></img>
              </li>
              <li>
                Deployment:
                <img src={aws} style={{ width: '25px' }}></img>
                <img src={pm2} style={{ width: '25px' }}></img>
              </li>
              <li>
                <img src={github} style={{ width: '25px' }}></img>
                <img src={gitlab} style={{ width: '25px' }}></img>
                <img src={bitbucket} style={{ width: '25px' }}></img>
                <img src={jira} style={{ width: '25px' }}></img>
              </li>
            </ul>
          </StyledText>

          <StyledText>
            I'm interested in creating new projects or researching new technologies, and outside of work you can find me reading psychology books,
            doing pilates, exploring new places or snowboarding in the winter.
          </StyledText>
        </StyledTexts>
        {/* <StyledImageOne src={view} alt='view ' />
        <StyledImageTwo src={boardPhoto} alt='snowboarding ' /> */}
      </StyledContent>
    </StyledAbout>
  );
};

export default About;
