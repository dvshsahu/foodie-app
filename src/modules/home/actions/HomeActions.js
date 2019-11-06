import Axios from "axios";
import {
    GET_RESTAURANT_LIST,
    GET_LOCATION_LIST
} from "../../../redux/ActionTypes";
/**
 * function to get list of searched location
 * @param {string} query 
 */
export const getSearchedLocations =(query)=> async (dispatch)=>{
    try{
        let {data} = await Axios.get(`/api/locations?query=${query}&count=10`);
        dispatch({type:GET_LOCATION_LIST,payload:data.location_suggestions})
    }catch(e) {
        console.log(e)
    }
}

/**
 * function to get restaurants by location
 * @param {number} locationId 
 */
export const getRestaurantsByLocationId =(locationId)=> async (dispatch)=>{
    try{
        let {data} = await Axios.get(`/api/search?entity_id=${locationId}&count=10`);
        dispatch({type:GET_RESTAURANT_LIST,payload:data.restaurants})
    }catch(e) {
        console.log(e)
    }
}

