import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, SocialLinks, } from 'Common'
import Ramiro from 'Static/illustrations/ramiro.jpg'
import Pin from 'Static/icons/pin.svg'
import { Wrapper, IntroWrapper, Details, Profile } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Creative Technologist<br /> <span style={{ fontWeight: 300, fontSize: '90%' }}>&</span> <br />Full-stack Developer</h1>
				<h4>I craft human-centered software solutions</h4>
				{/* <p><span>I'm available for hire </span>
					<Button as={AnchorLink} href="#contact">
						Get in touch!
					</Button>
				</p> */}
			</Details>
			<Profile>
				<img className='profile-pic' src={Ramiro} alt="Ramiro Ramirez - Full-stack Developer & Creative Technologist" />
				<h4>Ramiro Ramirez</h4>
				<SocialLinks />
				<p>Funder @ <br /><a href="https://humanbeyondlabs.com/" target='_blank'>Human Beyond Labs</a> & <a href="https://consciousgeekstuff.com/" target='_blank'>Conscious Geek Stuff</a></p>
				<p><img src={Pin} width='14pt' alt="Amsterdam, The Netherlands" />	Amsterdam, The Netherlands</p>
				<p>Available for <AnchorLink href="#contact">hire</AnchorLink></p>
			</Profile>
		</IntroWrapper>
	</Wrapper >
)
