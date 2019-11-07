import {
    GET_RESTAURANT_LIST,
    GET_SELECTED_RESTAURANT_DETAILS,
    APPEND_RESTAURANT_LIST,
    GET_TOTAL_RESTAURANT} from "../ActionTypes";

let initialState={
    restaurantList:[],
    restaurantsFound:0,
    selectedRestaurant:{
        all_reviews:{
            reviews:[]
        }
    }
}

/**
 * Redux reducer to maintain restaurant store
 * @param {object} state 
 * @param {object} action 
 * @returns {object} - updated state
 */
const RestaurantReducer= (state=initialState,action)=>{
    switch(action.type){
        case GET_RESTAURANT_LIST:{
            return {...state, restaurantList:action.payload}
        }
        case APPEND_RESTAURANT_LIST:{
            return {...state,restaurantList:[...state.restaurantList,...action.payload]}
        }
        case GET_SELECTED_RESTAURANT_DETAILS:{
            return {...state, selectedRestaurant:action.payload}
        }
        case GET_TOTAL_RESTAURANT:{
            return {...state, restaurantsFound:action.payload}
        }
        default:{
            return state;
        }
    }
}

export default RestaurantReducer;