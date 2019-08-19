import React from 'react'
import { CardContainer, Header, Media, Content, Actions, TagCapsule, Meta, MetaCapsule, Tags } from './styles'
import ReactModal from 'react-modal'
import { Button } from 'Common'
// Icons
import GithubIcon from 'Static/icons/github.svg'
import LinkIcon from 'Static/icons/link.svg'

ReactModal.setAppElement('#___gatsby');

export class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
        }
    }
    handleModalOpen = event => {
        // console.log('handleModalOpen: ', event);
        this.setState({ isModalOpen: true })
    }

    handleModalClose = event => {
        // console.log('handleModalOpen: ', event);
        this.setState({ isModalOpen: false })
    }
    render() {
        return (
            <CardContainer>
                <Header>
                    <h4>{this.props.project.title}</h4>
                </Header>
                <Media>
                    <img src={this.props.project.image} alt={this.props.project.title} />
                    <Meta>
                        <MetaCapsule>{this.props.project.type}</MetaCapsule>
                        <MetaCapsule>{this.props.project.year}</MetaCapsule>
                    </Meta>
                </Media>
                <Content>
                    <p>{this.props.project.shortDescription}</p>
                    <Tags>
                        {this.props.project.madeWidth.map((typeTag) => (
                            <TagCapsule>{typeTag}</TagCapsule>
                        ))}
                    </Tags>
                </Content>
                <Actions>
                    {this.props.project.url &&
                        <div>
                            <a aria-label="Link" href={this.props.project.url} target="_blank">
                                <img src={LinkIcon} width="24" alt="Project Website" />
                            </a>
                        </div>
                    }
                    {this.props.project.repoUrl &&
                        <div>
                            <a href={this.props.project.repoUrl} target="_blank">
                                <img src={GithubIcon} width="24" alt="Github" />
                            </a>
                        </div>
                    }
                    <div>
                        <Button onClick={this.handleModalOpen}>
                            Read More
                        </Button>
                        {/* <button onClick={this.handleModalOpen}>
                            Read More
                        </button> */}
                    </div>
                </Actions>
                <ReactModal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.handleModalClose}
                    contentLabel="Tha Project"
                >
                    <h2>{this.props.project.title}</h2>
                    <div>{this.props.project.longDescription}</div>
                    <button onClick={this.handleModalClose}>Close</button>
                </ReactModal>
            </CardContainer >
        )
    }
}