import styled from 'styled-components';


export const Nav = styled.nav`
display:flex;
height:80px;
justify-content: center;
align-items: center;
width: 100%;
position: sticky;
top: 0px;
color: red;
background-color: #101522;
z-index: 999;
`

export const NavContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 25px;
color: #fff;
`
export const LogoHold = styled.div`
margin-left: 30px;
`
export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 850px){
display: block;
position: absolute;
right: 20px;
}
`
export const Navig = styled.ul`
list-style: none;
width: 55%;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;
@media screen and (max-width: 850px){
display: flex;
flex-direction: column;
position: absolute;
top: 50px;
height: 70vh;
width: 100%;
background-color: #101522;
left: ${({click}) => (click ?  '-100%' : 0)};
transition: all 2s ease;
z-index: 1;
}
`

export const Navlink= styled.div`;
font-size: 18px;
cursor: pointer;

&:hover {
	border-bottom: 2px solid whitesmoke;
}

@media screen and (max-width: 850px){
	margin-top: 20px;
}
`