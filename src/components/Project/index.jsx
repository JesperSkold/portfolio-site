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
import {FaGithub} from "@react-icons/all-files/fa/FaGithub"
import {FaExternalLinkAlt} from "@react-icons/all-files/fa/FaExternalLinkAlt"

const Project = ({ project }) => {
  return (
    <ProjectContainer key={project.title}>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <Description>{project.shortDescription}</Description>
        <LinkContainer>
          <Link to={project.slug}>
            <Button>Read More</Button>
          </Link>
          <Links>
            {project.deployedSite && (
              <a href={project.deployedSite} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
            <a href={project.repository} target="_blank" rel="noreferrer">
            <FaGithub />
            </a>
          </Links>
        </LinkContainer>
      </ProjectInfo>
      <Link to={project.slug}>
        <GatsbyImage image={getImage(project.thumbnail)} alt={`Image of Jesper's ${project.title} project`} />
      </Link>
    </ProjectContainer>
  )
}

export default Project
