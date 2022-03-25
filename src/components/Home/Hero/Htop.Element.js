import styled from 'styled-components';
import feed from './feed.jpg'

export const Htops = styled.div`
width: 100%;
height: 500px;
background: url(${feed});
background-position: center;
background-size: cover;
`
export const Ha = styled.div`
width: 100%;
height: 100%;
background-color: #1E3068;
opacity: 80%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 768px){
display: flex;
flex-wrap: wrap;
}
`
export const Hea = styled.div`
color: white;
font-size: 40px;
font-weight: bolder;
line-height: 1;
margin-left: 5rem;
margin-top: -10px;
`
export const Par = styled.div`
color: white;
margin-left: 5rem;
margin-top: 10px;
`
export const ButNav = styled.div`
margin-left: 5rem;
margin-top: 50px;
display: flex;
align-items: center;
`
export const Pres = styled.button`
background-color: #3AB54A;
border-color: transparent;
color: white;
height: 35px;
width: 100px;
border-radius: 8px;
margin-right: 10px;
`
export const Pres2 = styled.button`
background-color: transparent;
border-color: white;
color: white;
height: 35px;
width: 100px;
border-radius: 8px;
`
export const Hmid = styled.div`
width: 100%;
background-color: whitesmoke;
`
export const Hmidup = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

@media screen and (max-width: 850px){
display: flex;
flex-wrap: wrap;
}
`
export const Hb = styled.div`
width: 361px;
height: 335px;
background: #003399;
box-shadow: 2px 2px 2px 2px whitesmoke;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 32.5rem;
left: 3rem;
`
export const Hc = styled.div`
width: 361px;
height: 335px;
background: #25AAE2;
box-shadow: 2px 2px 2px 2px whitesmoke;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 32.5rem;
`
export const Hd = styled.div`
width: 361px;
height: 335px;
background: #3AB54A;
box-shadow: 2px 2px 2px 2px whitesmoke;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
top: 32.5rem;
right:  3rem;
`
export const Hbt = styled.div`
font-size: 38px;
font-weight: 500;
color: white;
margin-bottom: 30px;
`
export const Hbp = styled.div`
font-weight: 500;
font-size: 16px;
line-height: 20px;
text-align: center;
color: white;
`
export const Image = styled.div`
margin-top: 40px;
margin-bottom: 20px;
`