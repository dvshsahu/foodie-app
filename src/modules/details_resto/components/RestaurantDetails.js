import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import { connect} from "react-redux";
import RestaurantInfo from "./RestaurantInfo";
import "../styles/RestaurantDetails.scss";

import {getRestaurantDetails} from "../actions/RestaurantDetailsActions";

const RestaurantDetails=({getRestaurantDetails})=>{
    let { id } = useParams();
    useEffect(()=>{
        getRestaurantDetails(id)
    })
    return(
            <RestaurantInfo />
    )
}

export default connect(null,{getRestaurantDetails})(RestaurantDetails);