import React from "react";
import { StyledAbout, StyledContent, StyledTitle, StyledTexts, StyledText, StyledImageOne, StyledImageTwo, StyledTechStack, StyleCircle } from "./About.sc";

import { images, icons } from "../../assets/common/links";
const { boardPhoto, view } = images;
const { react, nextjs, node, express, mongodb, github, gitlab, bitbucket, jira, aws, pm2 } = icons;

let arr = [];
arr.push(icons);

const About = () => {
  return (
    <StyledAbout>
      <StyledContent>
        <StyledTitle>About Me...</StyledTitle>
        <StyledTexts>
          <StyledText>
            I was born in Kayseri, Turkey in 1993, I moved to Istanbul in 2016 after enrolling in the International Trade and Business program at Yeditepe
            University. During my university years, I completed internships at several companies, including Shell, Havas, Anadolu Bilişim, and DEİK, which
            provided me with invaluable experience and insights into the workings of various businesses.
          </StyledText>
          <StyledText>
            After graduating, I began working in brand management at Yataş Grup, but soon felt limited by the repetitive nature of my role and lack of
            opportunities for growth and development. In search of new experiences, I left my job and spent several months in Amsterdam, attending events and
            observing global business practices to gain insight into my own career aspirations.
          </StyledText>
          <StyledText>
            Upon my return, I decided to pursue a career in web development and enrolled in Ironhack's Web Development bootcamp at the end of 2020. Over the
            course of the intensive 2.5-3 month program, I honed my skills by working on lab projects and creating three full-stack projects, including one
            using the MERN stack.
          </StyledText>
          <StyledText>
            Following the completion of my bootcamp, I continued to develop my technical skills by working on personal projects. In June 2021, I joined AdColony
            as a Jr. Software Engineer, where I developed games and REST API projects using pure JavaScript and TypeScript on the company's proprietary game
            engine.
          </StyledText>
          <StyledText>
            In addition to my daily responsibilities, I also worked on two full-stack projects to streamline internal processes and create customer surveys and
            reports using the MERN stack, and Next.js for the first time. These projects were deployed using AWS services such as EC2 and S3, which I enjoyed
            using so much that I even built a website for a friend's birthday gift using Route 53 and a domain.
          </StyledText>
          <StyledText>
            Finally, as you can see in my CV, Digital Turbine acquired AdColony in June 2022 and in addition to the works I wrote above, I tested some functions
            of the game engine using Jest during this time. I left Digital Turbine at the beginning of February 2023 and now I continue to improve myself. In
            general, touching both the backend and the frontend of a project excites me. However, I can say that I have recently focused on front-end projects
            and subjects because of my desire to focus on a point and develop my knowledge there and become an expert on that subject.
          </StyledText>
          <StyledText>
            Technologies that I used:
            <StyledTechStack>
              <StyleCircle>
                <img src={react} alt="react" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={nextjs} alt="nextjs" style={{ width: "35px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={node} alt="node" style={{ width: "32px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={express} alt="express" style={{ width: "32px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={mongodb} alt="mongodb" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={github} alt="github" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={gitlab} alt="gitlab" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={bitbucket} alt="bitbucket" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={jira} alt="jira" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={aws} alt="aws" style={{ width: "30px" }}></img>
              </StyleCircle>
              <StyleCircle>
                <img src={pm2} alt="pm2" style={{ width: "35px" }}></img>
              </StyleCircle>
            </StyledTechStack>
          </StyledText>

          <StyledText>
            I'm interested in creating new projects or researching new technologies, and outside of work you can find me reading psychology books, doing
            pilates, exploring new places, taking pictures in nature or snowboarding in the winter.
          </StyledText>
        </StyledTexts>
        <a href="https://www.instagram.com/ulubas.c/">
          <StyledImageOne src={view} alt="view " />
          <StyledImageTwo src={boardPhoto} alt="snowboarding " />
        </a>
      </StyledContent>
    </StyledAbout>
  );
};

export default About;
