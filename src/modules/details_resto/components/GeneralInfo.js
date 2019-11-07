import React from "react";
import {connect} from "react-redux";
import DetailsTile from "./DetailsTile";

const GeneralInfo = ({selectedRestaurant})=>{
    return(
        <div className="resto-details-con">
            <div className="resto-prof-con" style={{backgroundImage:`url(${selectedRestaurant.featured_image})`}}>
                
            </div>
            <DetailsTile resto={selectedRestaurant} />
        </div>
    )
}

const mapStateToProps = state=>({
    selectedRestaurant:state.restaurant.selectedRestaurant
})

export default connect(mapStateToProps)(GeneralInfo);