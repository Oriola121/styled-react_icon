import React,{useState} from 'react'
import {Nav, NavContainer, LogoHold, MobileIcon, Navig, Navlink} from './Navbar.Element.js'
import {FaMagento} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'


function Navbar () {
	const [click, setClick] = useState(true);

	const handClick = () => {
		setClick(!click)
	}


	return (
		<>
		<Nav>
			<NavContainer>
				<LogoHold>
					<FaMagento/>LSETF
				</LogoHold>

			<MobileIcon onClick={handClick}>
				{click? <FaBars/> : <FaTimes/>}
			</MobileIcon >

			<Navig onClick={handClick} click={click}>
				<Navlink>Home</Navlink>
				<Navlink>Contact</Navlink>
				<Navlink>Services</Navlink>
				<Navlink>Blog</Navlink>
			</Navig>

		</NavContainer>
		</Nav>
		</>
	)
}

export default Navbar