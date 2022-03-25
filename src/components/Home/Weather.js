import React from 'react'
import styled from 'styled-components'

function Weather() {
  return (
    <WeaWrap>
        <WeaCont>
        
        </WeaCont>
    </WeaWrap>
  )
}

export default Weather

const WeaWrap = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
`
const WeaCont = styled.div`
width: 95%;
height: 95%;

@media screen and (max-width: 768px){
width: 80%;
height: 90%;
}
`