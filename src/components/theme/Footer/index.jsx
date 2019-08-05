import React from 'react'
import { Container, SocialLinks } from 'Common'
import { Wrapper, Flex, Details } from './styles'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h4>Ramiro Ramirez</h4>
				<span>
					© All rights reserved | {new Date().getFullYear()}
				</span>
			</Details>
			<SocialLinks />
		</Flex>
	</Wrapper>
)
