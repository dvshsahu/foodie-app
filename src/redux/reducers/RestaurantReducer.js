import {GET_RESTAURANT_LIST,GET_SELECTED_RESTAURANT_DETAILS} from "../ActionTypes";

let initialState={
    restaurantList:[],
    selectedRestaurant:{}
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
        case GET_SELECTED_RESTAURANT_DETAILS:{
            return {...state, selectedRestaurant:action.payload}
        }
        default:{
            return state;
        }
    }
}

export default RestaurantReducer;