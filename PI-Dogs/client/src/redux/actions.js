import axios from 'axios';
import {GET_ALL_DOGS, GET_BY_ID, GET_BY_NAME, POST_DOG, GET_TEMPERAMENT} from './action-types';

const getDogs = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            'http://localhost:3001/dogs'
        )
        const dogs = apiData.data;
        dispatch({type: GET_ALL_DOGS, payload: dogs.data})
    }
}

const getById = (id) => async (dispatch) => {
    try {
        return async function () {
            const byId = await axios.get(`http://localhost:3001/dogs/${id}`);
            const dogs = byId.data;
            dispatch({type: GET_BY_ID, payload: dogs.data})
        }
    } catch (error) {
        
    }
}


const getByName = (name) => {
    try {
        return async function (dispatch) {
            const byName = await axios.get(`http://localhost:3001/dogs/${name}`);
            const dog = byName.data;
            dispatch({type: GET_BY_NAME, payload: dog.data})
        }
    } catch (error) {
        
    }
}


const postDog = () => {

}


const getTemperament = () => {

}



export {
    getDogs,
    getById,
    getByName,
    postDog,
    getTemperament
}