import React from "react";
import {connect} from "react-redux";

const GeneralInfo = ({selectedRestaurant})=>{
    return(
        <div>
            <p>{selectedRestaurant.name}</p>
            <img src={selectedRestaurant.featured_image} />
        </div>
    )
}

const mapStateToProps = state=>({
    selectedRestaurant:state.restaurant.selectedRestaurant
})

export default connect(mapStateToProps)(GeneralInfo);