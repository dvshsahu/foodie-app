import React,{useEffect} from "react";
import {useParams} from "react-router-dom";
import { connect} from "react-redux";
import GeneralInfo from "./GeneralInfo";

import {getRestaurantDetails} from "../actions/RestaurantDetailsActions";

const RestaurantDetails=({getRestaurantDetails})=>{
    let { id } = useParams();
    useEffect(()=>{
        getRestaurantDetails(id)
    })
    return(
        <div>
            <p>RestaurantDetails of {id}</p>
            <GeneralInfo />
        </div>
    )
}

export default connect(null,{getRestaurantDetails})(RestaurantDetails);