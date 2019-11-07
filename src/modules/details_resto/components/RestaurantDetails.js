import React,{useEffect,Fragment} from "react";
import {useParams,useHistory} from "react-router-dom";
import { connect} from "react-redux";
import RestaurantInfo from "./RestaurantInfo";
import "../styles/RestaurantDetails.scss";

import {getRestaurantDetails} from "../actions/RestaurantDetailsActions";

const RestaurantDetails=({getRestaurantDetails,location,restaurantName})=>{
    let { id } = useParams();
    let history = useHistory();
    const goToHome=()=>{
        history.push("/");
    }
    useEffect(()=>{
        getRestaurantDetails(id)
    })
    return(
        <Fragment>
            <div className="breadcrum">
                <button onClick={goToHome}>{location}</button>/
                <span className="selected">{restaurantName}</span>
            </div>
            <RestaurantInfo />
        </Fragment>
    )
}

const mapStateToProps = state=>({
    location:state.location.selectedLocation.title,
    restaurantName:state.restaurant.selectedRestaurant.name
})

export default connect(mapStateToProps,{getRestaurantDetails})(RestaurantDetails);