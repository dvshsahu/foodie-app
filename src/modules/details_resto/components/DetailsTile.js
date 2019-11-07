import React from "react";

const DetailsTile = ({selectedRestaurant}) =>{

    let {name,cuisines,user_rating} = selectedRestaurant;
    return(
        <div className="resto-tile-con">
            <div className="resto-name-con">
                <div className="resto-title">
                    {name}
                </div>
                <div className="resto-cuisine">
                    {cuisines}
                </div>
            </div>
            {user_rating&&<div className="review-con">
                <div className="resto-rating" style={{background:`#${user_rating.rating_color}`}}>{user_rating.aggregate_rating}</div>
                <div className="rating-text">{user_rating.rating_text}</div>
                <div className="resto-votes">{user_rating.votes} votes</div>
            </div>}
        </div>
    )
}


export default DetailsTile;