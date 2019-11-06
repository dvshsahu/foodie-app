import Axios from "axios";
import {
    GET_SELECTED_RESTAURANT_DETAILS
} from "../../../redux/ActionTypes";

/**
 * function to get restaurant details of provided restaurant id
 * @param {number} id 
 */
export const getRestaurantDetails =(id)=> async (dispatch)=>{
    try{
        let {data} = await Axios.get(`/api/restaurant?res_id=${id}`);
        dispatch({type:GET_SELECTED_RESTAURANT_DETAILS,payload:data})
    }catch(e) {
        console.log(e)
    }
}