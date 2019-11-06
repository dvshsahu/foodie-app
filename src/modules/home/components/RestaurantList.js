import React from "react";
import {connect} from "react-redux";
import RestaurantBlock from "./RestaurantBlock";

const RestaurantList = ({restaurantList})=>{
    return(
        <ul>
            {restaurantList.map(({restaurant})=><RestaurantBlock key={restaurant.id} resto={restaurant} />)}
        </ul>
    )
}

const mapStateToProps= state=>({
    restaurantList:state.restaurant.restaurantList
});

export default connect(mapStateToProps)(RestaurantList);