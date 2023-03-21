import actions from './actions';
import {GET_ALL_DOGS, GET_BY_ID, GET_BY_NAME, POST_DOG, GET_TEMPERAMENT} from './action-types';


const initialState = {
    dogs: [],
    dogDetail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {...state, dogs: action.payload};
    
        default:
            return {...state};
    }
}



export default rootReducer;