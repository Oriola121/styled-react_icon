import React from 'react'
import './Htop.Element.js'
import {Htops, Ha, ButNav, Pres, Pres2, Hea, Par,
Hmid, Hmidup, Hb, Hbt, Hbp, Hc, Hd, Image,
Hmidter, impact, Pat, Pres3, midspace, midlay,
Image2hold, Image2a, Image2b} from './Htop.Element'
import Mis from './mis.png'
import Vis from './vis.png'
import Vol from './vol.png'
import feed1 from './feed1.jpg'
import sapa1 from './sapa1.jpg'



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
      <Hmidter>
        <impact>Impact</impact>
       <midspace>
       <midlay>
        <Pat>We believe everyone should be able to live with dignity,<br/>
        without dependence. We are a Non-Governmental<br/>
        Organization, based in Lagos Nigeria. We strive to<br/>
        protect and feed the poor, advocate and enlighten<br/>
        communities, empower young people, serve as the<br/>
        voice to the voiceless, we give grants and scholarship,<br/>
        we serve as an outstretched arm of God, we bring<br/>
        succor and hope to the need</Pat>
        <Pres3>Read More</Pres3>
        </midlay>
        <Image2hold>
            <Image2a src={sapa1}/>
            <Image2b src={feed1}/>
        </Image2hold>
        </midspace>
      </Hmidter>
    </Hmid>
    </>
  )
}

export default Htop