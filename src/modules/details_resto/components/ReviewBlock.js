import React from "react";
import StarRatings from 'react-star-ratings';

const ReviewBlock = ({review})=>{
    let {rating,
        review_text,
        rating_color,
        review_time_friendly,
        rating_text,
        user} = review;

    let {name,
        profile_image,
        foodie_level,
        foodie_color} = user;
    return(
        <div className="user-review-block-con">
            <div className="user-info">
                <div className="prof-pic">
                    <img src={profile_image} width="100%" height="100%" />
                </div>
                <div className="user-name">
                    <div>
                        {name}
                    </div>
                    <div className="foodie-title" style={{background:`#${foodie_color}`}}>{foodie_level}</div>                                       
                </div>
                <div className="rating">
                    <div className="rating-text">{rating}<small>/5</small></div>
                    <StarRatings
                        rating={rating}
                        starRatedColor={rating_color}
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="1px"
                        name='rating'
                        />
                </div>
            </div>
            <div className="review-info">
                <div className="rating-text">
                    {rating_text}
                </div>
                <div className="review-text">
                    {review_text}
                </div>
                <div className="review-time">
                    {review_time_friendly}
                </div>
            </div>
        </div>
    );
}


export default ReviewBlock;
