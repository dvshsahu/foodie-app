import React from "react";
import {Link} from "react-router-dom";

const RestaurantBlock=({resto})=>{
    return(
        <div>
            <img src={resto.thumb} alt="thumbnail" />
            <Link to={`/restaurant/${resto.id}`}>{resto.name}</Link>
        </div>
    )
}

export default RestaurantBlock;