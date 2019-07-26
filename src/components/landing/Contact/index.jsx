import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Thumbnail>
			<h4>Interested in working together? <br /> Lets have a chat.</h4>
			<img src={contact} alt="This is the end" />
		</Thumbnail>
		<Details>
			<ContactForm />
		</Details>
	</Wrapper>
)
