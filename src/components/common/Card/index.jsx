import React from 'react'
import { CardContainer, Header, Media, Content, Actions, TagCapsule, Meta, MetaCapsule, Tags } from './styles'
// Icons
import GithubIcon from 'Static/icons/github.svg'
import LinkIcon from 'Static/icons/link.svg'

export const Card = ({ project }) => (
    <CardContainer>
        <Header>
            <h4>{project.title}</h4>
        </Header>
        <Media>
            <img src={project.image} alt={project.title} />
            <Meta>
                <MetaCapsule>{project.type}</MetaCapsule>
                <MetaCapsule>{project.year}</MetaCapsule>
            </Meta>
        </Media>
        <Content>
            <p>{project.description}</p>
            <Tags>
                {project.madeWidth.map((typeTag) => (
                    <TagCapsule>{typeTag}</TagCapsule>
                ))}
            </Tags>
        </Content>
        <Actions>
            {project.url &&
                <div>
                    <a aria-label="Link" href={project.url} target="_blank">
                        <img src={LinkIcon} width="24" alt="Project Website" />
                    </a>
                </div>
            }
            {project.repoUrl &&
                <div>
                    <a href={project.repoUrl} target="_blank">
                        <img src={GithubIcon} width="24" alt="Github" />
                    </a>
                </div>
            }
        </Actions>
    </CardContainer>
)