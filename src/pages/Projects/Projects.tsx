import React from "react";
import { StyledProjects, StyledTitle, StyledText } from "./Projects.sc";
import { projects } from "../../assets/copy/projects";

import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../../assets/common/Button/Button";
interface Project {
  id: string;
  photo: string;
  title: string;
  year: string;
  description: string;
  stack: string;
  github: string;
  github2?: string;

  website?: string;
}

const Projects = () => {
  return (
    <StyledProjects>
      {projects.map((item: Project) => (
        <Card key={item.id} style={{ width: "35rem", marginBottom: "1rem", backgroundColor: "transparent", border: "white", borderStyle: "dotted" }}>
          <a href={item.github}>
            <Card.Img variant="top" src={item.photo}></Card.Img>
          </a>
          <Card.Body>
            <StyledTitle>
              <b>{item.title}</b>
            </StyledTitle>
            <StyledText>{item.description}</StyledText>
            <StyledText>
              <b>Tech stacks: </b>
              {item.stack}
            </StyledText>
            {/* <Card.Text>Made in {item.year}</Card.Text> */}
          </Card.Body>
          <Card.Body>
            {item.website ? <Button color={"grey"} link={item.website} text={"Website"} /> : ""}
            <Button color={"softPink"} link={item.github} text={"Github"} />
            {item.github2 ? <Button color={"grey"} link={item.github2} text={"Github2"} /> : ""}
          </Card.Body>
        </Card>
      ))}
    </StyledProjects>
  );
};

export default Projects;
