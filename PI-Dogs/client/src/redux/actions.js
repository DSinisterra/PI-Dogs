import axios from 'axios';
import {GET_ALL_DOGS, DOG_DETAIL, GET_BY_NAME, POST_DOG, GET_TEMPERAMENT, CLEAN_DETAIL, ORDER_BY_NAME, ORDER_BY_WEIGHT, TEMPERAMENT_FILTER} from './action-types';

const getDogs = () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            '/dogs'
        )
        dispatch({type: GET_ALL_DOGS, payload: apiData.data})
    }
}

const getById = (id) => async (dispatch) => {
    try {
        const byId = await axios.get(`/dogs/${id}`);
        return dispatch({type: DOG_DETAIL, payload: byId.data})
        
    } catch (error) {
        const noDetail = [];
        return dispatch({type: DOG_DETAIL, payload: noDetail})
    }
}


const getByName = (name) => async (dispatch) => {
    try {
        const byName = await axios.get(`/dogs?name=${name}`);
        return dispatch({type: GET_BY_NAME, payload: byName.data})
        
    } catch (error) {
        const noName = [];
        return dispatch({type: GET_BY_NAME, payload: noName})
    }
}


const postDog = (newDog) => {
    return async function (dispatch) {
        const createDog = await axios.post("/dogs/", newDog);
        return dispatch({type: POST_DOG, payload: createDog.data,
        });
      };
}


const getTemperament = () => async (dispatch) => {
    try {
        const allTemperaments = await axios.get('/temperaments');
        const temperamentsSorted = allTemperaments.data.sort((a, b) => a.name.localeCompare(b.name));
        return dispatch({ type: GET_TEMPERAMENT, payload: temperamentsSorted });
    } catch (error) {
        throw new Error(error);
    }
}


const cleanDetail = () => {
    return {type: CLEAN_DETAIL}
}


const orderByName = (dogs, value) => {
    try {
        let dogsSorted = []
        if (value === "Ascendent") {
            dogsSorted = dogs.sort((a, b) => a.name.localeCompare(b.name))
        }
        if (value === "Descendent") {
            dogsSorted = dogs.sort((a, b) => b.name.localeCompare(a.name))
        }
        return function (dispatch) {
            dispatch({ type: ORDER_BY_NAME, payload: dogsSorted })
        }

    } catch (error) {
        throw new Error(error);
    }
}

const orderByWeight = (dogs, value) => {
    try {
        let dogsSorted = []
        if (value === "High-Low") {
            dogsSorted = dogs.sort(
                (a, b) =>
                    (a.minWeight < b.minWeight) ? 1 : (a.minWeight > b.minWeight) ? -1 : 0);
        }
        if (value === "Low-High") {
            dogsSorted = dogs.sort(
                (a, b) =>
                    (a.minWeight > b.minWeight) ? 1 : (a.minWeight < b.minWeight) ? -1 : 0);
        }
        return function (dispatch) {
            dispatch({ type: ORDER_BY_WEIGHT, payload: dogsSorted })
        }
    } catch (error) {
        throw new Error(error);
    }
}


const temperamentFilter = (dogs, value) => {
    try {
        const filtered = [];
        dogs.forEach(dog => {
            const dogTemperament = [];
            if (dog.temperament) dogTemperament.push(...dog.temperament.split(', '));
            if (dogTemperament.includes(value)) filtered.push(dog);
        });
        return function (dispatch) {
            dispatch({ type: TEMPERAMENT_FILTER, payload: filtered })
        }
    } catch (error) {
        throw new Error(error)
    }
}


export {
    getDogs,
    getById,
    getByName,
    postDog,
    getTemperament,
    cleanDetail,
    orderByName,
    orderByWeight,
    temperamentFilter
}