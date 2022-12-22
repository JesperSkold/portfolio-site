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
          <Link to={project.slug}>
            <Button>Read more</Button>
          </Link>
          <Links>
            {project.deployedSite && (
              <a href={project.deployedSite}>
                <span
                  className="material-symbols-outlined"
                  title="Deployed Site"
                >
                  open_in_new
                </span>
              </a>
            )}
            <a href={project.repository}>
              <span
                className="material-symbols-outlined"
                title="GitHub Repository"
              >
                folder_open
              </span>
            </a>
          </Links>
        </LinkContainer>
      </ProjectInfo>
      <Link to={project.slug}>
        <GatsbyImage image={getImage(project.thumbnail)} alt="" />
      </Link>
    </ProjectContainer>
  )
}

export default Project
