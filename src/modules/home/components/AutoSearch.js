import React,{useState,Fragment} from "react";
import "../styles/AutoSearch.scss";
import {connect} from "react-redux";
import {getSearchedLocations,getRestaurantsByLocationId} from "../actions/HomeActions";

const AutoSearch =({getRestoByLoc})=>{
    let [isOpen,setDropdownState] = useState(false);
    let [locations,setLocations]=useState([]);

    let searchValue;
    const displayLocation=(q)=>{
        getSearchedLocations(q).then(({data})=>{
            setLocations(data.location_suggestions)
        }).catch(err=>{
            console.log(err);
        })
    }

    const changeHandler=(e)=>{
        setDropdownState(true);
        displayLocation(searchValue.value);
    }
    return(
        <div className="autosearch-con">
            <div className="autosearch-con-in">
            <input type="search" className="search-field" placeholder="Search location" ref={input=>searchValue=input} 
                onFocus={()=>setDropdownState(true)} 
                onChange={(e)=>changeHandler(e)} />
            {isOpen && (
                <div className="drop-down-con">
                    <ul>
                    {locations.map(({entity_id,title})=>{
                        return(
                            <li key={entity_id}>
                                <a onClick={()=>getRestoByLoc(entity_id)}>{title}</a>
                            </li>
                        )
                    })}
                    </ul>
                   
                    <p>Use my current location</p>
                </div>
            )}
            </div>
            
        </div>

    )
}

const mapDispatchToProps ={getRestoByLoc:getRestaurantsByLocationId}

export default connect(null,mapDispatchToProps)(AutoSearch);