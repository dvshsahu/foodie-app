import React from "react";
import {connect} from "react-redux";
import DetailsTile from "./DetailsTile";
import OtherDetails from "./OtherDetails";
import UserReview from "./UserReview";

const RestaurantInfo = ({selectedRestaurant})=>{
    return(
        <div className="resto-details-con">
            <div className="resto-prof-con" style={{backgroundImage:`url(${selectedRestaurant.featured_image})`}}>
                <img src={selectedRestaurant.isLiked?"/like-fill.svg":"/like.svg"} width="40" height="40" />
            </div>
            <DetailsTile selectedRestaurant={selectedRestaurant} />
            <OtherDetails selectedRestaurant={selectedRestaurant} />
            <UserReview />
        </div>
    )
}

const mapStateToProps = state=>({
    selectedRestaurant:state.restaurant.selectedRestaurant
})

export default connect(mapStateToProps)(RestaurantInfo);