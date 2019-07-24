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
				<h2>About</h2>
				<p>
					After almost a decade of digital nomadism I've had the privilege of working with people and organizations form all around the world. This has taught me that there is no magic recipe or technology stack to solve a problem.
				</p>
				<p>
					Each project is unique, it's embedded in a particular context, and it's affected by specific human dynamics. If we don't consider this together with the implications of our actions while trying to provide a solution, then we've already failed.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
