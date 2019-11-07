import React from "react";
import {connect} from "react-redux";
import DetailsTile from "./DetailsTile";
import OtherDetails from "./OtherDetails";

const GeneralInfo = ({selectedRestaurant})=>{
    return(
        <div className="resto-details-con">
            <div className="resto-prof-con" style={{backgroundImage:`url(${selectedRestaurant.featured_image})`}}></div>
            <DetailsTile selectedRestaurant={selectedRestaurant} />
            <OtherDetails selectedRestaurant={selectedRestaurant} />
        </div>
    )
}

const mapStateToProps = state=>({
    selectedRestaurant:state.restaurant.selectedRestaurant
})

export default connect(mapStateToProps)(GeneralInfo);