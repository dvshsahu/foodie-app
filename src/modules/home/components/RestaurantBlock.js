import React from "react";
import {Link} from "react-router-dom";

const RestaurantBlock=({resto})=>{
    return(
        <div>
            <Link to={`/restaurant/${resto.id}`}>{resto.name}</Link>
        </div>
    )
}

export default RestaurantBlock;