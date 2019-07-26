import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Full-stack Developer & <br />Creative Technologist</h1>
				<h4>I craft human-centered software solutions</h4>
				{/* <p><span>I'm available for hire </span>
					<Button as={AnchorLink} href="#contact">
						Get in touch!
					</Button>
				</p> */}
			</Details>
			<Thumbnail>
				<img src={dev} alt="Ramiro Ramirez Full-stack Developer & Creative Technologist" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper >
)
