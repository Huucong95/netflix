import React from 'react'
import { GET_NETFLIX_ORI, GET_NETFLIX_TREND, GET_NETFLIX_TOP_RATE, GET_NETFLIX_COMEMING_UP } from '../type';

const reducerMoviesInitrialState = {
    NetflixOri: null,
    NetflixTrend: null,
    NetflixTopRate: null,
    NetflixComemingUp:null,


}

const reducerMovies = (state = reducerMoviesInitrialState, action ) => {
     switch (action.type) {
        case GET_NETFLIX_ORI:
            return {...state,NetflixOri:action.payload} 
        case GET_NETFLIX_TREND:
            return {...state,NetflixTrend:action.payload} 
        case GET_NETFLIX_TOP_RATE:
            return {...state,NetflixTopRate:action.payload} 
        case GET_NETFLIX_COMEMING_UP:
            return {...state,NetflixComemingUp:action.payload} 
         default:
             return state;
     }
}
export default reducerMovies