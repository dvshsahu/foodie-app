import React,{useState,Fragment} from "react";
import "../styles/AutoSearch.scss";
import {connect} from "react-redux";
import AutoSearchOptions from "./AutoSearchOptions";
import {getSearchedLocations} from "../actions/HomeActions";

const AutoSearch =({getSearchedLoc})=>{
    let [isOpen,setDropdownState] = useState(false);

    let searchValue;

    const changeHandler=(e)=>{
        setDropdownState(true);
        getSearchedLoc(searchValue.value);
    }
    return(
        <div className="autosearch-con">
            <div className="autosearch-con-in">
            <input type="search" className="search-field" placeholder="Search location" ref={input=>searchValue=input} 
                onFocus={()=>setDropdownState(true)} 
                onChange={(e)=>changeHandler(e)} />
            {isOpen && (
                <AutoSearchOptions setDropdownState={setDropdownState} />
            )}
            </div>
            
        </div>

    )
}

const mapDispatchToProps ={getSearchedLoc:getSearchedLocations}

export default connect(null,mapDispatchToProps)(AutoSearch);