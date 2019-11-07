import React from "react";
import {connect} from "react-redux";

import "../styles/Review.scss"
import ReviewBlock from "./ReviewBlock";

const UserReview = ({reviews})=>{
    return(
        <div className="user-review-con">
            <div className="title">Reviews</div>
            <div>
                {reviews.map(({review})=>{
                    return(
                        <div key={review.id}>
                            <ReviewBlock review={review} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state=>({
    reviews:state.restaurant.selectedRestaurant.all_reviews.reviews
})

export default connect(mapStateToProps)(UserReview);
