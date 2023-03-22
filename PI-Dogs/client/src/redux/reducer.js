import {CLEAN_DETAIL, GET_ALL_DOGS, DOG_DETAIL, GET_BY_NAME, GET_TEMPERAMENT, ORDER_BY_NAME, ORDER_BY_WEIGHT, TEMPERAMENT_FILTER} from './action-types';


const initialState = {
    dogs: [],
    dogDetail: [],
    temperament: [],
    filter: false,
    loading: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {...state, dogs: action.payload, loading: true};
        
        case DOG_DETAIL:
            return {...state, dogDetail: action.payload, filter: true, loading: true};

        case GET_BY_NAME:
            return {...state, dogs: action.payload, filter: true, loading: true};

        case GET_TEMPERAMENT:
            return {...state, temperament: action.payload, filter: true, loading: true};
        
        case CLEAN_DETAIL:
            return { ...state, dogDetail: [] };

        case ORDER_BY_NAME:
            return { ...state, dogs: action.payload, filter: true, loading: true };

        case ORDER_BY_WEIGHT:
            return { ...state, dogs: action.payload, filter: true, loading: true };        
        
        case TEMPERAMENT_FILTER:
            return { ...state, dogs: action.payload, filter: true, loading: true };

        default:
            return {...state};
    }
}



export default rootReducer;