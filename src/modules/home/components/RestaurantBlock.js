import React from "react";
import "../styles/RestaurantBlock.scss";
import {Link} from "react-router-dom";

const RestaurantBlock=({resto})=>{
    let {thumb,id,name,location,average_cost_for_two,currency,user_rating,cuisines} = resto;
    return(
        <Link to={`/restaurant/${id}`} className="block-con">
            <div className="thumb-con">
                <img src={thumb} alt="thumbnail" />
            </div>
            <div className="details-con">
                <div className="gen-con">
                    <div className="name-con">
                        <span className="resto-title">{name}</span>
                        <span className="cuisines">{cuisines}</span>
                        <span className="resto-avg-cost">Avg. cost {currency}{average_cost_for_two} for two</span>
                    </div>
                    <div className="review-con">
                        <span className="resto-rating" style={{background:`#${user_rating.rating_color}`}}>{user_rating.aggregate_rating}</span>
                        <span className="rating-text">{user_rating.rating_text}</span>
                        <span className="resto-votes">{user_rating.votes} votes</span>
                    </div>
                </div>
                <div className="location-con">
                    <a className="loc-a"><img src="loc.png" width="20px"/> {location.locality}, {location.city}</a>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantBlock;