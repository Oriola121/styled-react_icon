import React,{useState} from 'react'
import {Nav, NavContainer, LogoHold, MobileIcon, Navig, Navlink} from './Navbar.Element.js'
import {FaMagento} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'


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
				<Link to = '/' style ={{color: 'white', textDecoration: 'none'}}><Navlink>Home</Navlink></Link>
				<Link to = '/contact' style ={{color: 'white', textDecoration: 'none'}}><Navlink>Contact</Navlink></Link>
				<Link to = '/serve' style ={{color: 'white', textDecoration: 'none'}}><Navlink>Services</Navlink></Link>
				<Link to = '/blog' style ={{color: 'white', textDecoration: 'none'}}><Navlink>Blog</Navlink></Link>
			</Navig>

		</NavContainer>
		</Nav>
		</>
	)
}

export default Navbar