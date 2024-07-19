import React from "react";
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
} from "./About.sc";

import { images, icons } from "../../assets/common/links";
const { boardPhoto, view } = images;
const {
  react,
  redux,
  nextjs,
  node,
  express,
  mongodb,
  github,
  gitlab,
  bitbucket,
  jira,
  aws,
  pm2,
} = icons;

const techStack = [
  { src: react, alt: "react", width: "30px" },
  { src: redux, alt: "redux", width: "33px" },
  { src: nextjs, alt: "nextjs", width: "35px" },
  { src: node, alt: "node", width: "32px" },
  { src: express, alt: "express", width: "32px" },
  { src: mongodb, alt: "mongodb", width: "30px" },
  { src: github, alt: "github", width: "30px" },
  { src: gitlab, alt: "gitlab", width: "30px" },
  { src: bitbucket, alt: "bitbucket", width: "30px" },
  { src: jira, alt: "jira", width: "30px" },
  { src: aws, alt: "aws", width: "30px" },
  { src: pm2, alt: "pm2", width: "35px" },
];

const About = () => {
  return (
    <StyledAbout>
      <StyledContent>
        <StyledTitle>About Me...</StyledTitle>
        <StyledTexts>
          <StyledText>
            I was born in Kayseri, Turkey in 1993. In 2011, I moved to Istanbul
            to enroll in the International Trade and Business program at
            Yeditepe University. During my university years, I gained invaluable
            experience through internships at several companies, including
            Shell, Havas, Anadolu Bilişim, and DEİK, which provided me with
            insights into the workings of various businesses.
          </StyledText>
          <StyledText>
            After graduating, I started working in brand management at Yataş
            Grup. However, I soon felt limited by the repetitive nature of my
            role and the lack of opportunities for growth. Seeking new
            experiences, I left my job and spent several months in Amsterdam,
            attending events and observing global business practices to gain
            insights into my career aspirations.
          </StyledText>
          <StyledText>
            Upon my return, I decided to pursue a career in web development and
            enrolled in Ironhack's Web Development bootcamp at the end of 2020.
            Over the course of the intensive 2.5-3 month program, I honed my
            skills by working on lab projects and creating three full-stack
            projects, including one using the MERN stack.
          </StyledText>
          <StyledText>
            After completing the bootcamp, I continued to develop my technical
            skills through personal projects. In June 2021, I joined AdColony as
            a Software Developer, where I developed games and REST API projects
            using pure JavaScript and TypeScript on the company's proprietary
            game engine. In addition to developing gamified digital ad
            solutions, I worked on several internal projects as a full-stack
            developer, primarily using the MERN stack and deploying on AWS
            services like EC2 and S3.
          </StyledText>
          <StyledText>
            Following the acquisition of AdColony by Digital Turbine in June
            2022, I expanded my skills by testing some functions of the game
            engine using Jest. I left Digital Turbine in early February 2023 to
            continue improving my skills. Although I enjoy working on both the
            backend and frontend of projects, I have recently focused on
            frontend development to deepen my knowledge and expertise in this
            area.
          </StyledText>
          <StyledText>
            In July 2023, I began my second role in the IT sector as a Frontend
            Developer at NTT Data Business Solutions, where I am currently
            employed. I am involved in a project for one of Turkey's leading
            companies to manage OKR systems. Here, I develop the project using
            React.js, Redux, and Less. I enjoy working in an Agile environment
            with two-week sprints. The project is live, so I must always be
            prepared to fix bugs, which has significantly enhanced my skills.
          </StyledText>
          <StyledText>
            Technologies that I used:
            <StyledTechStack>
              {techStack.map((tech) => (
                <StyleCircle key={tech.alt}>
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    style={{ width: tech.width }}
                  />
                </StyleCircle>
              ))}
            </StyledTechStack>
          </StyledText>

          <StyledText>
            Outside of work, I have been practicing Pilates twice a week for the
            past two years without interruption. I love discovering new places
            and dream of traveling the world. Additionally, I enjoy writing
            about what I learn and sharing it with others, which I do by
            publishing articles on Medium from time to time. I also take notes
            for a book I hope to publish in the future.
          </StyledText>
          <StyledText>
            In all aspects of my life, I strive to grow and learn continuously,
            embracing new challenges and opportunities with enthusiasm.
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
