import styled from 'styled-components';


export const Nav = styled.nav``

export const NavContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #101522;
font-size: 25px;
color: #fff;
`

export const LogoHold = styled.div``

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 860px){
display: block;
}
`

export const Navig = styled.ul`
display: flex;
align-items: center;
list-style: none;
width: 40%;
background-color: red;
justify-content; space-around;

@media screen and (max-width: 860px){
display: flex;
flex-direction: column;
position: absolute;
top: 50px;
height: 70vh;
width: 100%;
background-color: #101522;
left: ${({click}) => (click ?  '100%' : 0)};
}
`

export const Navlink= styled.li``