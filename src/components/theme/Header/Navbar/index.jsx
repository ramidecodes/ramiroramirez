import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'
import Mate from 'Static/icons/mate.svg'
const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<img src={Mate} alt="Home" style={{ height: '52px', margin: 0 }} />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
