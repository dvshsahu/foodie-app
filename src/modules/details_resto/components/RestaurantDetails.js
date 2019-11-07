import React,{useEffect,Fragment} from "react";
import {useParams} from "react-router-dom";
import { connect} from "react-redux";
import GeneralInfo from "./GeneralInfo";
import "../styles/RestaurantDetails.scss";

import {getRestaurantDetails} from "../actions/RestaurantDetailsActions";

const RestaurantDetails=({getRestaurantDetails})=>{
    let { id } = useParams();
    useEffect(()=>{
        getRestaurantDetails(id)
    })
    return(
        <Fragment>
            <GeneralInfo />
        </Fragment>
    )
}

export default connect(null,{getRestaurantDetails})(RestaurantDetails);