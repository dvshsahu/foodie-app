import Axios from "axios";
import {
    GET_SELECTED_RESTAURANT_DETAILS
} from "../../../redux/ActionTypes";

/**
 * function to get restaurant details of provided restaurant id
 * @param {number} id 
 */
export const getRestaurantDetails =(id)=> async (dispatch,getState)=>{
    try{
        let {data} = await Axios.get(`/api/restaurant?res_id=${id}`);

        let isLiked = getState().restaurant.restaurantList.filter(val=>val.restaurant.id===id)[0].restaurant.isLiked;
        dispatch({type:GET_SELECTED_RESTAURANT_DETAILS,payload:{...data,isLiked}});

    }catch(e) {
        console.log(e)
    }
}