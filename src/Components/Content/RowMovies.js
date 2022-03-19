import React, { useRef } from 'react'
import styled from 'styled-components'
import {FiChevronLeft, FiChevronRight,FiChevronDown} from 'react-icons/fi'
import {FaPlay,FaPlus,} from 'react-icons/fa'
import {BiLike, BiDislike} from 'react-icons/bi'
import { SmoothScrolling } from '../utils/SmoothScrolling'

export default function RowMovies(props) {
      const  {movies, title} = props
    const sliderRef = useRef()
    const movieRef = useRef()
    const handleScrollRight =()=>{
        const maxScrollLeft =sliderRef.current.scrollWidth- sliderRef.current.clientWidth
        if(sliderRef.current.scrollLeft < maxScrollLeft){
            SmoothScrolling(sliderRef.current,
                250,
                sliderRef.current.clientWidth,
                sliderRef.current.scrollLeft
                )
        }
        
    }
    const handleScrollLeft =()=>{
        if(sliderRef.current.scrollLeft >0){
            SmoothScrolling(sliderRef.current,
                250,
                -sliderRef.current.clientWidth,
                sliderRef.current.scrollLeft
                )
        }
        
    }
  return (
    <MoviesRow className='grid wide'>
        <h1 className='heading'>{title}</h1>
        <MoviesSlider ref={sliderRef} className='row' >
            {
               movies && movies.length>0 && movies.map((Movie,index) => (
               <div className='col l-2-4 m-3 c-12' ref={movieRef} key={index}>
                            <div className='movieItem'>
                                <img  src={`https://image.tmdb.org/t/p/original/${Movie.backdrop_path}`} alt=""/>
                                <div className='movieItemInfo'>
                                        <div>
                                            <FaPlay className='iconMovie'/> <FaPlus className='iconMovie'/> <BiLike className='iconMovie'/> <BiDislike className='iconMovie'/>
                                            <FiChevronDown className='iconMovie'/>
                                        </div>
                                        <div>
                                           {Movie.vote_average}                
                                        </div>
                                </div>

                            </div>
                        </div>
              

                ))
            }

        </MoviesSlider>
            <div className='btnLeft' onClick={handleScrollLeft}>
                <FiChevronLeft/>
            </div>
            <div className='btnRight' onClick={handleScrollRight}>
                <FiChevronRight/>
            </div>
    </MoviesRow>
  )
}

const MoviesRow = styled.div`
    transform: translateY(-60px);
    color:#e5e5e5;
    position: relative;
    padding: 0 0 40px 0;
    .heading {
        font-size:1.8rem;
        margin-left:12px ;

    }
    .heading {
        padding-bottom:20px;
    }
    .btnLeft {
        position: absolute;
        top:45%;
        transform: translateY(-20%);
        font-size:1.8rem;
        left:2%;
        z-index: 5;
        background-color: rgb(0,0,0,0.5);
        width: 30px;
        height:70px;
        display:flex;
        justify-content: center;
        align-items:center;
    }
    .btnRight {
        position: absolute;
        top:45%;
        transform: translateY(-20%);
        font-size:1.8rem;
        right:2%;
        z-index: 5;
        background-color: rgb(0,0,0,0.5);
        width: 30px;
        height:70px;
        display:flex;
        justify-content: center;
        align-items:center;
    }
`
const MoviesSlider = styled.div`
    flex-wrap: nowrap;
    width: 100%;
    overflow: hidden;
    .movieItem {
        transition: transform 100ms ease-out, border-radius 200ms ease-out;
        position: relative;
        z-index:1;
        img{
            border-radius:4px;
            width: 100%;
            max-width:350px;
        }
        &:hover {
            z-index:2;
            position: absolute;
            border-radius: 10px 10px 0 0;
            transform: scale(1.5);
            box-shadow: 0 0 2px #000a;
            .movieItemInfo {
                display:block;
            }
        }
        &::after {
            position: relative;
            top: 100px;
            display: block;
            background: #18181818;
            box-shadow: 0 0 2px #000a;
            color: #fff;
            width: 150px;
            height: fit-content;
            padding: 5px;
            box-sizing: border-box;
            opacity: 0;
            border-radius: 0 0 10px 10px;
            transition: opacity 3000ms ease-out, border-radius 200ms ease-out;
          }
        &:hover::after {
            opacity: 1;
          }
          .movieItemInfo {
              display:none
          }
        }
   
`