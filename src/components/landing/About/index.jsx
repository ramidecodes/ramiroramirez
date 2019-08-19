import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container } from 'Common'
import Campfire from 'Static/illustrations/campfire.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const About = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={Campfire} alt="Digital Nomad" />
			</Thumbnail>
			<Details>
				<h2>The Nomad</h2>
				<p>
					After almost a decade of digital nomadism I've had the privilege of working with entrepreneurs and organizations from all around the world.				</p>
				<p>
					The invaluable experience of founding studios in Spain, Mexico, Argentina and The Netherlands has taught me that there is no magic recipe or silver bullet to solve a problem.
				</p>
				<p>
					Each project has a life of its own, it's composed of unique human dynamics and embedded in a particular cultural context.
				</p>
				<p>
					Once we acknowledge that software is a very human endeavor we can start providing real value to an ever-changing ecosystem.
				</p>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
