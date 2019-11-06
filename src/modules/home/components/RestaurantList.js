import React from "react";
import {connect} from "react-redux";
import RestaurantBlock from "./RestaurantBlock";

const RestaurantList = ({restaurantList})=>{
    return(
        <div className="resto-list-con">
            <div className="resto-list-con-in">
                {restaurantList.map(({restaurant})=><RestaurantBlock key={restaurant.id} resto={restaurant} />)}
            </div>
        </div>
    )
}

const mapStateToProps= state=>({
    restaurantList:state.restaurant.restaurantList
});

export default connect(mapStateToProps)(RestaurantList);