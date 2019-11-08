import React,{useState} from "react";
import "../styles/AutoSearch.scss";
import {connect} from "react-redux";
import AutoSearchOptions from "./AutoSearchOptions";
import {getSearchedLocations} from "../actions/HomeActions";

const AutoSearch =({getSearchedLoc})=>{
    let [isOpen,setDropdownState] = useState(false);

    let searchValue;

    const changeHandler=()=>{
        setDropdownState(true);
        getSearchedLoc(searchValue.value);
    }
    return(
        <div className="autosearch-con">
            <div className="autosearch-con-in">
            <input type="search" className="search-field" placeholder="Search location" ref={input=>searchValue=input} 
                onFocus={()=>setDropdownState(true)} 
                onChange={changeHandler} />
            
            {isOpen && (
                <AutoSearchOptions setDropdownState={setDropdownState} />
            )}
            </div>
            
        </div>

    )
}

const mapDispatchToProps ={getSearchedLoc:getSearchedLocations}

export default connect(null,mapDispatchToProps)(AutoSearch);