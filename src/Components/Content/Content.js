import React,{useEffect} from 'react'
import RowMovies from './RowMovies'
import {useDispatch, useSelector}from 'react-redux'
import { getNetflixComemingUp, getNetflixOrigional, getNetflixTopRate, getNetflixTrend,  } from '../Store/Action'

export default function Content() {
    const dispatch = useDispatch()
    const {NetflixOri} = useSelector ( state=> state.infoMovies)
    const {NetflixTrend} = useSelector ( state=> state.infoMovies)
    const {NetflixTopRate} = useSelector ( state=> state.infoMovies)
    const {NetflixComemingUp} = useSelector ( state=> state.infoMovies)
    useEffect(() => {
      dispatch(getNetflixOrigional())
      dispatch(getNetflixTrend())
      dispatch(getNetflixTopRate())
      dispatch(getNetflixComemingUp())
    }, [dispatch])

  return (
    <div style={{background:'#141414'}}>
    <RowMovies movies={NetflixOri} title={'Only On Netflix'}/>
    <RowMovies movies={NetflixTrend} title={'Trending'}/>
    <RowMovies movies={NetflixTopRate} title={'Top Rated'}/>
    <RowMovies movies={NetflixComemingUp} title={'Comeming Up'}/>
    </div>
  )
}

