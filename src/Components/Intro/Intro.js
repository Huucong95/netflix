import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {VscMute, VscUnmute} from 'react-icons/vsc'
import {FaPlay, FaInfo} from 'react-icons/fa'

export default function Intro() {
    const [isMute, setIsMute] = useState(false)

  return (
    <IntroContainer className='introContainer'>
        <ReactPlayer
            playing={true}
            width="88.899%"
            height="100%"
            volume={1}
            muted={isMute}
            loop={true}
            url="https://www.youtube.com/watch?v=OB3g37GTALc"
            className="videoIntro"
            />
            <div className='infoIntro'>
                <h1 className='headingIntro'>Spider-Man: No Way Home</h1>
                <p className='desIntro'>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor ...</p>
            </div>
        <div className='btnControl'>
            <div className='btn playBtn'><FaPlay/><span>Phát</span></div>
            <div className='btn infoBtn'><FaInfo/><span>Thông tin khác</span></div>
        </div>
        {
            isMute ?
            (<VscMute onClick={()=>setIsMute(prev => !prev)} className='iconMute'/>) :
            (<VscUnmute onClick={()=>setIsMute(prev => !prev)} className='iconMute'/>)
        }
        <div className='bottom'></div>
    </IntroContainer>
  )
}
const IntroContainer = styled.div`
    position: relative;
    background-color:var(--backgroundColor);
    padding-top:50%;
    width:100%;
    color: var(--whiteColor);
.videoIntro {
    transform: scale(1.25);
    position: absolute;
    top: 0; 
    left:0;
    overflow: hidden;
    user-select: none;
    &:hover {
        user-select: none
    }
}
.iconMute{
    position: absolute;
    top:60%;
    left:85%;
    font-size: 4rem;
    color: var(--whiteColor);
    cursor:pointer;
    padding:6px;
    border-radius:50%;
    border: 1px solid #fff;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
    transform: scale(1.2);
    background-color: rgba(221,221,221,0.18)
    }
}
.infoIntro {
    position: absolute;
    top: 32%;
    left: 4%;
    .desIntro{
        font-size : 1.9rem;
        width: 40%;
        font-weight: 400;
        padding: 28px 0;
    line-height: normal;
    }
    .headingIntro {
        font-size : 4.1rem;
        transiton: all 0.3s ease;
    }
}
.btnControl {
    position: absolute;
    top: 50%;
    left: 4%;
    display: flex;
}
.infoBtn {
    background-color:#6d6d6d;
    color: #fff;
    width:100%;

}
.bottom {
    position:absolute;
    bottom:0;
    width:100%;
    height:100px;
    background-image: linear-gradient( 180deg, transparent, rgba(15,15,15,0.6) 40%, rgb(17,17,17), rgb(17,17,17) );
}
`