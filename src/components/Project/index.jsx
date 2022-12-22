import React from "react"
import { Link } from "gatsby"
import {
  ProjectContainer,
  ProjectInfo,
  Description,
  LinkContainer,
  ProjectTitle,
  Links,
} from "./style"
import { Button } from "../styles/reusables"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Project = ({ project }) => {
  return (
    <ProjectContainer key={project.title}>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <Description>{project.shortDescription}</Description>
        <LinkContainer>
          <Button>Read more</Button>
          <Links>
            {project.deployedSite && (
              <Link to={project.deployedSite}>
                <span
                  className="material-symbols-outlined"
                  title="Deployed Site"
                >
                  open_in_new
                </span>
              </Link>
            )}
            <Link to={project.repository}>
              <span
                className="material-symbols-outlined"
                title="GitHub Repository"
              >
                folder_open
              </span>
            </Link>
          </Links>
        </LinkContainer>
      </ProjectInfo>
      <GatsbyImage image={getImage(project.thumbnail)} alt="" />
    </ProjectContainer>
  )
}

export default Project
