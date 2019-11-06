import React from "react";
import {connect} from "react-redux";
import {getRestaurantsByLocationId} from "../actions/HomeActions";

/**
 * component to display searched location list
 * @param {object} param0 
 */
const AutoSearchOptions =({locations,getRestoByLoc,setDropdownState})=>{
    const selectlocation=(id)=>{
        getRestoByLoc(id);
        setDropdownState(false);
    }

    return(
        <div className="drop-down-con">
            <ul>
            {locations.map(({entity_id,title})=>{
                return(
                    <li key={entity_id}>
                        <a onClick={()=>selectlocation(entity_id)}>{title}</a>
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