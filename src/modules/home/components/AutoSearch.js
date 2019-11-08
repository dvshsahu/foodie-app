import React,{useState} from "react";
import "../styles/AutoSearch.scss";
import {connect} from "react-redux";
import AutoSearchOptions from "./AutoSearchOptions";
import {getSearchedLocations} from "../actions/HomeActions";

const AutoSearch =({getSearchedLoc})=>{
    let [isOpen,setDropdownState] = useState(false);

    let searchValue;
    let timeout = null;
    const changeHandler=()=>{
        clearTimeout(timeout);

    timeout = setTimeout(()=> {
        setDropdownState(true);
        getSearchedLoc(searchValue.value);
    }, 500);
        
    }
    return(
        <div className="autosearch-con">
            <div className="autosearch-con-in">
            <input type="search" className="search-field" placeholder="Search locality,city" ref={input=>searchValue=input} 
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