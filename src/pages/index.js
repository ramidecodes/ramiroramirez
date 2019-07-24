import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Projects, About } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Skills />
		<About />
		<Projects />
		<Contact />
	</Layout>
)
