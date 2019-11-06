import {GET_LOCATION_LIST,GET_SELECTED_LOCATION_DETAILS} from "../ActionTypes";

let initialState={
    locationList:[],
    selectedLocation:{}
}

/**
 * Redux reducer to maintain location store
 * @param {object} state 
 * @param {object} action 
 * @returns {object} - updated state
 */
const LocationReducer= (state=initialState,action)=>{
    switch(action.type){
        case GET_LOCATION_LIST:{
            return {...state, locationList:action.payload}
        }
        case GET_SELECTED_LOCATION_DETAILS:{
            return {...state, selectedLocation:action.payload}
        }
        default:{
            return state;
        }
    }
}

export default LocationReducer;