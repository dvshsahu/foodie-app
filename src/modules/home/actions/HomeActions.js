import Axios from "../../../utilities/AxiosConfig";
import {
    GET_RESTAURANT_LIST,
    APPEND_RESTAURANT_LIST,
    GET_LOCATION_LIST,
    GET_SELECTED_LOCATION_DETAILS,
    GET_TOTAL_RESTAURANT
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
export const getRestaurantsByLocationId =(loc)=> async (dispatch)=>{
    dispatch({type:GET_SELECTED_LOCATION_DETAILS,payload:loc});
    try{
        let {data} = await Axios.get(`/api/search?entity_id=${loc.entity_id}&count=10`);
        dispatch({type:GET_RESTAURANT_LIST,payload:data.restaurants});  
        dispatch({type:GET_TOTAL_RESTAURANT,payload:data.results_found});       
    }catch(e) {
        console.log(e)
    }
}

/**
 * function to get restaurants by location and offset
 * @param {number} locationId 
 * @param {number} offset
 */
export const getNextRestaurantsByLocationId =(locationId,offset)=> async (dispatch)=>{
    try{
        let {data} = await Axios.get(`/api/search?entity_id=${locationId}&count=10&start=${offset}`);
        dispatch({type:APPEND_RESTAURANT_LIST,payload:data.restaurants});        
    }catch(e) {
        console.log(e)
    }
}

/**
 * function to get near by restaurants by geo location
 * @param {number} lat 
 * @param {number} lon 
 */
export const getRestaurantsByGeolocationCoordinates = (lat,lon)=>async(dispatch)=>{
    try{
        let {data} = await Axios.get(`/api/geocode?lat=${lat}&lon=${lon}`);
        console.log(data);   
        dispatch({type:GET_SELECTED_LOCATION_DETAILS,payload:data.location});

        let restoList = await Axios.get(`/api/search?entity_id=${data.location.entity_id}&count=10`);  
        dispatch({type:GET_RESTAURANT_LIST,payload:restoList.data.restaurants});  
        dispatch({type:GET_TOTAL_RESTAURANT,payload:restoList.data.results_found});    
    }catch(e) {
        console.log(e)
    }
}

/**
 * function to like restaurant
 * @param {number} id 
 */
export const likeRestaurant = (id)=>(dispatch,getState)=>{
    let updateRestoList = getState().restaurant.restaurantList.map(val=>{
        if(val.restaurant.id===id){
            val.restaurant.isLiked=!val.restaurant.isLiked;
        }
        return val;
    })

    dispatch({type:GET_RESTAURANT_LIST,payload:updateRestoList}); 
}