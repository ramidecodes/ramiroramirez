import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import nomad from 'Static/illustrations/nomad.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={nomad} alt="Digital Nomad" />
			</Thumbnail>
			<Details>
				<h2>Hi! I'm Ramiro</h2>
				<p>
					After almost a decade of digital nomadism I've had the privilege of working with entrepreneurs and organizations form all around the world.
				</p>
				<p>
					The invaluable experience of funding studios in Spain, Mexico, Argentina and The Netherlands has taught me that there is no magic recipe or silver bullet to solve a problem.
				</p>
				<p>
					Each project has a life on its own, it's composed by unique human dynamics and embedded in a particular cultural context. Once we acknowledge that software is a very human endeavor we can start providing real value to an ever changing ecosystem.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
