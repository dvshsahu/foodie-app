import React from "react";
import "../styles/RestaurantBlock.scss";
import {Link} from "react-router-dom";
/**
 * component to display restaurant information in searched list
 * @param {object} param0 
 */
const RestaurantBlock=({resto,likeRestaurant})=>{
    let {thumb,id,name,location,average_cost_for_two,currency,user_rating,cuisines,isLiked} = resto;

    const likeResto=()=>{
        likeRestaurant(id);
    }
    return(
        <div className="block-con">
            <div className="thumb-con">
                <div className="thumb-img" onClick={likeResto} style={{background:`url(${thumb})`}}>
                    <img src={isLiked?"./like-fill.svg":"./like.svg"} width="20" height="20" />
                </div>
            </div>
            <div className="details-con">
                <div className="gen-con">
                    <div className="name-con">
                        <span className="resto-title"><Link to={`/restaurant/${id}`}>{name}</Link></span>
                        <span className="cuisines">{cuisines}</span>
                        <span className="resto-avg-cost">Avg. {currency}{average_cost_for_two} for two</span>
                    </div>
                    <div className="review-con">
                        <span className="resto-rating" style={{background:`#${user_rating.rating_color}`}}>{user_rating.aggregate_rating}</span>
                        <span className="rating-text">{user_rating.rating_text}</span>
                        <span className="resto-votes">{user_rating.votes} votes</span>
                    </div>
                </div>
                <div className="location-con">
                    <span className="loc-a"><img src="loc.png" alt="location icon" width="20px"/> {location.locality}, {location.city}</span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantBlock;