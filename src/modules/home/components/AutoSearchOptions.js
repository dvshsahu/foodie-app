import React from "react";
import {connect} from "react-redux";
import {getRestaurantsByLocationId} from "../actions/HomeActions";

/**
 * component to display searched location list
 * @param {object} param0 
 */
const AutoSearchOptions =({locations,getRestoByLoc,setDropdownState})=>{
    const selectlocation=(loc)=>{
        getRestoByLoc(loc);
        setDropdownState(false);
    }

    return(
        <div className="drop-down-con">
            <ul>
            {locations.map((val)=>{
                return(
                    <li key={val.entity_id}>
                        <a onClick={()=>selectlocation(val)}>{val.title}</a>
                    </li>
                )
            })}
            </ul>
            <p>Use my current location</p>
        </div>
    )
}

const mapStateToProps = state=>({
    locations:state.location.locationList
})

const mapDispatchToProps ={getRestoByLoc:getRestaurantsByLocationId}

export default connect(mapStateToProps,mapDispatchToProps)(AutoSearchOptions);