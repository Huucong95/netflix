import axios from 'axios'
import {GET_NETFLIX_ORI, GET_NETFLIX_TOP_RATE, GET_NETFLIX_TREND,GET_NETFLIX_COMEMING_UP } from '../type'

const API_KEY = "f67705f3d89698474761617d5a53a498"
const BASE_URL ="https://api.themoviedb.org/3"

export const getNetflixOrigional = () => async dispatch => {
    try {
        const resutl = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}`
        )
        dispatch({type: GET_NETFLIX_ORI,payload: resutl.data.results})
    } catch (err) {
        console.log(err);
    }
}
export const getNetflixTrend = () => async dispatch => {
    try {
        const resutl = await axios.get(
            `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
        )
        dispatch({type: GET_NETFLIX_TREND,payload: resutl.data.results})
    } catch (err) {
        console.log(err);
    }
}
export const getNetflixTopRate = () => async dispatch => {
    try {
        const resutl = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        )
        dispatch({type: GET_NETFLIX_TOP_RATE,payload: resutl.data.results})
    } catch (err) {
        console.log(err);
    }
}
export const getNetflixComemingUp = () => async dispatch => {
    try {
        const resutl = await axios.get(
            `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        )
        dispatch({type: GET_NETFLIX_COMEMING_UP,payload: resutl.data.results})
    } catch (err) {
        console.log(err);
    }
}