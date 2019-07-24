import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Ramiro Ramirez</h1>
				<h2>Full-stack Developer & Creative Technologist</h2>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={dev} alt="Ramiro Ramirez Full-stack Developer & Creative Technologist" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
