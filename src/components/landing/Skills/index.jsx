import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import Coding from 'Static/icons/icosahedron.svg'
import Consultancy from 'Static/icons/flower_life.svg'
import { Wrapper, SkillsWrapper, SkillsColumn } from './styles'

export const Skills = () => (
	<Wrapper id="skills">
		<h2>How can I help you?</h2>
		<SkillsWrapper as={Container}>
			<SkillsColumn>
				<img src={Coding} alt="Coding" style={{ height: '80px' }} />
				<h3>Software Development</h3>
				<p>I can deliver solutions in the shape of:</p>
				<hr />
				<ul>
					<li>Websites</li>
					<li>eCommerce</li>
					<li>Web Apps</li>
					<li>Desktop Apps</li>
					<li>APIs & Microservices</li>
					<li>Data Collection & Analysis Tools</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</SkillsColumn>
			<SkillsColumn>
				<img src={Consultancy} alt="Consultancy" style={{ height: '80px' }} />
				<h3>Consultancy</h3>
				<p>I can work with you and your team on:</p>
				<hr />
				<ul>
					<li>Adopting best practices for agile development</li>
					<li>Transitioning into a data-driven culture</li>
					<li>Designing Big Data pipelines</li>
					<li>Assessing technical feasibility & scalability</li>
				</ul>
				<Button as={AnchorLink} href="#contact">
					Get in touch
				</Button>
			</SkillsColumn>
		</SkillsWrapper>
	</Wrapper>
)
