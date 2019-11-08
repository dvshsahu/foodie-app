import {SET_LOADING_RESTAURENT_FETCHING} from "../ActionTypes";

let initialState={
    isFetchingNextResults:false
}

/**
 * Redux reducer to maintain loading store
 * @param {object} state 
 * @param {object} action 
 * @returns {object} - updated state
 */
const LoadingReducer= (state=initialState,action)=>{
    switch(action.type){
        case SET_LOADING_RESTAURENT_FETCHING:{
            return {...state, isFetchingNextResults:action.payload}
        }
        default:{
            return state;
        }
    }
}

export default LoadingReducer;