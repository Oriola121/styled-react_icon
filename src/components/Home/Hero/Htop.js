import React from 'react'
import './Htop.Element.js'
import {Htops, Ha, ButNav, Pres, Pres2, Hea, Par,
Hmid, Hmidup, Hb, Hbt, Hbp, Hc, Hd, Image, Hmidter} from './Htop.Element'
import Mis from './mis.png'
import Vis from './vis.png'
import Vol from './vol.png'



function Htop() {

  return (
    <>
    <Htops>
        <Ha>
            <Hea>We make lives and<br/>communities better</Hea>
            <Par>At the core of our values, is the utmost goal of making individual lives,<br/>
            whether old or young, and communities of people, better than we meet it.</Par>
            <ButNav>
            <Pres>Donate</Pres>
            <Pres2>Read More</Pres2>
            </ButNav>
        </Ha>   
    </Htops>
     <Hmid>
      <Hmidup>
        <Hb>
          <Image>
            <img src={Mis}/>
          </Image>
            <Hbt>OUR MISSION</Hbt>
            <Hbp>At the core of our values, is the utmost<br/>
            goal of making individual lives, whether<br/>
            old or young, and communities of<br/>br
            people, better than we meet it.</Hbp>
        </Hb>
        <Hc>
          <Image>
            <img src={Vis}/>
          </Image>
            <Hbt>OUR VISSION</Hbt>
            <Hbp>At the core of our values, is the utmost<br/>
            goal of making individual lives, whether<br/>
            old or young, and communities of<br/>br
            people, better than we meet it.</Hbp>
        </Hc>
        <Hd>
          <Image>
            <img src={Vol}/>
          </Image>
            <Hbt>VOLUNTEER</Hbt>
            <Hbp>At the core of our values, is the utmost<br/>
            goal of making individual lives, whether<br/>
            old or young, and communities of<br/>br
            people, better than we meet it.</Hbp>
        </Hd>
      </Hmidup>
    </Hmid>
   
    </>
  )
}

export default Htop