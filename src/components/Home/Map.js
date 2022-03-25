import React from 'react'
import styled from 'styled-components'

function Map() {
  return (
    <MapWrap>
        <MapCont>
        <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=5%20kekere&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </MapCont>
    </MapWrap>
  )
}

export default Map

const MapWrap = styled.div`
width: 100%;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
`
const MapCont = styled.div`
width: 95%;
height: 95%;

@media screen and (max-width: 768px){
width: 80%;
height: 90%;
}
`