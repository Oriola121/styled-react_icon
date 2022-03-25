import React from 'react'
import styled from 'styled-components'

function Weather() {
  return (
    <WeaWrap>
        <WeaCont>
        <iframe width="100%" height="100%" src="https://embed.windy.com/embed2.html?lat=6.447&lon=3.390&detailLat=6.447&detailLon=3.390&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
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