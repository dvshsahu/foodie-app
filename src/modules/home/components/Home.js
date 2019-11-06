import React,{Fragment} from "react";
import "../styles/Home.scss";

import AutoSearch from "./AutoSearch";
import RestaurantList from "./RestaurantList";

const Home=()=>{
    return(
        <Fragment>
            <div className="search-con">
                <AutoSearch />
            </div>
            <RestaurantList />
        </Fragment>
    )
}

export default Home;