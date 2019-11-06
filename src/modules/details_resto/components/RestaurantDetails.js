import React from "react";
import {useParams} from "react-router-dom";

const RestaurantDetails=()=>{
    let { id } = useParams();
    return(
        <div>
            <p>RestaurantDetails of {id}</p>
        </div>
    )
}

export default RestaurantDetails;