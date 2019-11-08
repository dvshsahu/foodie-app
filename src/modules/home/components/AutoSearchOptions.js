import React from "react";
import {connect} from "react-redux";
import {getRestaurantsByLocationId,
    getRestaurantsByGeolocationCoordinates} from "../actions/HomeActions";

/**
 * component to display searched location list
 * @param {object} param0 
 */
const AutoSearchOptions =({locations,getRestoByLoc,setDropdownState,getRestoByGeoLoc})=>{
    const selectlocation=(loc)=>{
        getRestoByLoc(loc);
        setDropdownState(false);
    }

    const getLocation=()=> {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=>{
            getRestoByGeoLoc(position.coords.latitude,position.coords.longitude);
            setDropdownState(false);
          });
        } else {
          alert("Geolocation is not supported by this browser.");
        }
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
            <button onClick={getLocation} className="curr-loc">Use my current location</button>
        </div>
    )
}

const mapStateToProps = state=>({
    locations:state.location.locationList
})

const mapDispatchToProps ={getRestoByLoc:getRestaurantsByLocationId,getRestoByGeoLoc:getRestaurantsByGeolocationCoordinates}

export default connect(mapStateToProps,mapDispatchToProps)(AutoSearchOptions);