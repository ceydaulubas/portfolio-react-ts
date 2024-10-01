import React, { useState, useEffect } from "react";
import { StyledProjects, StyledTitle, StyledText, StyledHeader, StyledFilterButtons, ButtonWrapper, StyledSelect, StyledParagraph } from "./Projects.sc";
import { projects } from "../../assets/copy/projects";

import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "../../assets/common/Button/Button";
interface Project {
  id: string;
  photo: string;
  title: string;
  year: number;
  description: string;
  stack: string;
  github: string;
  github2?: string;
  npm?: string;
  website?: string;
  type: string;
}

function getYears(start: number, end: number): number[] {
  const years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
}

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedType, setSelectedType] = useState("All");

  const filterProjects = () => {
    let result = projects;

    if (selectedType !== "All") {
      result = result.filter((project: Project) => project.type === selectedType);
    }

    if (selectedYear !== 0) {
      result = result.filter((project: Project) => project.year === selectedYear);
    }

    setFilteredProjects(result);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    filterProjects();
  }, [selectedType, selectedYear]);

  return (
    <div>
      <StyledHeader>
        <StyledFilterButtons>
          <Button color={"grey"} text={"All"} onClick={() => handleTypeChange("All")} />
          <Button color={"grey"} text={"FullStack"} onClick={() => handleTypeChange("FullStack")} />
          <Button color={"grey"} text={"Frontend"} onClick={() => handleTypeChange("Frontend")} />
          <Button color={"grey"} text={"Game"} onClick={() => handleTypeChange("Game")} />
        </StyledFilterButtons>

        <StyledFilterButtons>
          <StyledParagraph>
            <b>Filter by Year:</b>
          </StyledParagraph>
          <StyledSelect value={selectedYear} onChange={(e) => handleYearChange(Number(e.target.value))}>
            <option value={0}>All Year</option>
            {getYears(2020, new Date().getFullYear()).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </StyledSelect>
        </StyledFilterButtons>
      </StyledHeader>
      <StyledProjects>
        {filteredProjects.map((item: Project) => (
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
              <Card.Text>Made in {item.year}</Card.Text>
            </Card.Body>
            <Card.Body>
              <ButtonWrapper>
                {item.website ? <Button color={"grey"} link={item.website} text={"Website"} /> : ""}
                <Button color={"softPink"} link={item.github} text={"Github"} />
                {item.github2 ? <Button color={"grey"} link={item.github2} text={"Github2"} /> : ""}
                {item.npm ? <Button color={"grey"} link={item.npm} text={"Npm"} /> : ""}
                
              </ButtonWrapper>
            </Card.Body>
          </Card>
        ))}
      </StyledProjects>
    </div>
  );
};

export default Projects;
