import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
// import campfire from 'Static/illustrations/campfire.svg'
import { Wrapper, SkillsWrapper, SkillsColumn } from './styles'

export const Skills = () => (
	<Wrapper id="skills">
		<h2>How can I help you?</h2>
		<SkillsWrapper as={Container}>
			<SkillsColumn>
				<p>As a <strong>software developer</strong> I can deliver complete projects in the shape of:</p>
				<ul>
					<li>Websites</li>
					<li>Web Apps</li>
					<li>Desktop Apps</li>
					<li>Docker Images (APIs & Microservices)</li>
					<li>Data Scraping Tools</li>
					<li>Data visualization dashboards</li>
				</ul>
			</SkillsColumn>
			<SkillsColumn>
				<p>As a <strong>consultant</strong> I can help you and your team:</p>
				<ul>
					<li>Adopt best practices for agile software development & team management</li>
					<li>Transition into a data driven decision-making culture</li>
					<li>Design Big Data warehousing & analysis pipelines</li>
					<li>Asses the technical feasibility & scalability of an idea or prototype</li>
				</ul>
			</SkillsColumn>
		</SkillsWrapper>
	</Wrapper>
)
